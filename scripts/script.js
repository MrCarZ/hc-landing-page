const handleButton = (email) => {
  const feedbackMessage = document.getElementById("input-feedback");
  feedbackMessage.style.color = "#FFFFFF";
  feedbackMessage.textContent = "Waiting for response...";
  const isValid = handleEmailValidity(email);

  if (isValid) {
    var data = JSON.parse(localStorage.getItem("customer-info"));
    if (data != null) {
      const alreadyHasEmail = data.filter((value) => value === email.value);
      if (alreadyHasEmail.length >= 1) {
        alreadyUsedMessage(feedbackMessage);
      } else {
        data.push(email.value);
        successMessage(feedbackMessage);
      }
    } else {
      data = [email.value];
      successMessage(feedbackMessage);
    }
    localStorage.setItem("customer-info", JSON.stringify(data));
  } else {
    invalidMessage(feedbackMessage);
  }
};

const handleEmailValidity = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email.value
  );

const generateHTMLElement = (tag, atributes) => {
  const newElement = document.createElement(tag);
  const properties = Object.getOwnPropertyNames(atributes);
  properties.map((value) => {
    newElement[`${value}`] = atributes[`${value}`];
  });
  return newElement;
};

const successMessage = (feedbackMessage) => {
  feedbackMessage.textContent = "Success! Done! ;)";
  feedbackMessage.style.color = "#00FF00";
};

const alreadyUsedMessage = (feedbackMessage) => {
  feedbackMessage.textContent =
    "This e-mail has already been used. Please check your mailbox.";
  feedbackMessage.style.color = "#FF0000";
};

const invalidMessage = (feedbackMessage) => {
  feedbackMessage.textContent =
    "This e-mail is invalid. Please type a valid one.";
  feedbackMessage.style.color = "#FF0000";
};

const handleTimer = () => {
    const elementTimer = document.getElementById('black-timer');

    var blackFridayDay = (new Date("Nov 26, 2021 00:00:00").getTime() / 1000 ); // Division by 1000 for miliseconds into seconds conversion
    blackFridayDay = floatToInt(blackFridayDay);

    setInterval(() => {
       
        const now = floatToInt((Date.now() / 1000)); // Division by 1000 for miliseconds into seconds conversion

        const timer = blackFridayDay - now;

        if(timer > 0){
            const days = floatToInt((timer/(24*60*60)));
            const hours = floatToInt(((timer%(24*60*60))/(60*60))); 
            const minutes = floatToInt(((timer%(24*60*60) - hours*(60*60))/60));
            const seconds = floatToInt(((timer%(24*60*60) - hours*(60*60) - minutes*60)));
            elementTimer.textContent = `${days}d:${hours}h:${minutes}m:${seconds}s`;
        }
        else{
            elementTimer.textContent = "HAS STARTED!";
        }
    }, 1000);
}

const floatToInt = (num) => num | 0 // apply bitwise XOR operation to ceil number