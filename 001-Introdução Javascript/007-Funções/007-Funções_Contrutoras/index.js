"use direct"
function Name(name) {
    this.name = 'Henrique';
    this.name2 = name;
}

const riky = new Name();
const maria = new Name('Julia de Paula'); //passando parametro 

console.log(riky); //mostra tudo que tiver dentro
console.log(riky.name); //acessa o objeto direto dentro da funcao

console.log(maria.name2); //
console.log("------------------");

function Nome(nome, sobrenome) {
    this.nome = nome;

    this.sobreNome = () => {
        const nomeCompleto = `${this.nome} ${sobrenome}`;
        return nomeCompleto;
    };
}

const henrique = new Nome('Henrique', 'Madeira');
console.log(henrique.nome);
console.log(henrique.sobreNome());

console.log('-------------');

function Calculadora() {
    this.soma = (num1, num2) => {
        return `${num1 + num2}`;
    };

    this.subtracao = (num1, num2) => {
        return `${num1 - num2}`;
    };
}

const calculadora = new Calculadora();
console.log(calculadora.soma(2, 3));
console.log(calculadora.subtracao(5, 1));