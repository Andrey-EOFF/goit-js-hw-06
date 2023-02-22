"use strict";

var button = document.querySelector(".change-color");
var colorSpan = document.querySelector(".color");
button.addEventListener("click", function () {
  var newBgColor = getRandomHexColor();
  document.body.style.backgroundColor = newBgColor;
  colorSpan.textContent = newBgColor;
});

function getRandomHexColor() {
  return "#".concat(Math.floor(Math.random() * 16777215).toString(16));
}
