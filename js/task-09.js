function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const body = document.querySelector("body");
const textColorEl = document.querySelector(".color");


btnEl.addEventListener("click", onBtnElClick);

function onBtnElClick() {
  body.style.backgroundColor = `${getRandomHexColor()}`
  textColorEl.textContent=`${getRandomHexColor()}`
}
