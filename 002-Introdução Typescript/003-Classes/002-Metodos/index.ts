
class Pessoa{
    nome: string;
    idade: number = 20;
    
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
    //Metodos 
    
    comer(comida: string){
    return `O ${this.nome} comeu ${comida}`;
    }

    felixAniversario(){
        return `O ${this.nome} fez ${++this.idade} anos`;
    }
}


const pessoa1 = new Pessoa("Henrique", 18)
console.log(pessoa1.comer('Cachorro Quente'));
console.log(pessoa1.felixAniversario());
