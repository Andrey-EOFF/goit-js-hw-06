const form = document.querySelector(".login-form");

form.addEventListener("sambit", (event) => {
  event.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === "" && passwordInput.value === "") {
    return alert('Всі поля повинні бути заповнені');
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData);

  form.reset();
});
