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

const { tamanho, estoque, marcas = 'Não possui Marca Alguma' } = Tenis;

console.log(tamanho, estoque, marcas);

const { secret: randomNumber, n: avaliacoes } = Tenis; //alterando o nome do obj
// console.log(secret); // nao existe secret, o que existe é:
console.log(randomNumber);
console.log(avaliacoes);

// Retorna tudo que tiver dentro de link
const { link } = Tenis;
console.log(link);

// Chamando o Obj a dentro do Obj Link
const { link: { a }, } = Tenis; //basicamento consigo chamar o Obj "a" agr
console.log(a);

//Acessando dentro de b para pegar o c
const { link: {
    b: { c },
} } = Tenis
console.log(c);

//Mesmo que:
console.log(Tenis.link.a);