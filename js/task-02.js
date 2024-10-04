const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const ingredientsList= ingredients.map(item => {

const ingridientName = document.createElement("li");
ingridientName.classList.add('item');
ingridientName.textContent = item;

return ingridientName;

}
);

list.append(...ingredientsList)


