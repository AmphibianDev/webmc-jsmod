/* A Java class file reader. No dependencies, no compiler, no JDK.
 *
 * Enough of the format to answer the questions a converter asks: what is this class, what does it
 * extend, what annotations does it carry, what methods exist, and what does each method's bytecode
 * call, read and write. Constant-pool strings are resolved to their real values; descriptors are
 * kept as written so a report can show exactly what was in the jar.
 */
import { readFileSync } from "node:fs";

const CP = {
  UTF8: 1, INTEGER: 3, FLOAT: 4, LONG: 5, DOUBLE: 6, CLASS: 7, STRING: 8,
  FIELDREF: 9, METHODREF: 10, INTERFACEMETHODREF: 11, NAMEANDTYPE: 12,
  METHODHANDLE: 15, METHODTYPE: 16, DYNAMIC: 17, INVOKEDYNAMIC: 18, MODULE: 19, PACKAGE: 20
};

export function parseClass(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let at = 0;
  const u1 = () => view.getUint8(at++);
  const u2 = () => { const value = view.getUint16(at); at += 2; return value; };
  const u4 = () => { const value = view.getUint32(at); at += 4; return value; };
  const skip = (n) => { at += n; };

  if (u4() !== 0xcafebabe) { throw new Error("not a class file"); }
  const minor = u2(), major = u2();

  const count = u2();
  const cp = new Array(count).fill(null);
  const utf8 = (index) => (cp[index] && cp[index].value) || "";
  for (let i = 1; i < count; i++) {
    const tag = u1();
    switch (tag) {
      case CP.UTF8: { const length = u2(); cp[i] = { tag, value: new TextDecoder().decode(bytes.subarray(at, at + length)) }; skip(length); break; }
      case CP.INTEGER: cp[i] = { tag, value: view.getInt32(at) }; skip(4); break;
      case CP.FLOAT: cp[i] = { tag, value: view.getFloat32(at) }; skip(4); break;
      case CP.LONG: cp[i] = { tag, value: Number(view.getBigInt64(at)) }; skip(8); i++; break;
      case CP.DOUBLE: cp[i] = { tag, value: view.getFloat64(at) }; skip(8); i++; break;
      case CP.CLASS: cp[i] = { tag, nameIndex: u2() }; break;
      case CP.STRING: cp[i] = { tag, stringIndex: u2() }; break;
      case CP.FIELDREF: case CP.METHODREF: case CP.INTERFACEMETHODREF:
        cp[i] = { tag, classIndex: u2(), nameAndTypeIndex: u2() }; break;
      case CP.NAMEANDTYPE: cp[i] = { tag, nameIndex: u2(), descriptorIndex: u2() }; break;
      case CP.METHODHANDLE: cp[i] = { tag, referenceKind: u1(), referenceIndex: u2() }; break;
      case CP.METHODTYPE: cp[i] = { tag, descriptorIndex: u2() }; break;
      case CP.DYNAMIC: case CP.INVOKEDYNAMIC: cp[i] = { tag, bootstrapMethodAttrIndex: u2(), nameAndTypeIndex: u2() }; break;
      case CP.MODULE: case CP.PACKAGE: cp[i] = { tag, nameIndex: u2() }; break;
      default: throw new Error("unknown constant pool tag " + tag + " at " + (at - 1));
    }
  }

  const className = (index) => utf8(cp[index] && cp[index].nameIndex);
  const nameAndType = (index) => {
    const entry = cp[index];
    return { name: utf8(entry && entry.nameIndex), descriptor: utf8(entry && entry.descriptorIndex) };
  };
  const ref = (index) => {
    const entry = cp[index];
    if (!entry) { return null; }
    if (entry.tag === CP.FIELDREF || entry.tag === CP.METHODREF || entry.tag === CP.INTERFACEMETHODREF) {
      const nt = nameAndType(entry.nameAndTypeIndex);
      return { owner: className(entry.classIndex), name: nt.name, descriptor: nt.descriptor, kind: entry.tag };
    }
    return null;
  };
  const constant = (index) => {
    const entry = cp[index];
    if (!entry) { return null; }
    if (entry.tag === CP.STRING) { return utf8(entry.stringIndex); }
    return entry.value !== undefined ? entry.value : null;
  };

  const access = u2();
  const thisClass = u2();
  const superClass = u2();
  const interfaceCount = u2();
  const interfaces = [];
  for (let i = 0; i < interfaceCount; i++) { interfaces.push(className(u2())); }

  const readAttributes = () => {
    const n = u2();
    const attributes = [];
    for (let i = 0; i < n; i++) {
      const nameIndex = u2();
      const length = u4();
      const start = at;
      attributes.push({ name: utf8(nameIndex), length, start });
      skip(length);
    }
    return attributes;
  };

  const readMember = (isMethod) => {
    const member = {
      access: u2(),
      name: utf8(u2()),
      descriptor: utf8(u2()),
      isMethod,
      annotations: [],
      parameterAnnotations: [],
      code: null,
      exceptions: []
    };
    const attributes = readAttributes();
    for (const attribute of attributes) {
      const end = at;
      at = attribute.start;
      if (attribute.name === "Code") {
        const maxStack = u2(), maxLocals = u2();
        const codeLength = u4();
        const code = bytes.subarray(at, at + codeLength);
        skip(codeLength);
        const exceptionCount = u2();
        const exceptions = [];
        for (let i = 0; i < exceptionCount; i++) { exceptions.push({ startPc: u2(), endPc: u2(), handlerPc: u2(), catchType: u2() }); }
        member.code = { maxStack, maxLocals, code, exceptions };
        const codeAttributes = readAttributes();
        for (const inner of codeAttributes) {
          const back = at;
          at = inner.start;
          if (inner.name === "LineNumberTable") {
            const lines = u2();
            const table = [];
            for (let i = 0; i < lines; i++) { table.push({ startPc: u2(), line: u2() }); }
            member.lines = table;
          }
          at = back + inner.length;
        }
      } else if (attribute.name === "RuntimeVisibleAnnotations" || attribute.name === "RuntimeInvisibleAnnotations") {
        const n = u2();
        for (let i = 0; i < n; i++) { member.annotations.push(readAnnotation()); }
      } else if (attribute.name === "RuntimeVisibleParameterAnnotations" || attribute.name === "RuntimeInvisibleParameterAnnotations") {
        const parameters = u1();
        for (let p = 0; p < parameters; p++) {
          const n = u2();
          const list = [];
          for (let i = 0; i < n; i++) { list.push(readAnnotation()); }
          member.parameterAnnotations.push(list);
        }
      } else if (attribute.name === "Exceptions") {
        const n = u2();
        for (let i = 0; i < n; i++) { member.exceptions.push(className(u2())); }
      } else if (attribute.name === "Signature") {
        member.signature = utf8(u2());
      } else if (attribute.name === "MethodParameters") {
        const n = u1();
        const names = [];
        for (let i = 0; i < n; i++) { names.push({ name: utf8(u2()) || null, access: u2() }); }
        member.parameters = names;
      }
      at = end;
    }
    return member;
  };

  function readElementValue() {
    const tag = String.fromCharCode(u1());
    switch (tag) {
      case "B": case "C": case "D": case "F": case "I": case "J": case "S": case "Z":
        return { tag, value: constant(u2()) };
      case "s": return { tag, value: utf8(u2()) };
      case "e": return { tag, type: utf8(u2()), name: utf8(u2()) };
      case "c": return { tag, type: utf8(u2()) };
      case "@": return { tag, annotation: readAnnotation() };
      case "[": {
        const n = u2();
        const values = [];
        for (let i = 0; i < n; i++) { values.push(readElementValue()); }
        return { tag, values };
      }
      default: throw new Error("unknown element value tag " + tag);
    }
  }

  function readAnnotation() {
    const type = utf8(u2());
    const pairs = u2();
    const values = {};
    for (let i = 0; i < pairs; i++) {
      const name = utf8(u2());
      const value = readElementValue();
      values[name] = simplify(value);
    }
    return { type, values };
  }

  function simplify(value) {
    if (!value || typeof value !== "object") { return value; }
    if (value.tag === "@") { return value.annotation; }
    if (value.tag === "[") { return value.values.map(simplify); }
    if (value.tag === "e") { return value.name; }
    if (value.tag === "c") { return value.type; }
    return value.value;
  }

  const fields = [];
  const fieldCount = u2();
  for (let i = 0; i < fieldCount; i++) { fields.push(readMember(false)); }
  const methods = [];
  const methodCount = u2();
  for (let i = 0; i < methodCount; i++) { methods.push(readMember(true)); }
  const classAttributes = readAttributes();
  const classAnnotations = [];
  const bootstrapMethods = [];
  let sourceFile = null;
  for (const attribute of classAttributes) {
    const end = at;
    at = attribute.start;
    if (attribute.name === "SourceFile") { sourceFile = utf8(u2()); }
    else if (attribute.name === "BootstrapMethods") {
      const n = u2();
      for (let i = 0; i < n; i++) {
        const methodRef = u2();
        const argumentCount = u2();
        const argumentsList = [];
        for (let k = 0; k < argumentCount; k++) { argumentsList.push(u2()); }
        bootstrapMethods.push({ methodRef, arguments: argumentsList });
      }
    }
    else if (attribute.name === "RuntimeVisibleAnnotations" || attribute.name === "RuntimeInvisibleAnnotations") {
      const n = u2();
      for (let i = 0; i < n; i++) { classAnnotations.push(readAnnotation()); }
    }
    at = end;
  }

  return {
    magic: "0xcafebabe", version: { major, minor },
    name: thisClass ? className(thisClass) : null,
    superName: superClass ? className(superClass) : null,
    interfaces,
    access,
    fields: fields.map((f) => ({ name: f.name, descriptor: f.descriptor, access: f.access, annotations: f.annotations })),
    methods: methods.map((m) => ({
      name: m.name, descriptor: m.descriptor, access: m.access,
      annotations: m.annotations, parameterAnnotations: m.parameterAnnotations,
      signature: m.signature || null, lines: m.lines || null,
      code: m.code ? { ...m.code, length: m.code.code.length } : null
    })),
    annotations: classAnnotations,
    sourceFile,
    bootstrapMethods,
    pool: cp
  };
}

/* ------------------------------------------------------------------ bytecode ------------------- *
 * The complete JVM opcode table: the only place lengths are written down. Both the scanner here and
 * the transpiler read it, so an opcode can never be known to one and unknown to the other.
 */
export const OPCODE_TABLE = (() => {
  const table = {};
  const add = (op, name, length) => { table[op] = { name, length }; };
  add(0x00, "nop", 1); add(0x01, "aconst_null", 1);
  ["iconst_m1", "iconst_0", "iconst_1", "iconst_2", "iconst_3", "iconst_4", "iconst_5"].forEach((name, i) => add(0x02 + i, name, 1));
  ["lconst_0", "lconst_1", "fconst_0", "fconst_1", "fconst_2", "dconst_0", "dconst_1"].forEach((name, i) => add(0x09 + i, name, 1));
  add(0x10, "bipush", 2); add(0x11, "sipush", 3); add(0x12, "ldc", 2); add(0x13, "ldc_w", 3); add(0x14, "ldc2_w", 3);
  ["iload", "lload", "fload", "dload", "aload"].forEach((name, i) => add(0x15 + i, name, 2));
  for (let i = 0; i < 4; i++) { add(0x1a + i, "iload_" + i, 1); }
  for (let i = 0; i < 4; i++) { add(0x1e + i, "lload_" + i, 1); }
  for (let i = 0; i < 4; i++) { add(0x22 + i, "fload_" + i, 1); }
  for (let i = 0; i < 4; i++) { add(0x26 + i, "dload_" + i, 1); }
  for (let i = 0; i < 4; i++) { add(0x2a + i, "aload_" + i, 1); }
  ["iaload", "laload", "faload", "daload", "aaload", "baload", "caload", "saload"].forEach((name, i) => add(0x2e + i, name, 1));
  ["istore", "lstore", "fstore", "dstore", "astore"].forEach((name, i) => add(0x36 + i, name, 2));
  for (let i = 0; i < 4; i++) { add(0x3b + i, "istore_" + i, 1); }
  for (let i = 0; i < 4; i++) { add(0x3f + i, "lstore_" + i, 1); }
  for (let i = 0; i < 4; i++) { add(0x43 + i, "fstore_" + i, 1); }
  for (let i = 0; i < 4; i++) { add(0x47 + i, "dstore_" + i, 1); }
  for (let i = 0; i < 4; i++) { add(0x4b + i, "astore_" + i, 1); }
  ["iastore", "lastore", "fastore", "dastore", "aastore", "bastore", "castore", "sastore"].forEach((name, i) => add(0x4f + i, name, 1));
  ["pop", "pop2", "dup", "dup_x1", "dup_x2", "dup2", "dup2_x1", "dup2_x2", "swap"].forEach((name, i) => add(0x57 + i, name, 1));
  ["iadd", "ladd", "fadd", "dadd", "isub", "lsub", "fsub", "dsub", "imul", "lmul", "fmul", "dmul",
   "idiv", "ldiv", "fdiv", "ddiv", "irem", "lrem", "frem", "drem", "ineg", "lneg", "fneg", "dneg",
   "ishl", "lshl", "ishr", "lshr", "iushr", "lushr", "iand", "land", "ior", "lor", "ixor", "lxor"].forEach((name, i) => add(0x60 + i, name, 1));
  add(0x84, "iinc", 3);
  ["i2l", "i2f", "i2d", "l2i", "l2f", "l2d", "f2i", "f2l", "f2d", "d2i", "d2l", "d2f", "i2b", "i2c", "i2s"].forEach((name, i) => add(0x85 + i, name, 1));
  ["lcmp", "fcmpl", "fcmpg", "dcmpl", "dcmpg"].forEach((name, i) => add(0x94 + i, name, 1));
  ["ifeq", "ifne", "iflt", "ifge", "ifgt", "ifle", "if_icmpeq", "if_icmpne", "if_icmplt", "if_icmpge",
   "if_icmpgt", "if_icmple", "if_acmpeq", "if_acmpne"].forEach((name, i) => add(0x99 + i, name, 3));
  add(0xa7, "goto", 3); add(0xa8, "jsr", 3); add(0xa9, "ret", 2);
  add(0xaa, "tableswitch", -1); add(0xab, "lookupswitch", -1);
  ["ireturn", "lreturn", "freturn", "dreturn", "areturn", "return"].forEach((name, i) => add(0xac + i, name, 1));
  ["getstatic", "putstatic", "getfield", "putfield", "invokevirtual", "invokespecial", "invokestatic"].forEach((name, i) => add(0xb2 + i, name, 3));
  add(0xb9, "invokeinterface", 5); add(0xba, "invokedynamic", 5);
  add(0xbb, "new", 3); add(0xbc, "newarray", 2); add(0xbd, "anewarray", 3); add(0xbe, "arraylength", 1);
  add(0xbf, "athrow", 1); add(0xc0, "checkcast", 3); add(0xc1, "instanceof", 3);
  add(0xc2, "monitorenter", 1); add(0xc3, "monitorexit", 1); add(0xc4, "wide", -2); add(0xc5, "multianewarray", 4);
  add(0xc6, "ifnull", 3); add(0xc7, "ifnonnull", 3); add(0xc8, "goto_w", 5); add(0xc9, "jsr_w", 5);
  return table;
})();

const BRANCHES = new Set(["ifeq", "ifne", "iflt", "ifge", "ifgt", "ifle", "if_icmpeq", "if_icmpne", "if_icmplt",
  "if_icmpge", "if_icmpgt", "if_icmple", "if_acmpeq", "if_acmpne", "goto", "jsr", "ifnull", "ifnonnull", "goto_w", "jsr_w"]);

export const OPCODES = OPCODE_TABLE;

export function scanBytecode(owner, method, pool, bootstrapMethods) {
  const code = method.code && method.code.code;
  if (!code) { return { instructions: [], calls: [], fields: [], strings: [], newTypes: [], lambdas: [], constants: [] }; }
  const instructions = [];
  const calls = [];
  const fields = [];
  const strings = [];
  const newTypes = [];
  const lambdas = [];
  const constants = [];
  let pc = 0;
  while (pc < code.length) {
    const op = code[pc];
    const info = OPCODE_TABLE[op];
    if (!info) { throw new Error("unknown opcode 0x" + op.toString(16) + " in " + owner + "." + method.name); }
    let length = info.length;
    let operand = null;
    if (op === 0xaa) { // tableswitch
      let cursor = pc + 1;
      cursor += (4 - (cursor % 4)) % 4;
      const low = view32(code, cursor + 4); const high = view32(code, cursor + 8);
      length = (cursor - pc) + 12 + (high - low + 1) * 4;
      if (high < low || length <= 0 || pc + length > code.length) {
        throw new Error("damaged tableswitch at pc " + pc + " of " + owner + "." + method.name);
      }
    } else if (op === 0xab) { // lookupswitch
      let cursor = pc + 1;
      cursor += (4 - (cursor % 4)) % 4;
      const pairs = view32(code, cursor + 4);
      length = (cursor - pc) + 8 + pairs * 8;
      if (pairs < 0 || length <= 0 || pc + length > code.length) {
        throw new Error("damaged lookupswitch at pc " + pc + " of " + owner + "." + method.name);
      }
    } else if (op === 0xc4) { // wide
      const next = code[pc + 1];
      length = next === 0x84 ? 6 : 4;
      if (pc + length > code.length) { throw new Error("damaged wide at pc " + pc); }
    }
    if (length <= 0 || pc + length > code.length) {
      throw new Error("instruction overruns the code at pc " + pc + " of " + owner + "." + method.name);
    }
    if (op === 0xb2 || op === 0xb3 || op === 0xb4 || op === 0xb5 || op === 0xb6 || op === 0xb7 || op === 0xb8 || op === 0xb9) {
      const index = (code[pc + 1] << 8) | code[pc + 2];
      operand = refAt(pool, index);
      if (op >= 0xb6) { if (operand) { calls.push(operand); } } else if (operand) { fields.push(operand); }
    } else if (op === 0xbb || op === 0xc0 || op === 0xc1 || op === 0xbd) {
      const index = (code[pc + 1] << 8) | code[pc + 2];
      const entry = pool[index];
      if (entry && entry.tag === 7) {
        const name = pool[entry.nameIndex] && pool[entry.nameIndex].value;
        operand = name;
        if (op === 0xbb) { newTypes.push(name); }
      }
    } else if (op === 0x12 || op === 0x13) {
      const index = op === 0x12 ? code[pc + 1] : ((code[pc + 1] << 8) | code[pc + 2]);
      const entry = pool[index];
      if (entry && entry.tag === 8) {
        const text = pool[entry.stringIndex] && pool[entry.stringIndex].value;
        operand = text;
        strings.push(text);
        constants.push({ kind: "string", value: text });
      } else if (entry) { operand = entry.value != null ? entry.value : null; if (entry.value != null) { constants.push({ kind: "number", value: entry.value }); } }
    } else if (op === 0xba) {
      // invokedynamic: resolve the bootstrap to the method a lambda really is, when it is one.
      const index = (code[pc + 1] << 8) | code[pc + 2];
      const entry = pool[index];
      if (entry && entry.tag === 18) {
        const nt = pool[entry.nameAndTypeIndex];
        const bootstrap = bootstrapMethods && bootstrapMethods[entry.bootstrapMethodAttrIndex];
        let target = null;
        let samDescriptor = null;
        if (bootstrap) {
          const methodHandle = pool[bootstrap.arguments[0]];
          if (methodHandle && methodHandle.tag === 15) {
            const reference = pool[methodHandle.referenceIndex];
            samDescriptor = reference && pool[reference.descriptorIndex] && pool[reference.descriptorIndex].value;
          }
          let implementation = pool[bootstrap.arguments[1]];
          if (!implementation || implementation.tag !== 15 || implementation.referenceKind < 5) {
            implementation = bootstrap.arguments.map((index) => pool[index]).find((candidate) => candidate && candidate.tag === 15 && candidate.referenceKind >= 5) || null;
          }
          if (implementation && implementation.tag === 15 && implementation.referenceKind >= 5) {
            const reference = pool[implementation.referenceIndex];
            if (reference) {
              const cls = pool[reference.classIndex];
              const implNt = pool[reference.nameAndTypeIndex];
              target = {
                owner: cls ? pool[cls.nameIndex] && pool[cls.nameIndex].value : null,
                name: implNt ? pool[implNt.nameIndex] && pool[implNt.nameIndex].value : null,
                descriptor: implNt ? pool[implNt.descriptorIndex] && pool[implNt.descriptorIndex].value : null,
                kind: methodHandle.referenceKind
              };
            }
          }
        }
        const lambda = {
          name: nt ? pool[nt.nameIndex] && pool[nt.nameIndex].value : null,
          descriptor: nt ? pool[nt.descriptorIndex] && pool[nt.descriptorIndex].value : null,
          samDescriptor,
          target
        };
        lambdas.push(lambda);
        operand = lambda;
      }
    } else if (op === 0x10) { operand = (code[pc + 1] << 24) >> 24; }
    else if (op === 0x11) { operand = (((code[pc + 1] << 8) | code[pc + 2]) << 16) >> 16; }
    else if (BRANCHES.has(info.name)) {
      const offset = (code[pc + 1] << 8) | code[pc + 2];
      operand = pc + ((offset << 16) >> 16);
    }
    instructions.push({ pc, op, name: info.name, operand, length });
    pc += length;
  }
  return { instructions, calls, fields, strings, newTypes, lambdas, constants };
}

function view32(code, at) {
  return ((code[at] << 24) | (code[at + 1] << 16) | (code[at + 2] << 8) | code[at + 3]);
}

function refAt(pool, index) {
  const entry = pool[index];
  if (!entry) { return null; }
  if (entry.tag === 9 || entry.tag === 10 || entry.tag === 11) {
    const cls = pool[entry.classIndex];
    const nt = pool[entry.nameAndTypeIndex];
    return {
      owner: cls ? pool[cls.nameIndex] && pool[cls.nameIndex].value : null,
      name: nt ? pool[nt.nameIndex] && pool[nt.nameIndex].value : null,
      descriptor: nt ? pool[nt.descriptorIndex] && pool[nt.descriptorIndex].value : null,
      tag: entry.tag
    };
  }
  return null;
}

export function readClassFile(path) {
  return parseClass(readFileSync(path));
}
