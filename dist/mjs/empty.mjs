// src/empty.js
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
export {
  isEmpty,
  isNotEmpty
};
