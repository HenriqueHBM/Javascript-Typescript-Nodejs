'use strict';

/*
    innerHtml => retorna o texto, com formatacao e com elementos
    createElement => Cria um elemento HTML
*/
const div = document.querySelector('div');

console.log(1, div);

div.innerHTML = 'Esse é meu texto <strong> alterado</strong>'; //substituindo o texto
div.innerHTML += 'Esse é meu texto <strong> alterado</strong>'; //adicionando no texto
div.innerHTML = `${div.innerHTML} Esse é meu texto <strong> alterado</strong>`; //adicionando no texto

const divId = document.querySelector('#div');

const elementUl = document.createElement('ul');

[1, 2, 3].forEach((element) => {
    const elementLi = document.createElement('li');
    elementLi.innerText = element;
    elementUl.appendChild(elementLi)
})
divId.appendChild(elementUl)
console.log(divId);