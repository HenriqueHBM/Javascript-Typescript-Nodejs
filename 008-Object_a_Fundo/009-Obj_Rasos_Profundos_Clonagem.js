let Tenis = {
    tamanho: 45,
    estoque: true,
};

let link = { link: { a: "a", b: { c: 'c' } } };

// Transforma o Obj em string
let clone1 = JSON.stringify(Tenis);
console.log(typeof clone1, clone1);

//Transforma o Obj que esta em string para obj novamente
clone1 = JSON.parse(clone1);
console.log(typeof clone1, clone1);

//Resumindo
let clone2 = JSON.parse(JSON.stringify(Tenis));

console.log(1, clone1);
console.log(2, Tenis);

let mesclar1 = Object.assign(
    JSON.parse(JSON.stringify(Tenis)),
    JSON.parse(JSON.stringify(link))
);

let mesclar2 = {
    ...JSON.parse(JSON.stringify(Tenis)),
    ...JSON.parse(JSON.stringify(link))
};


clone1.estoque = false;
mesclar1.link.a = 'ABC';

console.log(3, clone1);
console.log(4, Tenis);
console.log(5, mesclar1);
console.log(6, mesclar2);
console.log('----------------');

//Diminuindo codigo
function cloneObject(obj){
    return JSON.parse(JSON.stringify(obj))
}

let clone3 = cloneObject(Tenis);

let clone4 = Object.assign(
    cloneObject(Tenis),
    cloneObject(link)
);

let clone5 = {
    ...cloneObject(Tenis),
    ...cloneObject(link)
};

clone3.estoque = false;
clone4.link.a = 'ABC';
console.log(clone3);
console.log(clone4);
console.log(clone5);