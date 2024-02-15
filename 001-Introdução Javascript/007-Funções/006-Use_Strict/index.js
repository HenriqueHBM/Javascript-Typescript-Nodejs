/**
    strict mode elimina alguns erros silenciosos, essa forma corrigi alguns errosque tornam o
    Javascript dificil de ser otimizado
    Basicamente avisa de possiveis erros de escrita ou que podem ocorrer no futuro
 */

"use strict"

(() => {
    teste = "teste";
})();

console.log(teste);