const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

let ingredientsList = [];

ingredients.map(item => {

const ingridientName = document.createElement("li");
ingridientName.classList.add('item');
ingridientName.textContent = item;

ingredientsList.push(ingridientName)

}
);

list.append(...ingredientsList)


