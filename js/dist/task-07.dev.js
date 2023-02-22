"use strict";

var fontSizeControl = document.querySelector("#font-size-control");
var textSize = document.querySelector("#text");
fontSizeControl.addEventListener("input", function (event) {
  var fontSize = event.target.value + "px";
  textSize.style.fontSize = fontSize;
});