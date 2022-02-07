/* Implementando o exercício anterior, escreva uma função que deve calcular um aumento de salário baseado no cargo.
Ela deve receber como argumento o cargo que receberá o aumento, e a taxa que ele irá aumentar. Após isso, aplique esse
aumento à todos os funcionários daquele cargo e exiba o valor dos novos salários.*/

const prompt = require('prompt-sync')()

let repetir = ' '

const listaCadastro = []

function Cadastro(nome, cargo, salario){
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}
console.log('Atualizando dados')
do {
    let cadastro = new Cadastro(Cadastro.nome = prompt('Nome: '),
        Cadastro.salario = +prompt('Qual salário deseja informar? '),
        Cadastro.cargo = prompt('Adicione os cargos que você ocupa: '))

    listaCadastro.push(cadastro)
    console.log(listaCadastro)

    function qtsCadastros(){}

    repetir = prompt('Você quer cadastrar de novo? ')

} while(repetir == 's')