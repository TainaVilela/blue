/* Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os
números IMPARES no array IMPAR. Imprima os três vetores.*/

const prompt = require('prompt-sync')()

count = 0
countEven = []
countOdd =[]


while(count < 20){
    num = parseInt(prompt(`${count + 1}) - Digite um número: `));

    if(num % 2 == 1 ){
        countOdd.push(num)

    }if(num % 2 == 0){
        countEven.push(num)
        
    }
    count++;
}
console.log(`Os números ímpares, são: ${countOdd}`)
console.log(`Os números pares, são: ${countEven}`)