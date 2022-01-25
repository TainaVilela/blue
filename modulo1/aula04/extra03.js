/*
Caixa Eletrônico
Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas
notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais
e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10,
uma nota de 5 e quatro notas de 1.
*/

const prompt = require('prompt-sync')()

getMoney = parseInt(prompt('Qual o valor que você deseja sacar? '))

while(getMoney < 10 || getMoney > 600){
    console.log('Saque indisponível! Tente novamente')
    getMoney = parseInt(prompt('Qual o valor que você deseja sacar? '))
}

cent = getMoney / 100
fifty = (getMoney % 100) / 50
ten = ((getMoney % 100) % 50) /10
five = (((getMoney % 100) % 50) % 10) / 5
one = (((getMoney % 100) % 50) % 10) % 5

cent = parseInt(cent)
fifty = parseInt(fifty)
ten = parseInt(ten)
five = parseInt(five)
one = parseInt(one)

console.log(`Para sacar a quantia de R$${getMoney},00, o caixa fornece ${cent} notas de 100, ${fifty} nota de 50, 
${ten} notas de 10, ${five} nota de 5 e ${one} notas de 1.`)



