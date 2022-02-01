/*Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array.
Depois, mostre quantas vezes cada valor foi conseguido. */

const prompt = require('prompt-sync')()

count = 0
launch = []
diceRoll = 0

while(diceRoll < 100){
    launch.push(parseInt(prompt(`${count + 1}) - Digite quantos dados você vai lançar: `)));
    diceRoll += launch[count]
        count++
}

console.log(`você lançou ${launch.length} dados`)
console.log(`tem ${launch} dados armazenados`)
