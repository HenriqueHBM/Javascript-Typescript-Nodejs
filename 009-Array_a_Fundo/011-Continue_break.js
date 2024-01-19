const objArray = [
    { nome: 'Herique', horario: 'manha' },
    { nome: 'Julia', horario: 'tarde' },
    { nome: 'Carlos', horario: 'noite' },
    { nome: 'Maria', horario: 'madrugada' },
    { nome: 'Carlos', horario: 'noite' },
];

for (let item of objArray) {
    if (item.nome === 'Carlos') {
        console.log('O monza ta pronto');
        // onde tiver esse parametro, vai substituir pelo log acima
        continue;
    }
    if (item.nome === 'Maria') {
        console.log('Paroooo');
        break;
    }
    console.log(item);
}