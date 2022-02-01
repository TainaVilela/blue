/* Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela
como no exemplo de 3 linhas e 4 colunas:
[ 0, 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 2, 3, 4, 5 ] */

const prompt = require('prompt-sync')()

rows = +prompt('Digite quantas linhas você deseja: ')
columns = +prompt('Digite quantas colunas você deseja: ')

matriz = []

for(l = 0; l < rows; l++){
    const cols = [];
    for(c = 0; c < columns; c++){
        cols[c] = +prompt(`rows: ${l+1}, columns: ${c+1} - digite um número inteiro: `)
    }
    matriz[l] =  cols;
}
console.table(matriz)