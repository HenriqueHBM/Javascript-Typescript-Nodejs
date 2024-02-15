const objArray = [
    { nome: 'Herique', horario: 'manha' },
    { nome: 'Julia', horario: 'tarde' },
    { nome: 'Carlos', horario: 'noite' },
    { nome: 'Maria', horario: 'madrugada' },
    { nome: 'Carlos', horario: 'noite' },
];

objArray.forEach((element, index) => {
    if (element.nome === 'Carlos') {
        return console.log('O monza ta pronto'); //igual o continue
    }
    console.log(index, element.nome);
});