'use strict'

const menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let { target, currentTarget } = event;
    const body = document.querySelector('body');

    // console.log(target.getAttribute('class'));

    switch (target.getAttribute('class')) {
        case 'home':
            body.style.background = 'red';
            console.log('Home');
            break;
        case 'sobre':
            body.style.background = 'blue';
            console.log('Sobre');
            break;
        case 'contato':
            body.style.background = '#FF3';
            console.log('Contato');
            break;
    }
})