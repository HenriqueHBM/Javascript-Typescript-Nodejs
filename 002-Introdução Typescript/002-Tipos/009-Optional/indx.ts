const fn = (nome: string, idade?: number) => {
    if(!idade){
        return `nome: ${nome}, idade: sem valor definido`    
    }
    return `nome: ${nome}, idade: ${idade}`
}

console.log(fn('Henrique', 18));
console.log(fn('Henrique'));

const pessoa: {nome:string, idade?: number} = {nome: 'Henrique'};