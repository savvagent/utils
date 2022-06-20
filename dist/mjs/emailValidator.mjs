// src/emailValidator.js
var isEmailValid = (email) => /\S+@\S+\.\S+/i.test(email);
var isEmailInvalid = (email) => !isEmailValid(email);
export {
  isEmailInvalid,
  isEmailValid
};
