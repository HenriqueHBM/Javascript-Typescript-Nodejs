const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [
        { nome: 'Nike' },
        { nome: 'Adidas' }
    ],
    secret: 123456,
    n: 5,
    link: {
        a: 'a = A',
        b: {
            c: 'c = C'
        }
    }
};

console.log(Tenis.hasOwnProperty('tamanho')); //true
console.log(Tenis.hasOwnProperty('palmilha')); //false

console.log( Tenis.hasOwnProperty('tamanho') ? 'Existe': 'Não Existe' );

console.log("tamanho" in Tenis); //true
console.log("palmilha" in Tenis); //false