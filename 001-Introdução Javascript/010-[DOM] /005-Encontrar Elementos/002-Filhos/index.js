'use strict';

const container = document.querySelector('.container');

console.log(container.children); //HTMLCollection
console.log(container.childNodes); //NodeList
console.log('--------');

const children = Array.from(container.children);

console.log(children);
console.log('----------');

children.forEach((rest) => {
    console.log(rest);
})