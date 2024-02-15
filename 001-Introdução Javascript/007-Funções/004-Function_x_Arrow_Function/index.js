function nomeFun() {
    return console.log('Henrique');;
}

const nomeFunArrow = () => {
    return console.log('Henrique');
}


//Arrow function nao pode receber "new", nao tem um contrutor(constructor), diferente da funcao que pode

class newFunc{
    //Esse construtor
    constructor(nome){
        this.nome
    }
}

console.log(new nomeFun()); //funciona
// console.log(new nomeFunArrow()); //nao funciona

/*
    Arrow functions possuem "this" lexico, enquanto o modelo normal possui "this" dinamico

    Arrow function herdam o contexto local de onde foi declaradom enquanto o modelo normal possui o contexte associado ao 
    objeto que ele esta vinculado no momento da chamda
*/

const lanches = {
    cardapio: [
        { nome: 'X-salada', preco: 'R$ 25' },
        { nome: 'X-normal', preco: 'R$ 30' }
    ],

    meuPedidoFun: function (select) { //function global
        return console.log(this.cardapio[select]);
    },

    meuPedidoFuncTime: function(){
        //tempo/esperar
        setTimeout(function(){
            console.log(this.cardapio);
            //retorna tudo que tiver dentro de lanches()
            console.log(this);
        }.bind(this), 2000)
    },

    meuPedidoArrowFunc: (select) => { //arrow so pega dentro do escopo, teria que declarar o "cardapio" aqui dentro
        return console.log(this.cardapio[select]); 
    },

    
}
lanches.meuPedidoFun(1) //funciona
console.log("------------------");
lanches.meuPedidoFuncTime()
//lanches.meuPedidoArrowFunc(1) //nao funciona