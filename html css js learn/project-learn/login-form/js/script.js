const FormOpenBTN = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBTH = document.querySelector(".form_closed");
const singupBTN = document.querySelector("#signup");
const loginBTN = document.querySelector("#login");
const pwShowHide = document.querySelector(".pw_hide");

FormOpenBTN.addEventListener("click", () => {
  home.classList.add("show");
});

formCloseBTH.addEventListener("click", () => {
  home.classList.remove("show");
});

singupBTN.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBTN.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

pwShowHide.addEventListener("click", () => {
  let getPWinput = pwShowHide.parentElement.querySelector("input");
  console.log(getPWinput);
  if (getPWinput.type === "password") {
    getPWinput.type = "text";
  } else {
    getPWinput.type = "password";
  }
});
