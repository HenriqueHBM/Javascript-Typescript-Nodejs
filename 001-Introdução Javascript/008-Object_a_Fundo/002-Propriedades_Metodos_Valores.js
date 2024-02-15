function Tenis(tamanho, estoque, p) {
    return {
        tamanho, //caso seja o msm nome, nao precisa declarar
        estoque: estoque,
        preco: p
    }
}

console.log(Tenis(35, true, 'R$ 200'));
console.log('----------------------');

const tamanho = 42;
const estoque = false;
const preco = 'R$ 150';

const Tenis2 = {
    tamanho,
    estoque,
    preco,
};

console.log(Tenis2);

console.log('----------------------');

const Tenis3 = {
    //metodo
    getTamanho(){
        return 35;
    }
}

console.log(Tenis3.getTamanho());