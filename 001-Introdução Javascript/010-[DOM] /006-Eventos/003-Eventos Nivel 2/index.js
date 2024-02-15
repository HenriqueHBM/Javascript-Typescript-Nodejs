'use strict'

const btn = document.querySelector('button');
const body = document.querySelector('body');

btn.addEventListener('click', (event) => {
    body.style.background = 'red';
});

btn.addEventListener('mouseover', (event) => {
    body.style.background = '#FFF';
});

btn.addEventListener('mouseleave', (event) => {
    body.style.background = '#FF3';
});