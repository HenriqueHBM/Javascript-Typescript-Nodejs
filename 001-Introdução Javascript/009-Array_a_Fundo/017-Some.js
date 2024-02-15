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
    Pergunta se apenas 1 dos valores equivale a sua condicao
*/

const existeSuco = pedidos.some((element, index) => {
    return element.bebida === 'Suco'; //true
});

console.log(existeSuco);