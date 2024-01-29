'use strict'

const timer = setInterval( () => {
    console.log('Meu Timer');
},2000);

console.log('Ola');

setTimeout( () => {
    clearInterval(timer); //parando o setInterval dps de 6seg
    console.log('Cabou');
},6000);