'use strict'

const container =  document.querySelector('.container'); //pegando container
const paragrafo = container.querySelector('.paragrafo'); //pegando tag  dentro do container

const newH2 = document.createElement('h2'); //criando o elemento
newH2.innerText = 'Novo Titulo H2'; //adc no elemento

container.insertBefore(newH2, paragrafo); //inserindo acima da tag selecionada