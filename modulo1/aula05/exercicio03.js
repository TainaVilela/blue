/* Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar. */

const prompt = require('prompt-sync')()

const num = +prompt('Digite um número: ')

while(num % 2 == 1 ) {
    console.log('Número ímpar, digite novamente.')
    const num = +prompt('Digite um número: ')

    if(num % 2 == 0){
        console.log('Par')
        break;
    }
}