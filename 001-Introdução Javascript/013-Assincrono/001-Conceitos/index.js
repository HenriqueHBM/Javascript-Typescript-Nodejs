'use strict'

/*
    Callbacks
*/

// setInterval( () => {
//     returnConsole();
// }, 3000);

// const returnConsole = ()=> {
//     return console.log('Meu Console Funcionou');;
// }

const meuCallback = (func) => {
    console.log(func()); //caso voce esteja passando uma funcao ou arrow function, tem que declarar o func como funcao tbm
}

meuCallback(() => {
    return 2 + 2;
});