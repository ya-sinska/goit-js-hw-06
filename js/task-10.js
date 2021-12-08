function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.querySelector('input');
const btnCreate = controlsEl.querySelector('button[data-create]');
const btnDestroy = controlsEl.querySelector('button[data-destroy]');

inputEl.addEventListener('change', onInputElClick);
btnCreate.addEventListener('click', onBtnCreateClick);
btnDestroy.addEventListener('click', onBtnDestroyClick);

function onInputElClick(ent) {
  
  console.log(ent.currentTarget.value);
};

// customer.getFullName.bind(customer)
function onBtnCreateClick() {
  let i;
  for (i = 1; i <= inputEl.onInputElClick(); i += 1) {
    const newBox = document.createElement("div")
    console.log(newBox)

  }
};




function onBtnDestroyClick() {
 
};