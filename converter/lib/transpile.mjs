import { OPCODES } from "./classfile.mjs";
/* JVM bytecode -> JavaScript, for the methods a converted mod needs to actually run.
 *
 * This is a stack machine, the same way the JVM is one: each method becomes a small switch over a
 * program counter with an explicit operand stack. That sounds slow, and for a whole game it would
 * be, but a mod's handler is a few dozen instructions — and the alternative (a mod that only exists
 * as a report) is worth less than a mod that runs.
 *
 * What is *not* here is honest: a method with an exception handler, or with a call that no resolver
 * can place, is refused with the reason, and the converter's report names it. The call router
 * (`context.invoke`, `context.getField`, …) is supplied by the generated mod: it maps the mod's own
 * classes to these transpiled functions, a known Fabric/Minecraft surface to the JS API, and
 * anything else to the client internals when the mod asked for them.
 */

const LENGTHS = {
  nop: 1, aconst_null: 1, iconst_m1: 1, iconst_0: 1, iconst_1: 1, iconst_2: 1, iconst_3: 1, iconst_4: 1, iconst_5: 1,
  lconst_0: 1, lconst_1: 1, fconst_0: 1, fconst_1: 1, fconst_2: 1, dconst_0: 1, dconst_1: 1,
  bipush: 2, sipush: 3, ldc: 2, ldc_w: 3, ldc2_w: 3,
  iload: 2, lload: 2, fload: 2, dload: 2, aload: 2,
  istore: 2, lstore: 2, fstore: 2, dstore: 2, astore: 2,
  iinc: 3,
  iadd: 1, ladd: 1, fadd: 1, dadd: 1, isub: 1, lsub: 1, fsub: 1, dsub: 1,
  imul: 1, lmul: 1, fmul: 1, dmul: 1, idiv: 1, ldiv: 1, fdiv: 1, ddiv: 1,
  irem: 1, lrem: 1, frem: 1, drem: 1, ineg: 1, lneg: 1, fneg: 1, dneg: 1,
  ishl: 1, lshl: 1, ishr: 1, lshr: 1, iushr: 1, lushr: 1, iand: 1, land: 1, ior: 1, lor: 1, ixor: 1, lxor: 1,
  i2l: 1, i2f: 1, i2d: 1, l2i: 1, l2f: 1, l2d: 1, f2i: 1, f2l: 1, f2d: 1, d2i: 1, d2l: 1, d2f: 1,
  i2b: 1, i2c: 1, i2s: 1,
  lcmp: 1, fcmpl: 1, fcmpg: 1, dcmpl: 1, dcmpg: 1,
  ireturn: 1, lreturn: 1, freturn: 1, dreturn: 1, areturn: 1, return: 1,
  arraylength: 1, athrow: 1, monitorenter: 1, monitorexit: 1,
  iastore: 1, lastore: 1, fastore: 1, dastore: 1, aastore: 1, bastore: 1, castore: 1, sastore: 1,
  pop: 1, pop2: 1, dup: 1, dup_x1: 1, dup_x2: 1, dup2: 1, dup2_x1: 1, dup2_x2: 1, swap: 1
};
const BRANCHES = {
  ifeq: "==", ifne: "!=", iflt: "<", ifge: ">=", ifgt: ">", ifle: "<=",
  if_icmpeq: "==", if_icmpne: "!=", if_icmplt: "<", if_icmpge: ">=", if_icmpgt: ">", if_icmple: "<=",
  if_acmpeq: "==", if_acmpne: "!=", ifnull: "==", ifnonnull: "!="
};

/* ------------------------------------------------------------------ descriptors ----------------- */
export function parseDescriptor(descriptor) {
  const args = [];
  const open = descriptor.indexOf("(");
  if (open < 0) { throw new Error("not a method descriptor: " + descriptor); }
  let at = open + 1;
  while (at < descriptor.length && descriptor[at] !== ")") {
    const parsed = readType(descriptor, at);
    args.push(parsed.type);
    at = parsed.next;
  }
  const result = readType(descriptor, at + 1);
  return { args, returns: result.type };
}
function readType(text, at) {
  const c = text[at];
  if (c === "[") { const inner = readType(text, at + 1); return { type: inner.type + "[]", next: inner.next }; }
  if (c === "L") { const end = text.indexOf(";", at); return { type: text.slice(at + 1, end), next: end + 1 }; }
  return { type: c, next: at + 1 };
}
export function slotsFor(descriptorArg) {
  return (descriptorArg === "J" || descriptorArg === "D") ? 2 : 1;
}
function isVoid(type) { return type === "V"; }
function defaultValue(type) {
  if (type === "Z" || type === "B" || type === "C" || type === "S" || type === "I") { return "0"; }
  if (type === "J") { return "0n"; }
  if (type === "F" || type === "D") { return "0"; }
  return "null";
}

/* ------------------------------------------------------------------ the compiler ---------------- */

/**
 * @param {object} options
 *   info       parsed class (for the constant pool)
 *   method     the method to transpile
 *   className  owner
 *   resolve    (owner, name, descriptor, kind) -> {kind:'self'|'mapped'|'internals'|'unsupported', why?}
 *   label      a name used in comments/errors
 */
export function transpileMethod(options) {
  const { info, method, className, resolve } = options;
  const remap = options.remap || { owner: (name) => name, name: (owner, name) => name, klass: (name) => name };
  if (!method.code) { return { ok: false, reason: "no bytecode (abstract or native)" }; }
  const descriptor = parseDescriptor(method.descriptor);
  const pool = info.pool;
  const code = method.code.code;
  const instructions = decode(code, pool, info.bootstrapMethods);
  const indexByPc = new Map();
  instructions.forEach((instruction, idx) => indexByPc.set(instruction.pc, idx));
  for (const instruction of instructions) {
    if (instruction.targetPc != null) { instruction.targetIndex = indexByPc.get(instruction.targetPc); }
  }
  const argSlots = method.access & 0x0008 ? 0 : 1;
  let localSlot = argSlots;
  for (const arg of descriptor.args) { localSlot += slotsFor(arg); }
  const localCount = Math.max(method.code.maxLocals, localSlot);


  // Exception handlers: bytecode pcs become instruction indices, and the handler gets the
  // exception pushed on the operand stack, which is what the JVM does.
  const handlers = [];
  let hasHandlers = false;
  for (const entry of (method.code.exceptions || [])) {
    const start = indexByPc.get(entry.startPc);
    const end = indexByPc.get(entry.endPc);
    const handler = indexByPc.get(entry.handlerPc);
    if (start == null || end == null || handler == null) { continue; }
    handlers.push({ start, end, handler });
    hasHandlers = true;
  }

  const lines = [];
  const unsupported = [];
  const unresolvedLambdas = [];
  let deferredCalls = 0;
  const pad = (slot) => "l" + slot;
  const emit = (line) => lines.push(line);

  // A label per instruction index; branches jump here.
  const byIndex = new Map();
  instructions.forEach((instruction, index) => byIndex.set(index, instruction));

  const header = [];
  header.push("var s = [];");
  header.push("var pc = 0;");
  header.push("var r;");
  header.push("while (true) { switch (pc) {");

  emit("var s = [];");
  emit("var pc = 0;");
  emit("var __pc = 0;");
  if (hasHandlers) {
    emit("var __handlers = " + JSON.stringify(handlers) + ";");
    emit("function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }");
    emit("for (;;) {");
    emit("try {");
    emit("while (true) { __pc = pc; switch (pc) {");
  } else {
    emit("while (true) { switch (pc) {");
  }

  const localName = (slot) => pad(slot);
  const declared = new Array(localCount).fill(false);
  const declare = (slot) => { if (!declared[slot]) { declared[slot] = true; return "var " + localName(slot) + " = undefined; "; } return ""; };

  // Pre-declare locals for clarity; initialise parameters from the argument array.
  for (let slot = 0; slot < localCount; slot++) { declared[slot] = true; }
  const localDecls = [];
  for (let slot = 0; slot < localCount; slot++) { localDecls.push(localName(slot)); }
  const prefix = localDecls.length ? ("var " + localDecls.join(", ") + ";\n") : "";
  const init = [];
  if (!(method.access & 0x0008)) { init.push(localName(0) + " = __self;"); }
  {
    let slot = argSlots;
    descriptor.args.forEach((arg, index) => {
      init.push(localName(slot) + " = __args[" + index + "];");
      slot += slotsFor(arg);
    });
  }

  let emitCase = (index, body) => { emit("case " + index + ":"); emit("  __pc = " + index + ";"); for (const line of body) { emit("  " + line); } };

  let fall = false;
  instructions.forEach((instruction, index) => {
    const body = [];
    switch (instruction.name) {
      case "nop": body.push("pc = " + (index + 1) + "; continue;"); break;
      case "aconst_null": body.push("s.push(null); pc = " + (index + 1) + "; continue;"); break;
      case "iconst_m1": body.push("s.push(-1); pc = " + (index + 1) + "; continue;"); break;
      case "iconst_0": body.push("s.push(0); pc = " + (index + 1) + "; continue;"); break;
      case "iconst_1": body.push("s.push(1); pc = " + (index + 1) + "; continue;"); break;
      case "lconst_0": body.push("s.push(0n); pc = " + (index + 1) + "; continue;"); break;
      case "lconst_1": body.push("s.push(1n); pc = " + (index + 1) + "; continue;"); break;
      case "dconst_0": case "fconst_0": body.push("s.push(0); pc = " + (index + 1) + "; continue;"); break;
      case "dconst_1": case "fconst_1": body.push("s.push(1); pc = " + (index + 1) + "; continue;"); break;
      case "fconst_2": body.push("s.push(2); pc = " + (index + 1) + "; continue;"); break;
      default: {
        if (/^iconst_[2-5]$/.test(instruction.name)) { body.push("s.push(" + instruction.name.slice(7) + "); pc = " + (index + 1) + "; continue;"); break; }
        if (/^[ilfda]load_[0-3]$/.test(instruction.name)) {
          const op = instruction.name[0];
          const slot = Number(instruction.name[instruction.name.length - 1]) + (op === "l" || op === "d" ? 0 : 0);
          const slot2 = identifyLoadStoreSlot(instruction.name, method, descriptor);
          body.push("s.push(" + localName(slot2) + "); pc = " + (index + 1) + "; continue;");
          break;
        }
        if (/^[ilfda]store_[0-3]$/.test(instruction.name)) {
          const slot = Number(instruction.name[instruction.name.length - 1]);
          body.push(localName(slot) + " = s.pop(); pc = " + (index + 1) + "; continue;");
          break;
        }
        if (instruction.name === "iinc") { body.push(localName(instruction.operand) + " = (" + localName(instruction.operand) + " | 0) + " + instruction.constant + "; pc = " + (index + 1) + "; continue;"); break; }
        if (/^(bipush|sipush|ldc|ldc_w|ldc2_w)$/.test(instruction.name)) {
          body.push("s.push(" + literal(instruction.operand) + "); pc = " + (index + 1) + "; continue;"); break;
        }
        if (/^[ilfda]load$/.test(instruction.name) || /^[ilfda]store$/.test(instruction.name)) {
          const isLoad = /load$/.test(instruction.name);
          body.push((isLoad ? "s.push(" + localName(instruction.operand) + ")" : localName(instruction.operand) + " = s.pop()") + "; pc = " + (index + 1) + "; continue;");
          break;
        }
        if (["iadd", "ladd", "fadd", "dadd", "isub", "lsub", "fsub", "dsub"].includes(instruction.name)) {
          const operator = /add$/.test(instruction.name) ? "+" : "-";
          body.push("r = s.pop(); s.push(s.pop() " + operator + " r); pc = " + (index + 1) + "; continue;"); break;
        }
        if (["imul", "lmul", "fmul", "dmul", "idiv", "ldiv", "fdiv", "ddiv", "irem", "lrem", "irem", "frem", "drem", "ishl", "lshl", "ishr", "lshr", "iushr", "lushr", "iand", "land", "ior", "lor", "ixor", "lxor"].includes(instruction.name)) {
          const operator = { imul: "*", lmul: "*", fmul: "*", dmul: "*", idiv: "/", ldiv: "/", fdiv: "/", ddiv: "/",
            irem: "%", lrem: "%", frem: "%", drem: "%", ishl: "<<", lshl: "<<", ishr: ">>", lshr: ">>",
            iushr: ">>>", lushr: ">>>", iand: "&", land: "&", ior: "|", lor: "|", ixor: "^", lxor: "^" }[instruction.name];
          body.push("r = s.pop(); s.push(s.pop() " + operator + " r); pc = " + (index + 1) + "; continue;"); break;
        }
        if (["ineg", "lneg", "fneg", "dneg"].includes(instruction.name)) { body.push("s.push(-s.pop()); pc = " + (index + 1) + "; continue;"); break; }
        if (["i2b", "i2c", "i2s"].includes(instruction.name)) { body.push("s.push(s.pop() | 0); pc = " + (index + 1) + "; continue;"); break; }
        if (["i2l", "l2i", "i2f", "f2i", "i2d", "d2i", "l2f", "f2l", "l2d", "d2l", "f2d", "d2f"].includes(instruction.name)) {
          const op = instruction.name.split("2")[1];
          body.push("r = s.pop(); s.push(" + (op === "l" ? "BigInt(r | 0)" : "Number(r)") + "); pc = " + (index + 1) + "; continue;"); break;
        }
        if (instruction.name === "lcmp" || /^[fd]cmp/.test(instruction.name)) { body.push("r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = " + (index + 1) + "; continue;"); break; }
        if (instruction.name === "dup") { body.push("s.push(s[s.length - 1]); pc = " + (index + 1) + "; continue;"); break; }
        if (instruction.name === "dup_x1") { body.push("r = s.pop(); var b = s.pop(); s.push(r, b, r); pc = " + (index + 1) + "; continue;"); break; }
        if (instruction.name === "dup_x2") { body.push("r = s.pop(); var b2 = s.pop(); var a2 = s.pop(); s.push(r, a2, b2, r); pc = " + (index + 1) + "; continue;"); break; }
        if (instruction.name === "pop") { body.push("s.pop(); pc = " + (index + 1) + "; continue;"); break; }
        if (instruction.name === "pop2") { body.push("s.pop(); pc = " + (index + 1) + "; continue;"); break; }
        if (instruction.name === "dup2") { body.push("s.push(s[s.length - 1]); s.push(s[s.length - 2]); pc = " + (index + 1) + "; continue;"); break; }
        if (instruction.name === "swap") { body.push("r = s.pop(); var b3 = s.pop(); s.push(r, b3); pc = " + (index + 1) + "; continue;"); break; }
        if (instruction.name === "iinc") { body.push(localName(instruction.operand) + " = (" + localName(instruction.operand) + " | 0) + " + instruction.constant + "; pc = " + (index + 1) + "; continue;"); break; }
        if (/^[ilfda]return$/.test(instruction.name) || instruction.name === "return") {
          body.push(instruction.name === "return" ? "return;" : "return s.pop();"); break;
        }
        if (instruction.name === "getstatic" || instruction.name === "putstatic" || instruction.name === "getfield" || instruction.name === "putfield") {
          const field = instruction.operand;
          if (!field) { unsupported.push("field access with no reference"); break; }
          const isStatic = instruction.name.endsWith("static");
          const isPut = instruction.name.startsWith("put");
          if (isPut) {
            body.push("r = s.pop();");
            if (!isStatic) { body.push("var target = s.pop();"); }
            body.push((isStatic ? "__ctx.putStatic(" : "__ctx.putField(") + '"' + field.owner + '","' + field.name + '","' + field.descriptor + '",'
              + (isStatic ? "r" : "target, r") + "); pc = " + (index + 1) + "; continue;");
          } else {
            body.push("s.push(" + (isStatic ? "__ctx.getStatic(" : "__ctx.getField(") + '"' + remap.owner(field.owner) + '","' + remap.name(field.owner, field.name) + '","' + field.descriptor + '"'
              + (isStatic ? "" : ", s.pop()") + ")); pc = " + (index + 1) + "; continue;");
          }
          break;
        }
        if (instruction.name === "invokedynamic") {
          const dynamic = instruction.operand;
          const lambda = dynamic && dynamic.target;
          if (dynamic && dynamic.concat) {
            // String concatenation compiles to an invokedynamic against StringConcatFactory. The
            // recipe is a bootstrap argument; joining the arguments reproduces it for the shape
            // every compiler emits.
            const parsed = parseDescriptor(dynamic.descriptor);
            const argCount = parsed.args.length;
            if (argCount) { body.push("var cv = new Array(" + argCount + "); for (var ci = " + (argCount - 1) + "; ci >= 0; ci--) cv[ci] = s.pop(); s.push(cv.join('')); pc = " + (index + 1) + "; continue;"); }
            else { body.push("s.push(''); pc = " + (index + 1) + "; continue;"); }
            break;
          }
          if (!lambda || !lambda.owner) {
            // The method keeps its translation; only this one value becomes a function that fails
            // if it is ever called. Refusing the whole method for one exotic bootstrap was costing
            // more than it protected.
            unresolvedLambdas.push(className + "." + method.name + instruction.pc);
            body.push("s.push(__ctx.unsupportedLambda(" + JSON.stringify(className + "." + method.name + ":" + instruction.pc) + ")); pc = " + (index + 1) + "; continue;");
            break;
          }
          const parsed = parseDescriptor(lambda.descriptor);
          const argCount = parsed.args.length;
          if (argCount) { body.push("var dv = new Array(" + argCount + "); for (var di = " + (argCount - 1) + "; di >= 0; di--) dv[di] = s.pop();"); }
          body.push("s.push(__ctx.invoke(" + JSON.stringify(lambda.owner) + "," + JSON.stringify(lambda.name) + "," + JSON.stringify(lambda.descriptor) + ", null, " + (argCount ? "dv" : "[]") + ")); pc = " + (index + 1) + "; continue;");
          break;
        }
        if (instruction.name.startsWith("invoke")) {
          const call = instruction.operand;
          if (!call) { unsupported.push("invoke with no reference"); break; }
          const target = resolve(call.owner, call.name, call.descriptor, instruction.name);
          if (target && target.kind === "defer") {
            const parsedDefer = parseDescriptor(call.descriptor);
            const argCountDefer = parsedDefer.args.length;
            if (argCountDefer) { body.push("var dv = new Array(" + argCountDefer + "); for (var di = " + (argCountDefer - 1) + "; di >= 0; di--) dv[di] = s.pop();"); }
            if (instruction.name !== "invokestatic") { body.push("s.pop();"); }
            deferredCalls++;
            body.push("throw __ctx.toError((" + JSON.stringify(call.owner.replace(/\//g, ".") + "." + call.name) + ") + ' needs the client internals');");
            break;
          }
          if (!call.owner || !call.name) {
            unsupported.push("a call with no owner or name (damaged bytecode)");
            break;
          }
          if (target && target.kind === "unsupported") {
            unsupported.push(call.owner.replace(/\//g, ".") + "." + call.name + (target.why ? " — " + target.why : ""));
            break;
          }
          const parsed = parseDescriptor(call.descriptor);
          const isStaticCall = instruction.name === "invokestatic";
          const callOwner = remap.owner(call.owner);
          const callName = remap.name(call.owner, call.name);
          const argCount = parsed.args.length;
          if (argCount) { body.push("var av = new Array(" + argCount + "); for (var ai = " + (argCount - 1) + "; ai >= 0; ai--) av[ai] = s.pop();"); }
          if (!isStaticCall) { body.push("var rv = s.pop();"); }
          const argsText = argCount ? "av" : "[]";
          const callText = (isStaticCall ? "__ctx.invokeStatic(" : "__ctx.invoke(") + '"' + callOwner + '","' + callName + '","' + call.descriptor + '"'
            + (isStaticCall ? ", " : ", rv, ") + argsText + ")";
          if (isVoid(parsed.returns)) { body.push(callText + "; pc = " + (index + 1) + "; continue;"); }
          else { body.push("s.push(" + callText + "); pc = " + (index + 1) + "; continue;"); }
          break;
        }
        if (instruction.name === "new") { body.push("s.push(__ctx.newInstance(" + JSON.stringify(remap.klass(instruction.operand)) + ")); pc = " + (index + 1) + "; continue;"); break; }
        if (instruction.name === "anewarray" || instruction.name === "newarray") {
          body.push("r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = " + (instruction.name === "newarray" ? "0" : "null") + "; } s.push(arr); pc = " + (index + 1) + "; continue;");
          break;
        }
        if (instruction.name === "checkcast") { body.push("s.push(__ctx.cast(s.pop(), " + JSON.stringify(remap.klass(instruction.operand)) + ")); pc = " + (index + 1) + "; continue;"); break; }
        if (instruction.name === "instanceof") { body.push("s.push(__ctx.isInstance(s.pop(), " + JSON.stringify(remap.klass(instruction.operand)) + ")); pc = " + (index + 1) + "; continue;"); break; }
        if (instruction.name === "athrow") { body.push("throw __ctx.toError(s.pop());"); break; }
        if (instruction.name === "monitorenter" || instruction.name === "monitorexit") {
          // One realm, one thread: a monitor has nothing to guard here.
          body.push("s.pop(); pc = " + (index + 1) + "; continue;"); break;
        }
        if (instruction.name === "arraylength") { body.push("s.push(s.pop().length); pc = " + (index + 1) + "; continue;"); break; }
        if (/^(i|l|f|d|a|b|c|s)aload$/.test(instruction.name)) {
          body.push("r = s.pop() | 0; s.push(s.pop()[r]); pc = " + (index + 1) + "; continue;"); break;
        }
        if (/^[ilfda]astore$/.test(instruction.name) || /^[bdca]astore$/.test(instruction.name) || instruction.name === "sastore" || instruction.name === "aastore") {
          body.push("r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = " + (index + 1) + "; continue;"); break;
        }
        if (/aload$/.test(instruction.name) && instruction.operand != null) { body.push("s.push(" + localName(instruction.operand) + "); pc = " + (index + 1) + "; continue;"); break; }
        if (instruction.name === "tableswitch" || instruction.name === "lookupswitch") {
          const table = instruction.operand;
          if (!table) { unsupported.push("a switch with no table"); break; }
          body.push("r = s.pop() | 0; switch (r) {");
          for (const entry of table.cases) {
            const target = indexByPc.get(entry.targetPc);
            if (target == null) { unsupported.push("a switch target outside the method"); break; }
            body.push("  case " + entry.value + ": pc = " + target + "; break;");
          }
          const defaultTarget = indexByPc.get(table.defaultPc);
          if (defaultTarget == null) { unsupported.push("a switch default outside the method"); break; }
          body.push("  default: pc = " + defaultTarget + "; break;");
          body.push("} continue;");
          break;
        }
        if (instruction.name === "goto" || instruction.name === "goto_w") {
          body.push("pc = " + instruction.targetIndex + "; continue;"); break;
        }
        if (BRANCHES[instruction.name]) {
          const operator = BRANCHES[instruction.name];
          if (instruction.name === "ifnull" || instruction.name === "ifnonnull") {
            body.push("r = s.pop(); if (r " + operator + " null) { pc = " + instruction.targetIndex + "; } else { pc = " + (index + 1) + "; } continue;");
          } else if (/^if_/.test(instruction.name)) {
            body.push("r = s.pop(); var l = s.pop(); if (l " + operator + " r) { pc = " + instruction.targetIndex + "; } else { pc = " + (index + 1) + "; } continue;");
          } else {
            body.push("r = s.pop(); if (r " + operator + " 0) { pc = " + instruction.targetIndex + "; } else { pc = " + (index + 1) + "; } continue;");
          }
          break;
        }
        if (instruction.name === "iinc") { break; }
        unsupported.push("opcode " + instruction.name);
      }
    }
    emitCase(index, body.length ? body : ["pc = " + (index + 1) + "; continue;"]);
  });

  emit("default: throw new Error(\"webmc transpiler: pc out of range \" + pc);");
  if (hasHandlers) {
    emit("} }");
    emit("} catch (__e) {");
    emit("  var __h = __pickHandler(__pc);");
    emit("  if (__h < 0) { throw __e; }");
    emit("  pc = __h; s = [__e]; continue;");
    emit("}");
    emit("}");
  } else {
    emit("} }");
  }

  if (unsupported.length) {
    return { ok: false, reason: "unsupported: " + Array.from(new Set(unsupported)).slice(0, 4).join("; "), unsupported };
  }

  return {
    ok: true,
    locals: localCount,
    unresolved: unresolvedLambdas,
    deferred: deferredCalls,
    source: "function (__ctx, __self, __args) {\n" + prefix + init.map((line) => line + "\n").join("") + lines.join("\n") + "\n}"
  };
}

function literal(value) {
  if (value == null) { return "null"; }
  if (typeof value === "number") { return String(value); }
  return JSON.stringify(String(value));
}

/* ------------------------------------------------------------------ decoding ------------------- */

/** Decode the instructions the transpiler needs, with branch targets resolved to pcs. */
export function decode(code, pool, bootstrapMethods) {
  const out = [];
  let switchTable = null;
  let pc = 0;
  while (pc < code.length) {
    const op = code[pc];
    const name = OP_NAMES[op];
    if (!name) { throw new Error("unknown opcode 0x" + op.toString(16)); }
    let length = (OPCODES[op] && OPCODES[op].length) || LENGTHS[name] || 0;
    if (length <= 0 && name !== "tableswitch" && name !== "lookupswitch" && name !== "wide") {
      throw new Error("unknown instruction length for " + name);
    }
    if (name === "tableswitch") {
      let cursor = pc + 1;
      cursor += (4 - (cursor % 4)) % 4;
      const low = read32(code, cursor + 4);
      const high = read32(code, cursor + 8);
      const cases = [];
      let at = cursor + 12;
      for (let value = low; value <= high; value++, at += 4) { cases.push({ value, targetPc: pc + read32(code, at) }); }
      length = (cursor - pc) + 12 + cases.length * 4;
      switchTable = { cases, defaultPc: pc + read32(code, cursor) };
      if (high < low || length <= 0 || pc + length > code.length) { throw new Error("damaged tableswitch at " + pc); }
    } else if (name === "lookupswitch") {
      let cursor = pc + 1;
      cursor += (4 - (cursor % 4)) % 4;
      const pairs = read32(code, cursor + 4);
      const cases = [];
      let at = cursor + 8;
      for (let i = 0; i < pairs; i++, at += 8) { cases.push({ value: read32(code, at), targetPc: pc + read32(code, at + 4) }); }
      length = (cursor - pc) + 8 + pairs * 8;
      switchTable = { cases, defaultPc: pc + read32(code, cursor) };
      if (pairs < 0 || length <= 0 || pc + length > code.length) { throw new Error("damaged lookupswitch at " + pc); }
    } else if (name === "wide") {
      const next = code[pc + 1];
      length = next === 0x84 ? 6 : 4;
    }
    const instruction = { pc, op, name, length, operand: switchTable, constant: null, targetPc: null, offset: null };
    switchTable = null;
    if (name === "iinc") { instruction.operand = code[pc + 1]; instruction.constant = (code[pc + 2] << 24) >> 24; }
    else if (name === "bipush") { instruction.operand = (code[pc + 1] << 24) >> 24; }
    else if (name === "sipush") { instruction.operand = (((code[pc + 1] << 8) | code[pc + 2]) << 16) >> 16; }
    else if (name === "ldc") { instruction.operand = constantAt(pool, code[pc + 1], bootstrapMethods); }
    else if (name === "ldc_w" || name === "ldc2_w") { instruction.operand = constantAt(pool, (code[pc + 1] << 8) | code[pc + 2], bootstrapMethods); }
    else if (/^(getstatic|putstatic|getfield|putfield|invokevirtual|invokespecial|invokestatic|invokeinterface|new|checkcast|instanceof|anewarray)$/.test(name)) {
      instruction.operand = refAt(pool, (code[pc + 1] << 8) | code[pc + 2], name);
    } else if (name === "invokedynamic") {
      const index = (code[pc + 1] << 8) | code[pc + 2];
      instruction.operand = dynamicAt(pool, index, bootstrapMethods);
    } else if (BRANCHES[name]) {
      const offset = (((code[pc + 1] << 8) | code[pc + 2]) << 16) >> 16;
      instruction.offset = offset;
      instruction.targetPc = pc + offset;
    } else if (name === "goto_w") {
      instruction.targetPc = pc + read32(code, pc + 1);
    } else if (/^[ilfda]load$|^[ilfda]store$/.test(name)) {
      instruction.operand = code[pc + 1];
    }
    out.push(instruction);
    pc += length;
  }
  return out;
}

function constantAt(pool, index, bootstrapMethods) {
  const entry = pool[index];
  if (!entry) { return null; }
  if (entry.tag === 8) { return pool[entry.stringIndex] ? pool[entry.stringIndex].value : null; }
  if (entry.tag === 15) { return { methodHandle: entry }; }
  return entry.value != null ? entry.value : null;
}

function refAt(pool, index, name) {
  const entry = pool[index];
  if (!entry) { return null; }
  if (entry.tag === 9 || entry.tag === 10 || entry.tag === 11) {
    const cls = pool[entry.classIndex];
    const nt = pool[entry.nameAndTypeIndex];
    return {
      owner: cls ? pool[cls.nameIndex] && pool[cls.nameIndex].value : null,
      name: nt ? pool[nt.nameIndex] && pool[nt.nameIndex].value : null,
      descriptor: nt ? pool[nt.descriptorIndex] && pool[nt.descriptorIndex].value : null
    };
  }
  if (entry.tag === 7) { return pool[entry.nameIndex] && pool[entry.nameIndex].value; }
  return null;
}

function dynamicAt(pool, index, bootstrapMethods) {
  const entry = pool[index];
  if (!entry || entry.tag !== 18) { return null; }
  const nt = pool[entry.nameAndTypeIndex];
  const bootstrap = bootstrapMethods && bootstrapMethods[entry.bootstrapMethodAttrIndex];
  let target = null;
  let concat = false;
  if (bootstrap) {
    const bootstrapRef = pool[bootstrap.methodRef];
    const bootstrapOwner = bootstrapRef ? pool[bootstrapRef.classIndex] : null;
    const bootstrapName = bootstrapOwner ? pool[bootstrapOwner.nameIndex] && pool[bootstrapOwner.nameIndex].value : null;
    if (bootstrapName && /StringConcatFactory/.test(bootstrapName)) { concat = true; }
  }
  if (bootstrap) {
    let handle = pool[bootstrap.arguments[1]];
    if (!handle || handle.tag !== 15 || handle.referenceKind < 5) {
      handle = bootstrap.arguments.map((index) => pool[index]).find((candidate) => candidate && candidate.tag === 15 && candidate.referenceKind >= 5) || null;
    }
    if (handle && handle.tag === 15 && handle.referenceKind >= 5) {
      const reference = pool[handle.referenceIndex];
      if (reference) {
        const cls = pool[reference.classIndex];
        const impl = pool[reference.nameAndTypeIndex];
        target = {
          owner: cls ? pool[cls.nameIndex] && pool[cls.nameIndex].value : null,
          name: impl ? pool[impl.nameIndex] && pool[impl.nameIndex].value : null,
          descriptor: impl ? pool[impl.descriptorIndex] && pool[impl.descriptorIndex].value : null,
          kind: handle.referenceKind
        };
      }
    }
  }
  return {
    name: nt ? pool[nt.nameIndex] && pool[nt.nameIndex].value : null,
    descriptor: nt ? pool[nt.descriptorIndex] && pool[nt.descriptorIndex].value : null,
    target,
    concat
  };
}

function read32(code, at) { return ((code[at] << 24) | (code[at + 1] << 16) | (code[at + 2] << 8) | code[at + 3]); }

function identifyLoadStoreSlot(name, method, descriptor) { return Number(name[name.length - 1]); }

/* opcode -> name, from the one canonical table in classfile.mjs. */
export const OP_NAMES = (() => {
  const names = {};
  Object.keys(OPCODES).forEach((op) => { names[op] = OPCODES[op].name; });
  return names;
})();
