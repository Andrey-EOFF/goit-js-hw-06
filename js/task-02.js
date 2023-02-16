const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const element = ingredients.map((ingredientName) => {
  const ingredientsCreatItem = document.createElement("li");
  ingredientsCreatItem.classList.add("item");
  ingredientsCreatItem.textContent = ingredientName;

  return ingredientsCreatItem;
});

ingredientsList.append(...element);

console.log(element);
