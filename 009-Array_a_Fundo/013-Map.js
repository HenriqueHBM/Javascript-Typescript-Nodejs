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
        bebida: 'Limonada'
    },
    {
        id: 52,
        nome: 'Nicolas',
        alimento: 'X-tudo',
        bebida: 'Suco de Laranja'
    },
    {
        id: 74,
        nome: 'Maria',
        alimento: 'X-vegetariano',
        bebida: 'Suco de Goiaba'
    }
];

/*
    O metodo Map alem de iterar todo ao Array, ele e muito bom para editar o iterado(o array)
*/

pedidos.map((element, index) => {
    if(element.id === 74 && element.alimento === 'X-vegetariano'){
        return (element.alimento = 'Kibe');
    }
});

console.log(pedidos);