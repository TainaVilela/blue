/* Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as
informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele
deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, e caso não haja mais funcionários para
cadastrar, ele deve chamar uma função que deve apresentar a quantidade de funcionários com cada cargo e os nomes deles.
(Você pode limitar as opções de cargo para facilitar.)*/

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

