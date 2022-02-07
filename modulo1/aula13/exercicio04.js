/* Faça um programa de agenda telefônica que deve ter as funções: Adicionar, Alterar, Deletar e Consultar.
Ao adicionar um novo contato, ele deve criar um objeto com os atributos nome e telefone, e adicionar esse objeto à uma
lista com todos os contatos. Ao alterar, ele deve receber o nome do contato a ser alterado e o novo telefone.
Exiba uma mensagem de erro caso o contato não exista. Ao deletar, ele deve apagar o objeto com o nome passado.
Ao consultar, ele deve receber um nome e procurar esse contato na agenda exibindo o número.
Exiba uma mensagem de erro caso o contato não exista.*/

const prompt = require('prompt-sync')()

let repetir = ' '

const listaTelefonica = []

function Agenda (nome, telefone){
    this.nome = nome;
    this.telefone = telefone;
}
console.log('Atualizando dados')

console.log('Atualizando dados')
do {
    let agenda = new Agenda(Agenda.nome = prompt('Nome: '), Agenda.telefone = +prompt('Telefone: '))

    listaTelefonica.push(agenda)
    console.log(listaTelefonica)

    repetir = prompt('Você queadicionar outro contato? ')

} while(repetir == 's')
