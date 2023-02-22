"use strict";

var categoriesList = document.querySelector("#categories");
var categoriesItems = categoriesList.querySelectorAll(".item");
console.log("Number of categories: ".concat(categoriesItems.length));
categoriesItems.forEach(function (item) {
  var itemTitle = item.querySelector("h2").textContent;
  var itemElements = item.querySelectorAll("li");
  console.log("Categories: ".concat(itemTitle, " (number of categories: ").concat(itemElements.length, ")"));
});