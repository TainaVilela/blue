/*
Faça um programa em que o usuário escolha a quantidade de notas serem entradas
e depois peça e armazene essa quantidade de notas em um array.
Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).
*/

const prompt = require('prompt-sync')();

qtd = +prompt('Quantas notas serão lançadas? ')
lancamento = 0
nota = []
cont = 0
aprovados = 0
reprovados = 0
recuperacao = 0

while (cont < qtd) {
    lancamento = +prompt(`Nota ${cont + 1}: `);
    nota.push(lancamento);
    cont++;
}

for (let i = 0; i < nota.length; i++) {
    if (nota[i] >= 7) {
        aprovados++;
    } else if (nota[i] < 5) {
        reprovados++;
    } else {
        recuperacao++;
    }
}

console.log(`\nAprovados: ${aprovados}`);
console.log(`\nRecuperação: ${recuperacao}`);
console.log(`\nReprovados: ${reprovados}`);