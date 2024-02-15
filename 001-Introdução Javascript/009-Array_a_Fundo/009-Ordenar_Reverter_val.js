const stringArray = ['a', 'b', 'x', 'm', 'c'];

console.log(stringArray.sort());
console.log(stringArray.reverse());
/*
    sort((a,b) => a - b)
    Val negetivo, o  val de "a" sera ordenado antes de "b";
    Val 0, ordenacao de "a" e "b" nao mudara;
    Se val posiivo, val de "b" sera ordenado antes de "a"
 */

let num = [0, 12, 21, 111, 54, 215, 68];

console.log(num.sort()); //ordena errado

console.log(num.sort((a, b) => a - b)); // forma certa
console.log(num.sort((a, b) => b - a)); // inversao ou:
console.log(num.sort((a, b) => a - b).reverse());

const objArray = [
    { nome: 'Herique', horario: 'manha' },
    { nome: 'Julia', horario: 'tarde' },
    { nome: 'Carlos', horario: 'noite' },
    { nome: 'Maria', horario: 'madrugada' },
];

// localeCompare para Obj em String
console.log(objArray.sort((a, b) => a.nome.localeCompare(b.nome))); //crescente
console.log(objArray.sort((a, b) => b.nome.localeCompare(a.nome))); //decrescente
console.log(objArray.sort((a, b) => a.nome.localeCompare(b.nome)).reverse()); //decrescente com funcao