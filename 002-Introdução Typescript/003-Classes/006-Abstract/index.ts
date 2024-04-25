abstract class Pessoa{
    protected nome: string;
    public idade: number = 20;
    
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    //Metodos 
    public comer(comida: string){
    return `O ${this.nome} comeu ${comida}`;
    }

    protected felizAniversario(){
        return `O ${this.nome} fez ${++this.idade} anos`;
    }

    // Basicamente obriga a declarar nas classes filhas
    protected abstract profissao:string;

    public abstract qualSuaProf():string;

    public abstract qualSeuSalario(salario:number):number;
}

class Henrique extends Pessoa{
    protected profissao:string = '';
    private _profissao:string = 'Programador';
    constructor(){
        super("Henrique", 18)
    }

    public qualSuaProf(): string {
        //validacoes
        return `Sua profissao é ${this._profissao}`;
    }
    public qualSeuSalario(salario: number): number {
        //validacoes
        return salario;
    }
}

class Maju extends Pessoa{
    protected profissao:string = '';
    constructor(){
        super("Henrique", 18)
    }

    public qualSuaProf(): string {
        return `Sua profissao é ${this.profissao}`;
    }
    public qualSeuSalario(salario: number): number {
        return salario;
    }
}

const henrique = new Henrique();


