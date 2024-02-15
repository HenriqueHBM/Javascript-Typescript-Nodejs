'use strict';

const h1 = document.querySelector('h1')

h1.classList.add('active', 'teste1') //adicionando 
h1.classList.remove('teste1', 'teste2'); //removendo
h1.classList.toggle('teste2') //se nao tiver, adiciona, caso tenha, remove

if (h1.classList.contains('active')) {
    console.log('Existe a classe active')
}

console.log(h1);