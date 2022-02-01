/* Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10 */

const prompt = require('prompt-sync')()

tab = +prompt('Digite o número que você deseja ver a tabuada: ')

for(x =  1; x < 11; x++){
    console.log(`${tab} x ${x} =  ${tab * x}`)
}