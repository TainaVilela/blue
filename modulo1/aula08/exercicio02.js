/* Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720 */

var prompt = require('prompt-sync')();

number = +prompt("Digite um numero para descobrir seu fatorial ");

for(count = number-1; count > 0; count--){
    number *= count;
}
console.log(number)