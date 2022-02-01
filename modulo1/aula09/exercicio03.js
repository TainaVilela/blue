/* Faça um programa que, dado uma lista de N números (o usuário deve determinar a
quantidade de números a serem entrados e entrar cada um deles), determine o
menor valor, o maior valor e a soma dos valores. */

const prompt = require('prompt-sync')()

indice = +prompt(`Digite a quantidade de Dados: `)
let dado;
let menor = Infinity;
let maior = 0;
let soma = 0;
const lista = [];

while(true){
        if(isNaN(indice) || indice < 1){
        console.log(`
        Valor inválido, digite um Número.
        `)
    }else {break}
}
for(i = 0 ; i < indice ; i++){
    console.log()
    dado = +prompt(`Digite o ${i+1}º número da Lista de Dados: `)
    if(isNaN(dado)){
        console.log(`
        Por favor, digite um número
        `)
        continue;
    }
    lista.push(dado)
}
for(let i = 0 ; i < indice; i++){
    if(lista[i] > maior){
        maior = lista[i]
    }
    if(lista[i] < menor){
        menor = lista[i]
    }
    soma += lista[i]
}
console.log(`   
    Menor valor: ${menor}\nMaior Valor:${maior}\nSoma dos valores: ${soma}
    `)