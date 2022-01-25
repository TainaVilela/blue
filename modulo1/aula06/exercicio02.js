/* Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array.
Imprima a média de idade e de altura. */

const prompt = require('prompt-sync')()

count = 0
age = []
humanHeight =[]
averageAge = 0
averageHeight = 0


while(count < 5){
    age.push(parseInt(prompt(`${count + 1}) - Digite sua idade: `)));
    humanHeight.push(parseFloat(prompt(`${count + 1}) - Digite sua altura: `)));
        averageAge += age[count]
        averageHeight += humanHeight[count]
        count++
}

console.log(`a média das idades é : ${averageAge / age.length}`)
console.log(`a média das alturas é: ${averageHeight / humanHeight.length}`)