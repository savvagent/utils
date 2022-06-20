// src/copy.js
function copy(thingy) {
  return JSON.parse(JSON.stringify(thingy));
}
export {
  copy as default
};
