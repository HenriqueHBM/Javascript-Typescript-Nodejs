/*
    Uma closure ocorre normalmente quando uma função é declarada
    dentro do corop de outra, e a função interior referencia 
    variaveis locais da funcao exterior
*/

function QualSeuNome(name) {
    const msg = 'O seu nome é:';

    function SeuNome() {
        return `${msg} ${name}`;
    }

    return SeuNome();
}

console.log(QualSeuNome('Henrique'));
console.log('----------');

function Calculadora(num1, num2) {
    const msg = 'Resultado';

    const soma = () => {
        return `${msg} ${num1 + num2}`
    }

    function Soma(){
        return `${msg} ${num1 + num2}`;
    }

    const subtracao = () => {
        return `${msg} ${num1 - num2}`
    }
    const multiplicacao = () => {
        return `${msg} ${num1 * num2}`
    }
    const divisao = () => {
        return `${msg} ${num1 / num2}`
    }

    return {
        soma:soma(),
        subtracao:subtracao(),
        multiplicacao: multiplicacao(),
        divisao:divisao(),
        Soma:Soma(),
    }
}

console.log(Calculadora(10, 5));
console.log(Calculadora(10, 5).multiplicacao);