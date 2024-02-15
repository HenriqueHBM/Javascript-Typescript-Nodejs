const palavra = 'Abacate Pera'.toLowerCase().replace(' ', '');
let letras = {};

console.log(palavra, palavra.length);

for (let index = 0; index < palavra.length; index++) {
    // letras[palavra[index]] = 1;
    if (letras[palavra[index]]) {
        letras[palavra[index]]++;
    } else {
        letras[palavra[index]] = 1;
    }
    
}
console.log(letras);