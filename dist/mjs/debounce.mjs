// src/debounce.js
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
export {
  debounce_default as default
};
