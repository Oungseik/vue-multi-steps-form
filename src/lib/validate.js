function validateName(name) {
  return name.length > 3 && /[a-zA-z]+/.test(name);
}

function validateEmail(email) {
  // match one or more a-z and @ sign a-z again . and a-z again
  // example [oung]@[gmail].[com]
  return /[a-z0-9]+@[a-z]+\.[a-z]+/.test(email);
}

function validatePhoneNumber(number) {
  return (
    number.length > 5 && number.split().every((num) => num === "+" || /\d/.test(num) || num === " ")
  );
}

export { validateName, validateEmail, validatePhoneNumber };
