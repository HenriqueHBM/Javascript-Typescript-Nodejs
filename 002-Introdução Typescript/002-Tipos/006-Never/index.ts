const error = ():never => {
    throw new Error('Algo deu Errado');
}

const validate = (value: any) => {
    if(typeof value === 'string'){
        return console.log('É um String');

    }else if(typeof value === 'number'){
        return console.log('É um Numero');
    }

    console.log(error());
}

validate({nome: 'Henrique'});