const prompt = require('prompt-sync')()

const num1 = +prompt('Digite um número inteiro: ')
const num2 = +prompt('Digite outro numero inteiro: ')

const mod = num1 * num2

if(mod % num1 == 0 && mod % num2 == 0){
 console.log('são múltiplos')

}if(mod % num1 != 0 && mod % num2 != 0) {
    console.log('não são múltiplos')
}