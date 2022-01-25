var prompt = require('prompt-sync')();

vidaMonstro = +prompt ('Digite a vida total do monstro entre 10 e 50: ');
ataque = +prompt ('Digite o valor do ataque entre 5 e 10: ');

turno = (vidaMonstro/ ataque)

console.log(`o monstro é derrotado em ${parseInt(turno)}`)


