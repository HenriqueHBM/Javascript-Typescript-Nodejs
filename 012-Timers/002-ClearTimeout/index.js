'use strict'

const timer = setTimeout( () => {
    console.log('Meu Timer');
});

console.log('Ola');
clearTimeout(timer); //eliminando o timerOut