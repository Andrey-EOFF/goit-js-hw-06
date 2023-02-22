const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", () => {
  const newBgColor = getRandomHexColor();

  document.body.style.backgroundColor = newBgColor;
  colorSpan.textContent = newBgColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
