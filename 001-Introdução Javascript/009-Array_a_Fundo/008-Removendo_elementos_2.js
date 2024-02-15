let array = [
    { nome: 'Herique', horario: 'manha' },
    { nome: 'Julia', horario: 'tarde' },
    { nome: 'Carlos', horario: 'noite' },
    { nome: 'Maria', horario: 'madrugada' },
];

console.table(array)

//copia de um array (inicio/fim)
const newArray = array.slice(0, 2);
console.table(newArray)
console.log(array);

//remove do array (inicio/fim)
array.splice(0, 2);
console.log(array);
