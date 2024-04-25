class Pessoa{
    protected nome: string;
    public idade: number = 20;
    // _profissao:string = 'Programador'; //Pessoas passam assim os privates
    
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    //Metodos 
    public comer(comida: string){
    return `O ${this.nome} comeu ${comida}`;
    }

    protected felizAniversario(){
        return `O ${this.nome} fez ${++this.idade} anos`;
    }

    #proppriedadePrivado:number = 1; //Outra forma de declarar em private
    #metodoPrivado(){ //metodo em private tambem
        return 1;
    }
}

class Henrique extends Pessoa{
    private _profissao:string = 'Programador';
    constructor(){
        super("Henrique", 18)
    }

    get profissao(){
        // Da para validar dados
        if(this._profissao != 'Programador'){
            return `Ele não é mais Programador, agora é ${this._profissao}`;
        }
        return this._profissao;
    }

    set profissao(valor: string){
        this._profissao= valor;
    }
}

const henrique = new Henrique();

console.log(henrique.profissao); //get 
henrique.profissao = 'Maquinario'; // setantdo
console.log(henrique.profissao); //get

