var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/deepEquals.js
var deepEquals_exports = {};
__export(deepEquals_exports, {
  equal: () => equal,
  notEqual: () => notEqual
});
module.exports = __toCommonJS(deepEquals_exports);
var deepEquals = (a, b) => {
  if (a === b)
    return true;
  const arrA = Array.isArray(a);
  const arrB = Array.isArray(b);
  let i;
  if (arrA && arrB) {
    if (a.length !== b.length)
      return false;
    for (i = 0; i < a.length; i++)
      if (!deepEquals(a[i], b[i]))
        return false;
    return true;
  }
  if (arrA !== arrB)
    return false;
  if (a && b && typeof a === "object" && typeof b === "object") {
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length)
      return false;
    const dateA = a instanceof Date;
    const dateB = b instanceof Date;
    if (dateA && dateB)
      return a.getTime() === b.getTime();
    if (dateA !== dateB)
      return false;
    const regexpA = a instanceof RegExp;
    const regexpB = b instanceof RegExp;
    if (regexpA && regexpB)
      return a.toString() === b.toString();
    if (regexpA !== regexpB)
      return false;
    for (i = 0; i < keys.length; i++)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = 0; i < keys.length; i++)
      if (!deepEquals(a[keys[i]], b[keys[i]]))
        return false;
    return true;
  }
  return false;
};
var equal = deepEquals;
var notEqual = (a, b) => !equal(a, b);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  equal,
  notEqual
});
