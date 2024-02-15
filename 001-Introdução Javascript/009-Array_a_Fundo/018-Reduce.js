const pedidos = [
    {
        id: 41,
        nome: 'Henrique',
        alimento: 'X-salada',
        bebida: 'Sprite',
        preco: 100
    },
    {
        id: 46,
        nome: 'Julia',
        alimento: 'Esfiha',
        bebida: 'Suco',
        preco: 120
    },
    {
        id: 52,
        nome: 'Nicolas',
        alimento: 'X-tudo',
        bebida: 'Refri de Laranja',
        preco: 80
    },
    {
        id: 74,
        nome: 'Maria',
        alimento: 'X-vegetariano',
        bebida: 'Suco',
        preco: 150
    }
];

/*
    Pegar todos os valores de um Array e condensa-las em um só
*/

const balancete = pedidos.reduce((total, element) => {
    return total + element.preco;
}, 0);

console.log(balancete);

