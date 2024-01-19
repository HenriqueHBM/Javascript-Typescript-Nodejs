let num = [0, 12, 21, 111, 54, 215, 68];

const objArray = [
    { nome: 'Herique', horario: 'manha' },
    { nome: 'Julia', horario: 'tarde' },
    { nome: 'Carlos', horario: 'noite' },
    { nome: 'Maria', horario: 'madrugada' },
];
// for o for of trabalham com array e obj
//for ([inicializacao]; [condicao]; [expresaso final]){}
for (let i = 0; i < num.length; i++) {
    console.log(i, num[i]);
}

for (let i = 0; i < objArray.length; i++) {
    console.log(i, objArray[i]);
}

console.log('------------');

// for of
for(let item of num){
    console.log(item);
}
for(let item of objArray){
    console.log(item.nome);
}

console.log('------------');

const obj = {nome:'Henrique', sobrenome:'Braz'};

// for in 
for(let item in obj){
    console.log(item); //traz os obj
    console.log(obj[item]); //traz os valores dos obj
}