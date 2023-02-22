const fontSizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  const fontSize = event.target.value + "px";
  textSize.style.fontSize = fontSize;
});
