/* Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um.
 Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e
 a média total da notas.
 */

const prompt = require('prompt-sync')()

quant = parseInt(+prompt('Quantos alunos serão cadastrados? '))
count = 0
name = []
score =[]
averageScore = 0

while(count < quant){
    name.push(prompt(`Digite o nome do aluno: `));
    score.push(parseInt(prompt(`Digite a nota do aluno: `)));
    averageScore += score[count]
        count++
}

console.log(name + ':' + score)


averageScore = averageScore / score.length
console.log(`\nA média dos alunos é ${averageScore.toFixed(2)}`)
