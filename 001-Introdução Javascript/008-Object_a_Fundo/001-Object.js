/**
    Objeto: Tenis(Propriedade) "cadarço", "palmilha"
    Objeto: Celular(Propriedade)

    Propriedades / Atributos / Funcionalidades
 */

let Tenis = {
    tipo: 'Tenis de Corrida',
    cardaco: 'G',
    estoque: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            largura: 35,
            altura: 40,
            profundidade: 40
        }
    },
    marcaValores: ['Nke', 'Adidas'], //ou:
    marcaObj: [
        { nome: 'Nike' },
        { nome: 'Adidas' }
    ],

    getMarcaValores: function(param){
        return this.marcaObj[param].nome
    },

    getMarcaObj: function(param){
        return this.marcaObj[param].nome
    }
};

console.log(Tenis);
console.log(Tenis.cardaco);
console.log(Tenis.tamanho);
console.log(Tenis.getMarcaValores(1));