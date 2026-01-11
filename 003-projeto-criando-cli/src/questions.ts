import { EChoicesBoilerplate } from "enum/choices.boilerplate.enum";

export const questions = [
    {
        type: 'list',
        name: 'tech',
        message: 'Qual Boilerplate devo criar?',
        choices: [
            EChoicesBoilerplate.NODEJS_TS, 
            EChoicesBoilerplate.SCSS
        ],
    },
    {
        type: 'input',
        name: 'folderName',
        message: 'Qual o nome da pasta devo dar?',
        validate(folderName: string){
            console.log(folderName);
            
            //nao pode ser vazio
            if(!folderName) return 'Insirá um valor para o nome';
            
            // nao pode ter caracter especiais, exeto[-,_, ' ']
            if(/[^\w\s-]/.test(folderName)) return "Não se pode ter caracteres especiais";

            //nao pode existir pasta com o mesmo nome da repo do git
            if(folderName == 'Javascript-Typescript-Nodejs' || folderName == 'boilerplace-scss')
                return 'Não é possível criar a pasta com esse nome';

            return true;
            
        }
    }
]