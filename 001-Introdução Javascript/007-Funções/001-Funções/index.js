
//function declaration
function isValidDeclaration() {
    const soma = 1 + 2;

    return soma;
}

// function expression

const isValidExpression = function () {
    return false;
}

//Arrow function (sempre declarar const)
const isValidArrow = () => 2 * 2;

//unico parametro, nao precisa declarar parenteses
testArrow = n => n + 1 


const isValidArrow2 = () => {
    const multip = 2 * 2;
    return multip;
}



console.log(isValidDeclaration());
console.log(isValidExpression());
console.log(isValidArrow());
console.log(isValidArrow2());
console.log(testArrow(2));