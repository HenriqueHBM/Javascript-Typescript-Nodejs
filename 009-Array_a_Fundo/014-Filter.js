const pedidos = [
    {
        id: 41,
        nome: 'Henrique',
        alimento: 'X-salada',
        bebida: 'Sprite'
    },
    {
        id: 46,
        nome: 'Julia',
        alimento: 'Esfiha',
        bebida: 'Suco'
    },
    {
        id: 52,
        nome: 'Nicolas',
        alimento: 'X-tudo',
        bebida: 'Refri de Laranja'
    },
    {
        id: 74,
        nome: 'Maria',
        alimento: 'X-vegetariano',
        bebida: 'Suco'
    }
];

/*
    Filtrar traz todos que tiverem o elemento
*/

const filterSuco = pedidos.filter((element, index) => {
    return element.bebida === 'Suco';
});
console.log(1, pedidos);
console.log(2, filterSuco);