'use strict'

const form = document.forms.namedItem('registrar');
//change, submit
form.addEventListener('input', (event) => {
    event.preventDefault();

    const name = form.name.value;
    const password = (form.password.value);

    const newDiv = document.createElement('div');
    newDiv.innerText = name.toUpperCase();

    form.nextElementSibling.remove();
    form.after(newDiv);

});