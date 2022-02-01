/*
Crie um programa que entre com os dados de altura e sexo de 5 pessoas.
Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino.
Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher e a média entre eles.
*/

var prompt = require('prompt-sync')();

const altura = [];
const sexo = [];
let pALTURA = '';
let pSEXO = '';
let contMULHER = 0;
let sexFINAL = '';

console.log('-------------------------------------------');
console.log();
console.log('Informe a altura e o sexo de 5 pessoas');
for (let i = 0; i < 5; i++) {
    console.log(`Pessoa ${i + 1}`);
    pSEXO = prompt('Diga o sexo: ');
    pALTURA = +prompt('Diga a altura: ');
    sexo.push(pSEXO.slice(0, 1));
    altura.push(pALTURA);
}
for (const sex of sexo) {
    if (sex == 'm' || sex == 'M') {
        contMULHER++;
    }
}
for (let i = 0; i < 5; i++) {
    if (altura.indexOf(Math.max(...altura)) == sexo[i]) {
        sexFINAL = sexo[i];
    }
}
if (sexFINAL == 'm') {
    console.log(`Sexo Masculino: ${5 - contMULHER}\nSexo Feminino: ${contMULHER}`);
    console.log(`A maior altura é ${Math.max(...altura)} e o sexo é Feminino`);
} else {
    console.log(`Sexo Masculino: ${5 - contMULHER}\nSexo Feminino: ${contMULHER}`);
    console.log(`A maior altura é ${Math.max(...altura)} e o sexo é Masculino`);
}