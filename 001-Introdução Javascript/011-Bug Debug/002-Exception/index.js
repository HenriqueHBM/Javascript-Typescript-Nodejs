'use strict'

/*
    Excecao, evento ou condicao que ocorre durante a execucao de um programa
    e interrompe o fluxo normal de execucao
*/


const bugNum = () => {
    const number = '123';

    console.log(number === 123);
    if( number === 123){
        return 'Seu Num é 123 - type Number';
    }
    console.log(number);
    throw new Error('Deu ruim');
}

console.log(bugNum());