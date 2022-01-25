const prompt = require('prompt-sync')()

num1 = +prompt('Digite um número: ')
num2 = +prompt('Digite outro numero: ')

if(num1 > num2){
    console.log(num1)

}if(num2 > num1){
    console.log(num2)

}if (num1 == num2){
    console.log('Numeros iguais')
}