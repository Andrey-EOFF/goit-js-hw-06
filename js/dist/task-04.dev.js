"use strict";

var decrementBtn = document.querySelector('[data-action="decrement"]');
var incrementBtn = document.querySelector('[data-action="increment"]');
var counterValue = document.querySelector("#value");
var counter = 0;
decrementBtn.addEventListener("click", function () {
  counter--;
  counterValue.textContent = counter;
});
incrementBtn.addEventListener("click", function () {
  counter++;
  counterValue.textContent = counter;
});