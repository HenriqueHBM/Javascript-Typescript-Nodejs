'use strict'

const container = document.querySelector('.container');

const newStrong = document.createElement('strong');
newStrong.innerText = 'Ola Henrique';

container.after(newStrong);
container.before(newStrong);