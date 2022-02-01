/* Faça um programa que peça 2 números e crie um array contando todos os números
 sequenciais do primeiro até o segundo, independente de ser maior ou menor.*/

const prompt = require('prompt-sync')()

num1 = +prompt('Digite um número: ')
num2 = +prompt('Digite outro número: ')
sequencia = []

while(true){
    if (isNaN(num1)){
        console.log(`Digite um valor válido!`)
    }else{break}
}
while(true){
    if (isNaN(num2)){
        console.log(`Digite um valor válido!`)
    }else{break}
}

const diferenca = num1 - num2
console.log(diferenca)
let x = 0;

if (diferenca > 0 ){ //se a diferença for positiva, x = maior número e vai decresceendo até o menor
    x = num1;
    for (let cont = 0 ; cont < diferenca - 1 ; cont++){
        x--;
        sequencia.push(x);
    }
}else {             //se a diferença for negativa, x = menor número e vai cresceendo até o maior
    x = num1;
    for(let cont = 0 ; cont > diferenca + 1 ; cont--){ // diferença é negativa, contagem inversa
        x++;
       sequencia.push(x);
    }
}
console.log(sequencia)