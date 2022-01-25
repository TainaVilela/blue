const prompt = require('prompt-sync')()

const num = +prompt('Digite um número: ')

if(num % 2 == 1 ){
    console.log('ímpar')
} else{
    console.log('par')
}
