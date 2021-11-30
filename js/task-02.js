const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const createList = (itemsArray) => {
  const allItems = itemsArray.map(item => {
  const itemEl = document.createElement('li');

  itemEl.textContent = item;
  itemEl.classList.add('item');
  return itemEl

  })
  
  const listEl = document.getElementById('ingredients');
  listEl.append(...allItems)
  return listEl
}

console.log(createList(ingredients))





