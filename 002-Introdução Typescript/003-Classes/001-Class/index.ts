/*
    Estrutura de programacao orientada a objetos que 
    possui um conjunto de propriedade e metodos.
    É um modelo para criar objetos, permitindo que voce defina
    uma estrutura com propriedades e comportamentos.
*/

class Pessoa{
    nome: string;
    idade: number = 20;
    
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Henrique', 18);

console.log(pessoa1.nome, pessoa1.idade);
