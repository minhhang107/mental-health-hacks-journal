const isEmail = (email) => {
  const emailRegEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  return false;
};

const isEmpty = (string) => {
  if (string.trim() === "") {
    return true;
  }
  return false;
};

exports.validateSignupData = (newUser) => {
  let error = {};
  if (isEmpty(newUser.email)) error.email = "Must not be empty";
  else if (!isEmail(newUser.email))
    error.email = "Must be a valid email address";

  if (isEmpty(newUser.password)) error.password = "Must not be empty";
  if (newUser.password !== newUser.confirmPassword)
    error.confirmPassword = "Passwords must match";
  if (isEmpty(newUser.firstName)) error.firstName = "Must not be empty";
  if (isEmpty(newUser.lastName)) error.lastName = "Must not be empty";
  // object keys return an array of keys
  // if there's at least 1 error -> it will return the error.

  return {
    error,
    valid: Object.keys(error).length === 0 ? true : false,
  };
};

exports.validateLoginData = (user) => {
  let error = {};
  if (isEmpty(user.email)) error.email = "Must not be empty";
  if (isEmpty(user.password)) error.password = "Must not be empty";

  return {
    error,
    valid: Object.keys(error).length === 0 ? true : false,
  };
};
