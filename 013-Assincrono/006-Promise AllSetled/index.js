'use strict'

/*
    Usada para lidar com varias promessas de forma assincrona e ober os resultados
    de todas as promessa,
    independente de terem sido resolvidas ou rejeitadas.

    Ela retorna ua nova promessa que e resolvida com um array de obj. que descrevem 
    o resultado de cada promessa.

    Quando vc deseja aguardar a conclusao de um conjunto de promessas e obter informacoes
    sobre todas elas.

    Diferente do Primise.all, que é interrompido se alguma das proessas for rejeitada,
    o Promise.allSetled aguardara a conclusao de todas as promessas, independente do
    resultado    
*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('Promise 1');
    }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('Promise 2');
    }, 4000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return reject('Promise 3');
    }, 1000);
});

Promise.allSettled([
    promise1,
    promise2,
    promise3
]).then((ressAllSettled) => {
    console.log(ressAllSettled);
    ressAllSettled.forEach(item => {
        if (item.status === 'fulfilled') {
            console.log(item.value); //valor
        } else {
            console.log(item.reason, 'Puts deu erro aqui'); //razao
        }

    })
})