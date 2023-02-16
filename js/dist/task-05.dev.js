"use strict";

var nameInput = document.querySelector("#name-input");
var nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", function (event) {
  nameOutput.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
});