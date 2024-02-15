'use strict';

/*
    textContent => Retorna o texto com formatacoes, sem os elementos
    innerText => retorna somente o texto, sem formatacao
*/
const p = document.querySelector('p');

console.log(p.textContent);
console.log(p.innerText);

//os dois alteram o texto / sem diferenca
// p.textContent = 'Henrique B. Madeira';  
// p.innerText = 'Henrique B. Madeira' 

