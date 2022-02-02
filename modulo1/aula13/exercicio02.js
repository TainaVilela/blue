/* Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as
informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele
deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, e caso não haja mais funcionários para
cadastrar, ele deve chamar uma função que deve apresentar a quantidade de funcionários com cada cargo e os nomes deles.
(Você pode limitar as opções de cargo para facilitar.)*/

const prompt = require('prompt-sync')()

let cadastro ={
    nome: "",
    cargo: [" ", " ", " "],
    salario: 0
}
console.log('Atualizando dados')
cadastro.nome = prompt('Nome: ')
cadastro.salario = +prompt('Qual salário deseja informar? ')
cadastro.cargo = prompt('Adicione os cargos que você ocupa: ')

console.log(cadastro)
