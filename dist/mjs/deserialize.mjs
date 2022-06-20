// src/isJson.js
function isJson(str) {
  try {
    const json = JSON.parse(str);
    return json;
  } catch (e) {
    return false;
  }
}

// src/deserialize.js
var deserialize = (str) => isJson(str) || {};
var deserialize_default = deserialize;
export {
  deserialize_default as default
};
