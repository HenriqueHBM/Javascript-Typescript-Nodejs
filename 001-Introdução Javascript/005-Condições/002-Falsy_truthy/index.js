// Falsy = false, 0, " ", NaN, undefined e null
// Truthy = Todos os outros diferentes do [falsy]

//Falsy
if (null) {
    console.log('Bom Dia'); //false
} else {
    console.log('Boa Noite');
}

if (!null) {
    console.log('Bom Dia'); //true
} else {
    console.log('Boa Noite');
}

//Truthy
if (1 + 1) {
    console.log('Sim');
}