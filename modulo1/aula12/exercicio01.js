/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação
e divisão desses valores.*/

const prompt = require('prompt-sync')()

a = +prompt('Digite o primeiro número: ')
b = +prompt('Digite o segundo numero: ')

function operacaoSoma(){
  return a + b;
}
console.log(operacaoSoma(a, b))

function operacaoSubtrai(){
    return a - b;
}
console.log(operacaoSubtrai(a,b))

function operacaoMultiplica(){
    return a * b;
}
console.log(operacaoMultiplica(a,b))

function operacaoDivide(){
    return a / b;
}
console.log(operacaoDivide(a,b))