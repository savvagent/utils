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

// src/atSize.js
var atSize_exports = {};
__export(atSize_exports, {
  default: () => atSize_default
});
module.exports = __toCommonJS(atSize_exports);
var atSize_default = (bp, { default: defaultValue, xxs, xs, sm, md, lg, xl, xxl }) => {
  let retVal;
  switch (bp) {
    case "xxl":
      retVal = xxl ?? xl ?? lg ?? md ?? sm ?? xs ?? xxs ?? defaultValue;
      break;
    case "xl":
      retVal = xl ?? lg ?? md ?? sm ?? xs ?? xxs ?? defaultValue;
      break;
    case "lg":
      retVal = lg ?? md ?? sm ?? xs ?? xxs ?? defaultValue;
      break;
    case "md":
      retVal = md ?? sm ?? xs ?? xxs ?? defaultValue;
      break;
    case "sm":
      retVal = sm ?? xs ?? xxs ?? defaultValue;
      break;
    case "xs":
      retVal = xs ?? xxs ?? defaultValue;
      break;
    case "xxs":
      retVal = xxs ?? defaultValue;
      break;
    default:
      retVal = defaultValue;
      break;
  }
  return retVal;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
