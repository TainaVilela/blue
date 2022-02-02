/* Faça um programa de agenda telefônica que deve ter as funções: Adicionar, Alterar, Deletar e Consultar.
Ao adicionar um novo contato, ele deve criar um objeto com os atributos nome e telefone, e adicionar esse objeto à uma
lista com todos os contatos. Ao alterar, ele deve receber o nome do contato a ser alterado e o novo telefone.
Exiba uma mensagem de erro caso o contato não exista. Ao deletar, ele deve apagar o objeto com o nome passado.
Ao consultar, ele deve receber um nome e procurar esse contato na agenda exibindo o número.
Exiba uma mensagem de erro caso o contato não exista.*/

const prompt = require('prompt-sync')()

let agenda ={
    nome: "",
    telefone: 0,

}
console.log('Atualizando dados')
agenda.nome = prompt('Nome: ')
agenda.telefone = +prompt('Telefone: ')


console.log(agenda)
