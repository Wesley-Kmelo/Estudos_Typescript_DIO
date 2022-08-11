// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

//Resposta


let employee = (code:number, name:string)=>{
    code=10;
    name='string';
}

//Resposta com INterfaces

interface Funcionario{
    nome:string;
    codigo:number;
}

const Func01 = {} as Funcionario

Func01.codigo = 10;
Func01.nome = 'Wesley';
