/* Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true ou false. */

const prompt = require('prompt-sync')()

let inteiro = parseInt(+prompt('Digite um número: '));

function ehDivisivel(){
    if(inteiro % 3 == 0){
        return true
    }else{
        return false
    }
}
console.log(ehDivisivel())