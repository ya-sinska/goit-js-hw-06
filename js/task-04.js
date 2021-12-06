const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueEl = document.getElementById('value');

let counterValue = 0;


btnDecrement.addEventListener('click', onBtnDecrementClick);
btnIncrement.addEventListener('click', onBtnIncrementClick);

function onBtnDecrementClick() {
    counterValue = counterValue - 1;
    valueEl.textContent = counterValue;
    console.log("Зменшує",valueEl.textContent)
 };
function onBtnIncrementClick() {
    counterValue = counterValue + 1;
    valueEl.textContent = counterValue;
    console.log("Збільшує",valueEl.textContent)
};
 


