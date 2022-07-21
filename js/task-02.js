const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsContainerEl = document.querySelector('#ingredients');
const ingredientsElements = ingredients.map(text => {
  const el = document.createElement('li');
  el.textContent = text;
  el.classList.add('item');
  return el;
});
ingredientsContainerEl.append(...ingredientsElements);
