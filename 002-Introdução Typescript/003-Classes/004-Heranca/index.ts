class Pessoa{
    protected nome: string;
    public idade: number = 20;
     _profissao:string = 'Programador'; //Pessoas passam assim os privates
    
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
    private profissao:string = 'Maquinario';
    constructor(){
        super("Henrique", 18)
    }

    public getProfissao(){
        return `${this.nome} trabalha como ${this.profissao}`;
    }
}
const henrique = new Henrique();
//henrique.nome como esta protected, nao da para acessar dessa forma
console.log(henrique.getProfissao()); 
console.log(henrique.comer('Feijoada'));
