// src/isJson.js
function isJson(str) {
  try {
    const json = JSON.parse(str);
    return json;
  } catch (e) {
    return false;
  }
}
export {
  isJson as default
};
