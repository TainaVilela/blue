/*Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário,
mostrando uma mensagem de erro e voltando a pedir as informações. */

const prompt = require('prompt-sync')()

name = prompt('Digite seu nome de usuário: ')
password = prompt('Digite uma senha: ')

while(password == name){
    console.log("A senha não pode ser igual ao nome!")
    name = prompt('Digite seu nome de usuário: ')
    password = prompt('Digite uma senha: ')

    if(password != name) {
        console.log('Login efetuado com sucesso!')
    }

}