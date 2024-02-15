'use strict'

const form = document.forms.namedItem('registrar');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (form.name.value);
    const password = (form.password.value);

    const formData = new FormData(form);
    // console.log(formData);

    // formData.forEach((res) => {
    //     console.log(res);
    // });
    
    formData.set('name', name); //seta
    formData.set('password', name);
    
    console.log(formData.has('name')); //pergunta se tem

    if (formData.has('name')) {
        console.log(formData.get('name'));
        console.log(formData.get('password'));
        
    }

    formData.delete('name'); //apaga
    console.log(formData.has('name'));



    // if(name && password) {
    //     console.log(name, password);
    //     form.submit();
    // }

});