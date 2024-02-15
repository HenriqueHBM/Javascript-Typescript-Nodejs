let Tenis = {
    tamanho: 45,
    estoque: true,
};

let link = {link: {a: "a", b: { c: 'c'}}};

//Copiar
let clone1 = Tenis;
//Juntar
let mesclar1 = Object.assign(Tenis,link);
//Juntar
let mesclar2 = {...Tenis, ...link};


console.log(clone1);

clone1.estoque = false;

console.log(mesclar1);
console.log(mesclar2);
console.log(Tenis);