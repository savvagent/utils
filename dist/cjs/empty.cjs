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

// src/empty.js
var empty_exports = {};
__export(empty_exports, {
  isEmpty: () => isEmpty,
  isNotEmpty: () => isNotEmpty
});
module.exports = __toCommonJS(empty_exports);
function isEmpty(value) {
  let empty = false;
  if (value === null || value === void 0)
    empty = true;
  else if (typeof value === "string" && value === "")
    empty = true;
  else if ((Array.isArray(value) || typeof value === "string") && value.length < 1)
    empty = true;
  else if (typeof value === "string" && !/\S/.test(value))
    empty = true;
  else if (typeof value === "object" && Object.keys(value).length < 1)
    empty = true;
  return empty;
}
function isNotEmpty(value) {
  return !isEmpty(value);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isEmpty,
  isNotEmpty
});
