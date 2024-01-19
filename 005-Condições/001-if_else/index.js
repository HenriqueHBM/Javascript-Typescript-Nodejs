let soma = 0;

if (soma < 0) {
    console.log('Você esta com o saldo Positivo');
} else {
    console.log('Você está com o saldo Negativo');
}
console.log("------------");

if (soma < 0) {
    console.log('Você esta com o saldo Positivo');
} else if (soma == 0) {
    console.log('Você esta sem Saldo');
} else {
    console.log('Você está com o saldo Negativo');
}

console.log("------------");

console.log(soma < 0 ? 'Você esta com o saldo Positivo' : 'Você está com o saldo Negativo');