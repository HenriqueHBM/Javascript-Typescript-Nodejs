enum EMes{
    JAN = 'Janeiro', 
    FEV = 'Fevereiro',
    MAR = 'Março',
    AGO = 'Agosto'
};

console.log(EMes.FEV);

const pessoa: {
    nome:string, 
    mesAniversario: string
} = {
    nome:'Henrique',
    mesAniversario: EMes.AGO
}

if(pessoa.mesAniversario === EMes.AGO){
    console.log(pessoa);
    
}