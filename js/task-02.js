const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const createList = itemsArray => {
  return itemsArray.map(item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = item;
  itemEl.classList.add('item');
  return itemEl
  })
}
const elements = createList(ingredients)
const listEl = document.getElementById('ingredients');
  listEl.append(...elements)






