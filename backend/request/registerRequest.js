const validator = require("validator");

let errors = {};
function validateRegister(fullname, email, phone_number, gender_id, password) {
  checkfullname(fullname);
  checkemail(email);
  checkphone(phone_number);
  checkpassword(password)
  if (validator.isEmpty(gender_id)) {
    errors.gender_id("Silahkan isi jenis kelamin!");
  }

  if (Object.keys(errors.length > 0)) {
    return res.sendStatus(400).json({
      message: "Bad Request!",
      errors: errors,
    });
  }
}

function checkpassword(value) {
    if (validator.isEmpty(value)) {
      errors.password("Isikan password!");
    }
    if (!validator.isLength(value, { min: 6, max: 128 })) {
      errors.password("Password harus min: 6 karakter dan max: 128 karakter!");
    }
}

function checkfullname(value) {
  if (validator.isEmpty(value)) {
    errors.fullname("Isikan nama!");
  }
  if (!validator.isLength(value, { min: 3, max: 255 })) {
    errors.fullname("Harus min: 3 karakter dan max: 255 karakter!");
  }
}

function checkemail(value) {
  if (validator.isEmpty(value)) {
    errors.email("Isikan email!");
  }
  if (validator.isEmail(value)) {
    errors.email("Harus min: 3 karakter dan max: 255 karakter!");
  }
}

function isValidNumber(value) {
  // Define a regular expression to match a number with up to 16 digits
  const numberRegex = /^\d{1,16}$/;

  // Test the value against the regular expression
  return numberRegex.test(value);
}

function checkphone(value) {
  if (validator.isEmpty(value)) {
    errors.phone_number("Isikan email!");
  }
  if (!isValidNumber(value)) {
    errors.phone_number("Masukan nomor dengan benar!");
  }
}

module.exports = validateRegister;
