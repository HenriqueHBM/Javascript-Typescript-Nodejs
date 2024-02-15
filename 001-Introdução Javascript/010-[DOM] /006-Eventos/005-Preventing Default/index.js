'use strict'

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); //previne uma acao
    console.log("Evento prevenido");
})