// "Tuplas" array que obriga a passar a quantidade de elementos e recebe a mesma quantidade e tem qe seguir na mesma horder
let array_1: [string, string, number, boolean] = ['Henrique Braz', 'Teste', 123, false]; 

//array normal, passa quantos valores quiser
let array_2 : Array<string | number | boolean> = ['Henrique Braz', 'Madeira', false, 123];

console.log(array_1);
console.log(array_2);

let obj_1: {nome:string, sobrenome:string, idade: number} = { 
    nome:'Henrique', 
    sobrenome: 'Madeira', 
    idade: 18
};

let obj_2: Array<{nome:string, sobrenome:string, idade: number}> = [{
    nome:'Henrique', 
    sobrenome: 'Madeira', 
    idade: 18,
},
{
    nome:'Julia', 
    sobrenome: 'Macedo', 
    idade: 17,
}];

console.log(obj_1);
console.log(obj_2);
