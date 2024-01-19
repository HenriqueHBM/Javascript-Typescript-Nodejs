//IIFE Immediately Invoked Function Expression

(function (num1, num2) {
    const calc = num1 + num2;

    return [console.log('Henrique'), console.log(calc)];
})(1, 2);

//Arrow function
(() => {
    //nao fica global a tag var/nao polui o codigo
    var teste = 'Teste';
})();

console.log(teste);