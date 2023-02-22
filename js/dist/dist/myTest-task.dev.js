"use strict";

var output = document.querySelector(".output");
var scrollEventCounter = 0;
document.addEventListener("scroll", function () {
  scrollEventCounter += 1;
  output.textContent = scrollEventCounter;
});

var result = _.divide(22, 3);

console.log(result);

var resulCeil = _.ceil(result);

console.log(resulCeil);
document.addEventListener("scroll", _.debounce(function () {
  console.log("Scroll handler call after 1500ms pause");
}, 1000));