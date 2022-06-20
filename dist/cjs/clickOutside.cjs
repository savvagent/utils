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

// src/clickOutside.js
var clickOutside_exports = {};
__export(clickOutside_exports, {
  default: () => clickOutside
});
module.exports = __toCommonJS(clickOutside_exports);
function clickOutside(node) {
  const handleClick = (event) => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent("click_outside", node));
    }
  };
  document.addEventListener("click", handleClick, true);
  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
