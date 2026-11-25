export const formElements = {
  callsing: document.querySelector("#callsign"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
  confirmPassword: document.querySelector("#confirm-passowrd"),
  termsAndPrivacy: document.querySelector("#terms-and-privacy"),
  submitBtn: document.querySelector(".submit-btn"),
  passwordsBtns: document.querySelectorAll(".toggle-password-btn"),
};

formElements.passwordsBtns.forEach((eyeBtn) => {
  eyeBtn.addEventListener("click", (e) => {
    let inputElement = eyeBtn.previousElementSibling;
    let eyeImg = eyeBtn.querySelector("img");
    if (inputElement.type === "text") {
      inputElement.type = "password";
      eyeImg.src = "./assets/images/icon-eye.svg";
    } else {
      inputElement.type = "text";
      eyeImg.src = "./assets/images/icon-eye-off.svg";
    }
  });
});

const validationRegexs = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  callsign: /^[a-zA-Z0-9_-]+$/,
};

const inputsValidationStatus = {
  callsign: {
    checked: false,
  },
  email: {
    checked: false,
  },
  password: {
    checked: false,
  },
  confirmPassword: {
    checked: false,
  },
  termsAndPrivacy: {
    checked: false,
  },
};

function validateCallsign(e) {
  const trimmedValue = e.target.value;
  let length = trimmedValue.length;

  const errorMessages = {
    missing: "Enter a callsign",
    tooShort: "Use at least 3 characters",
    tooLong: "Use 20 characters of fewer",
    badCharacter: "Use letters, numbers, _ or - only",
  };

  const errorMessageElement =
    formElements.callsing.parentElement.querySelector(".error-message");

  const errorMessageContainer =
    formElements.callsing.parentElement.querySelector(".error-msg-container");

  const infoMessageElement =
    formElements.callsing.parentElement.querySelector(".info-msg");

  if (!length) {
    infoMessageElement.classList.remove("hidden");
    errorMessageContainer.classList.add("hidden");
    return;
  }

  if (!validationRegexs.callsign.test(trimmedValue)) {
    infoMessageElement.classList.add("hidden");
    errorMessageContainer.classList.remove("hidden");
    errorMessageElement.textContent = errorMessages.badCharacter;
  } else if (length < 3) {
    infoMessageElement.classList.add("hidden");
    errorMessageContainer.classList.remove("hidden");
    errorMessageElement.textContent = errorMessages.tooShort;
  } else if (length > 20) {
    infoMessageElement.classList.add("hidden");
    errorMessageContainer.classList.remove("hidden");
    errorMessageElement.textContent = errorMessages.tooLong;
  } else {
    infoMessageElement.classList.remove("hidden");
    errorMessageContainer.classList.add("hidden");
  }

  inputsValidationStatus.callsign.checked = true;
}

formElements.callsing.addEventListener("blur", (e) => {
  validateCallsign(e);
});

formElements.callsing.addEventListener("input", (e) => {
  if (inputsValidationStatus.callsign.checked) {
    validateCallsign(e);
  }
});

// Dynamic: fault codes shown on a row when its field has an error
// Missing Too short Too long Bad character Malformed Mismatch
