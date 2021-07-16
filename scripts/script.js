const handleButton = (email) => {
  const isValid = handleEmailValidity(email);

  if (isValid) {
    var data = JSON.parse(localStorage.getItem("customer-info"));
    if (data != null) {
      const alreadyHasEmail = data.filter((value) => value === email.value);
      if (alreadyHasEmail.length >= 1) {
        // generate text for already used email
      } else {
        data.push(email.value);
      }
    } else {
      data = [email.value];
    }
    localStorage.setItem("customer-info", JSON.stringify(data));
  } else {
    console.log(
      "this is not a valid e-mail, please insert another email address"
    );
  }
};

const handleEmailValidity = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email.value
  );
