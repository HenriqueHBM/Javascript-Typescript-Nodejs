let kg = 110;
let altura = 1.75;

let calculo = (kg / (altura * altura)).toFixed(2);
console.log(typeof calculo, calculo); //String

calculo = Number((kg / (altura * altura)).toFixed(2));
console.log(typeof calculo, calculo); //Number

//Forma errada 
if (calculo < 17) {
    console.log('Muito Abaixo do peso');
} else if (calculo >= 17 && calculo <= 18.49) {
    console.log('Abaixo do peso');
} else if (calculo >= 18.5 && calculo <= 24.99) {
    console.log('Peso normal');
} else if (calculo >= 25 && calculo <= 29.99) {
    console.log('Acima do peso');
} else if (calculo >= 30 && calculo <= 34.99) {
    console.log('Obesidade 1');
} else {
    console.log('Obesidade 2');
}

//Forma correta
switch (true) {
    case calculo < 17:
        console.log('Muito Abaixo do peso');
        break;

    case calculo >= 17 && calculo <= 18.48:
        console.log('Abaixo do peso');
        break;

    case calculo >= 18.5 && calculo <= 24.99:
        console.log('Peso normal');
        break;

    case calculo >= 25 && calculo <= 29.99:
        console.log('Acima do peso');
        break;

    case calculo >= 30 && calculo <= 34.99:
        console.log('Obesidade 1');
        break;

    case calculo >= 35 && calculo <= 39.99:
        console.log('Obesidade 2');

    default:
        console.log('Coroi');
        break;
}