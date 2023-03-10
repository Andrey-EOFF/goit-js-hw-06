"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
var ingredientsList = document.querySelector("#ingredients");
var element = ingredients.map(function (ingredientName) {
  var ingredientsCreatItem = document.createElement("li");
  ingredientsCreatItem.classList.add("item");
  ingredientsCreatItem.textContent = ingredientName;
  return ingredientsCreatItem;
});
ingredientsList.append.apply(ingredientsList, _toConsumableArray(element));
console.log(element);