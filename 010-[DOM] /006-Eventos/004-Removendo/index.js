'use strict'

const btn = document.querySelector('button');
const adicionarAlert = () => {
    let validator = false;
    alert(123);
    validator = true;

    if(validator){
        btn.removeEventListener('click', adicionarAlert);
    }
};
btn.addEventListener('click', adicionarAlert);
