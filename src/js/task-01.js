const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {

  const itemTitle = item.querySelector("h2").textContent;

  const itemElements = item.querySelectorAll("li");

  console.log(
    `Categories: ${itemTitle} (number of categories: ${itemElements.length})`
  );
});

