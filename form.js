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
    if (inputElement.type === "text") {
      inputElement.type = "password";
    } else {
      inputElement.type = "text";
    }
  });
});
