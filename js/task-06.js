const inputEl = document.getElementById('validation-input');
const inputDataLength = inputEl.dataset.length;

inputEl.addEventListener("blur", onInputElBlur);

function onInputElBlur(event) {
    const inputValue = event.currentTarget.value
    
    
    if (inputValue.length >= inputDataLength) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    }
    else
    {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
}
