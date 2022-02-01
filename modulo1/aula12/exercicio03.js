/* Faça um programa que tenha uma função chamada area(), que receba as dimensões de um terreno retangular
(largura e comprimento) e mostre a área do terreno.*/

const prompt = require('prompt-sync')()

largura = +prompt('Digite a largura: ')
comprimento = +prompt('Digite o comprimento: ')

function area(){
    return largura * comprimento;
}

console.log(area(largura, comprimento) + 'mts quadrados')