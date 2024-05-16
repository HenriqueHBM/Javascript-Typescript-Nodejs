interface IPessoa {
    nome: string;
    idade: number;
    readonly cpf: number;
    enabled(): boolean;
}

let pessoa: IPessoa = {
    nome: 'Henrique',
    idade: 18,
    cpf: 111111111,
    enabled: () => {
        return true;
    }
}

class Joao implements IPessoa {
    nome: string = 'Joao';
    idade: number = 17;
    readonly cpf: number = 222222;
    enabled(): boolean {
        return true;    
    }
}