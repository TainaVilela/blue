/*  Faça um programa que peça um número inteiro e crie arrays com:
Todos os números pares de 0 ao número escolhido
Todos os números ímpares do 0 ao número escolhido*/

const prompt = require('prompt-sync')()

odd = []
even = []
number = parseInt(prompt(`- Digite um número: `))
i = 0

while(i <= 10){
if(number % 2 == 0){
            odd.push(number)
    }else {
            even.push(number)
    }
    i++
}

console.log(`\nOdd: \t${odd}`)
console.log(`\neven: \t ${even}`)

