"use strict";

var form = document.querySelector(".login-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var emailInput = event.currentTarget.elements.email;
  var passwordInput = event.currentTarget.elements.password;

  if (emailInput.value === "" && passwordInput.value === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  var formData = {
    email: emailInput.value,
    password: passwordInput.value
  };
  console.log(formData);
  form.reset();
});