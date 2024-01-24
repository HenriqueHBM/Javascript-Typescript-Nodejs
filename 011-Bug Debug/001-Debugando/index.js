'use strict'

const bugNum = () => {
    const number = '123';
    debugger;
    console.log(number === 123);

    if( number === 123){
        return 'Seu Num é 123 - type Number';
    }

    console.log(number);
    return 'Deu ruim'
}

console.log(bugNum());