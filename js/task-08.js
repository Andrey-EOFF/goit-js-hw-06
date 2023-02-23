const form = document.querySelector(".login-form");

form.addEventListener("sambit", (event) => {
  event.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === "" && passwordInput.value === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData);

  form.reset();
});
