"use strict";

var input = document.querySelector("#validation-input");
input.addEventListener("blur", function () {
  var expectedLength = parseInt(input.getAttribute("data-length"));
  var actualLength = input.value.length;

  if (actualLength === expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});