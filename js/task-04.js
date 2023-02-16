const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

let counter = 0;

decrementBtn.addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

incrementBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
