const inputEl = document.getElementById("name-input");
const nameEl = document.getElementById("name-output");



inputEl.addEventListener("input", (event) => {
    console.log(event.currentTarget.value);
    nameEl.textContent = event.currentTarget.value !== "" ?
        event.currentTarget.value : 'Anonymous';
    
})