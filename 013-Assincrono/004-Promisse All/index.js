'use strict'

/*
    forma mais recente e legivel de lidar com tarefas assincronas 
    funcoes assincronas para pausar ate que uam promise seja resolvida
*/

const pedido = (pedido) => {
    return new Promise((resolve, reject) => {
        if (pedido === 'Pizza') {
            return reject(`Não temos o seu pedido: ${pedido}`);
        }
        setTimeout(() => {
            resolve(`Chegou o seu pedido: ${pedido}`);
        }, 4000);
    });
}

Promise.all([
    pedido('Arroz'),
    pedido('Pizza'),
]).then((resPedido) => {
    console.log(resPedido[0]);
    console.log(resPedido[1]);
}).catch((error) => {
    console.log(error);
});