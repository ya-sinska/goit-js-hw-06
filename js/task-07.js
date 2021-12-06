const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener('change', onInputChange);

function onInputChange(event) {
textEl.style.fontSize = `${event.currentTarget.value}px`
}