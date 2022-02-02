/* Implementando o exercício anterior, escreva uma função que deve calcular um aumento de salário baseado no cargo.
Ela deve receber como argumento o cargo que receberá o aumento, e a taxa que ele irá aumentar. Após isso, aplique esse
aumento à todos os funcionários daquele cargo e exiba o valor dos novos salários.*/


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
