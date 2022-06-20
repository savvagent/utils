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

// src/debounce.js
var debounce_exports = {};
__export(debounce_exports, {
  default: () => debounce_default
});
module.exports = __toCommonJS(debounce_exports);
var debounce_default = (func, wait = 250, immediate = false) => {
  if (typeof func !== "function")
    throw new Error("function required");
  let timeout;
  return (...args) => {
    const later = () => {
      timeout = null;
      if (!immediate)
        func.apply(void 0, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(void 0, args);
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
