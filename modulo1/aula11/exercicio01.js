/* Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador matemático
(+, -, * ou /). Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.
 */

const prompt = require('prompt-sync')()

n1 = +prompt('Digite o primeiro número: ')
n2 = +prompt('Digite o segundo numero: ')
operador = prompt('Digite o sinal da operação que você quer realizar: ')

function operacao(n1, n2, sinal){
    if(sinal == '+'){
        return n1 + n2;
    }else if(sinal == '-'){
        return n1 - n2;
    }else if(sinal == '*'){
        return n1 * n2;
    }else if(sinal == '/'){
        return n1 / n2;
    }
}

console.log(operacao(n1, n2, operador));