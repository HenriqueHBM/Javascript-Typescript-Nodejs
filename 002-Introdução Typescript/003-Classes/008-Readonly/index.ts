class Pessoa{
    public readonly nome:string = 'Henrique'; // apenas para leitura
}

let pessoa = new Pessoa();

console.log(pessoa.nome);
pessoa.nome = 'Braz'; // nao da para sobrescrever
console.log(pessoa.nome);

