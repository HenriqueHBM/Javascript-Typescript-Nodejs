/*
    Define um metodo estatico para a classe.
    Nao sao chamados na instancia da classe, sao chamados na propria classe.
    funcoes utilitarias, como funcao para criar/clonar obj.
 */

class Utils{
    static cloneObject(object:Array<{}>){
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

//const utils = new Utils(); basicamente nao precisar instanciar a classe

const tenis: {tamanho:number, estoque:boolean} = {
    tamanho:41,
    estoque:true
}

const tenis2: {tamanho:number, estoque:boolean} = {
    tamanho:43,
    estoque:false
}

//Usa direto a classe Utils a instancia/variavel nao utils
console.log(Utils.cloneObject([tenis, tenis2]));
