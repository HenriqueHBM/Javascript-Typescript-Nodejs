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

const reservarPedido = async () => {
    try {
        console.log(await pedido('Arroz'));
        console.log(await pedido('Pizza'));
        console.log(await pedido('Feijão'));
    }catch{
        console.log(error);
    }
}

reservarPedido();