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
    Ela vai tratar toda a sua array, assim podendo
    verificar se ela esta ok()
*/

const temSuco = pedidos.every((element) => {
    return element.bebida === 'Suco'; //se tiver um obj com valores diferentes retorna false, se todos os obj:bebida for o msm retorna true
});

console.log(temSuco);