// src/uniqueId.js
function uniqeIds() {
  return btoa(Math.random()).substring(0, 12);
}
export {
  uniqeIds as default
};
