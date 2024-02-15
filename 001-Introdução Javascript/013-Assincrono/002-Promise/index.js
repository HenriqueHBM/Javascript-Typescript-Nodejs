'use strict'

/*
    Promise obj que representam a conclusao ou falha de uma tarefa.
    Sintaxe mais limpa e estruturada
*/

const pedido = (pedido) => {
    return new Promise((resolve, reject) => {

        if(pedido === 'Pizza'){
            return reject(`Não temos seu pedido: ${pedido}`) //return caso tenha erro ja avisar
        }

        setTimeout(() => {
            resolve(`Chegou seu pedido: ${pedido}`); //se der certo
        }, 3000);

    });
}

pedido('Pizza').then((resPedido) => {
    console.log(resPedido);
}).catch( (err) => { //se der erro, avisa sem parar a producao do codigo
    console.log(err);
}).finally( () => { //quando terminar tudo
    console.log('Deu bom todo o processo do pedido');
});