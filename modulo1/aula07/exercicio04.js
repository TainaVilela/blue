/* Faça um programa que peça o nome de usuário e a senha de um usuário. A senha deve ter no mínimo 8 caracteres,
pelo menos um número e um caracter especial.*/


const prompt = require('prompt-sync')();

nome
senha
caracterEspecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_']
i = ''
x = 'a'
contador = 0

while (senha.length < 8 || x != i || nome == senha) {
    if (contador > 0) {
        console.log(
            '\nNome não pode ser igual a senha',
            '\nSenha não pode ter menos de 8 caracteres',
            '\nSenha tem que ter ao menos um caracter especial\n',
        );
    }
    nome = prompt('Login: ');
    senha = prompt('Senha: ');
    senha.split('');
    for (const esp of caracterEspecial) {
        for (const s of senha) {
            if (esp === s) {
                i = esp;
                x = esp;
            }
        }
    }
}