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
