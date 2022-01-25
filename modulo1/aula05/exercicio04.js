const prompt =  require('prompt-sync')()

console.log('O computador pensa em um número entre 0 e 10')
numTyped = parseInt(prompt('Adivinhe o número que o computador está pensando: '))

min = Math.ceil(0)
max = Math.floor(10)

drawNumber = Math.random() * (max - min + 1) + min
drawNumber = parseInt(drawNumber)

while(numTyped != drawNumber){
    console.log(`Você erro o número`)
    numTyped = parseInt(prompt('Adivinhe o número que o computador está pensando: '))

    if(numTyped == drawNumber){
        console.log('Você acertou!')
        break;
    }

}

