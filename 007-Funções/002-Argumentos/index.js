//Normal function
function soma(num1, num2) {
    return typeof num1 === 'number' && typeof num2 === 'number' ? num1 + num2 : 'Você passou dados diferentes';
}

console.log(soma(6, 4));
console.log(soma(6, '4'));
console.log(soma(soma(2, 2), soma(4, 6)));

//Arrow functions
const soma2 = (num1, num2) => num1 + num2;

const subtracao = (num1 = 0, num2 = 0) => {
    return typeof num1 === 'number' && typeof num2 === 'number' ? num1 - num2 : 'Você passou dados diferentes';
}


console.log("-----------");
console.log(soma2(10, 5));
console.log(subtracao(1, 2));
console.log(subtracao());

