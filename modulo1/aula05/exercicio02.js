/*
Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd';
*/

const prompt = require('prompt-sync')()

name = prompt('Digite seu nome: ')
age = +prompt('Digite sua idade: ')
salary = +prompt('Digite seu salário: ')
salary = parseFloat(salary)
console.log('Digite s - para solteiro, c- para casado, v- para viuvo, d- para divorciado')
maritalStatus = prompt('Digite seu estado civil: ')

while(name.length < 4){
    console.log('O nome deve conter mais que 3 caracteres.')
    name = prompt('Digite seu nome: ')
}
if(age >=0 || age <= 150){
    console.log(age + ' anos')
} else {
    console.log('Idade impossível de ser validada.')

    if(salary == 0){
        console.log('Digite um salário maior que zero')
    } else {
        console.log(salary)
    }
}


console.log(`${name} tem ${age} anos, um salário de ${salary} reais e estado civil ${maritalStatus}.`)

