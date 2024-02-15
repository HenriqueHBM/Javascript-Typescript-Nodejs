'use strict'

const container = document.querySelector('.container');

container.append('<strong> Ola </strong>'); //acrescentar um filho, mas a tag em escrito

//como acrescentar usando appendChild

const newDiv = document.createElement('div');
newDiv.innerText = 'Ola Henrique';
container.appendChild(newDiv);