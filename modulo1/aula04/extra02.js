const prompt =  require('prompt-sync')()

console.log('O computador pensa em um número entre 0 e 10')
numTyped = parseInt(prompt('Adivinhe o número que o computador está pensando: '))

min = Math.ceil(0)
max = Math.floor(10)

drawNumber = Math.random() * (max - min + 1) + min
drawNumber = parseInt(drawNumber)

if(numTyped == drawNumber){
    console.log('Você acertou!')
} else {
    console.log(`Você perdeu o número que o computador pensou, foi ${drawNumber}`)
}



