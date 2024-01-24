'use strict'

const bugNum = () => {
    try {
        const number = '123';

        if (number === 123) {
            return 'Seu Num é 123 - type Number';
        }

        throw new Error('Deu ruim');

    } catch (error) {
        throw error // caso voce ja tenha executado o throw new Error() no codigo acima
        throw new Error(error); //para a execucao
        return erro // continua a execucao

    }
}

console.log(bugNum());
console.log('Continua Executantdo');