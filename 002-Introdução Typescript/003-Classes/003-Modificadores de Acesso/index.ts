/* 
    public -em todas as classes;
    protected - mesma classe e as filhas;
    private- apenas na classe.

    ( public ( protected( private) ) )
*/

class Pessoa{
    private nome: string;
    public idade: number = 20;
    private _profissao:string = 'Programador'; //Pessoas passam assim os privates
    
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


const pessoa1 = new Pessoa("Henrique", 18)
console.log(pessoa1.comer('Cachorro Quente'));
console.log(pessoa1.felizAniversario()); // erro
console.log(pessoa1.idade);
