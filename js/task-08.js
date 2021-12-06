const form = document.querySelector(".login-form");
// const formBtnEl = document.querySelector("")

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const fromElements = event.currentTarget.elements;
    const email = fromElements.email.value;
    const password = fromElements.password.value;
    const formData = {
        email , password
    }

    
    if (email === "" || password === "") {
        alert ("Поля не заповнені")
    }
    else {
        console.log(formData);
        form.reset();
    }
    
} 