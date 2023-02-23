"use strict";

var form = document.querySelector(".login-form");
form.addEventListener("sambit", function (event) {
  event.preventDefault();
  var emailInput = form.elements.email;
  var passwordInput = loginForm.elements.password;

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