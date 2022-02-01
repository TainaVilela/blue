const prompt = require('prompt-sync')()

console.log('JOKENPÔ')
console.log('Ou Pedra, Papel, Tesoura')

let elementos = ['pedra', 'papel', 'tesoura'];
let elementoUsu = " ";
let computador = " ";
let rounds = 0;
let usuarioGanha = 0;
let computadorGanha = 0;
let empatado = 0;
let repetir = " ";

//Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
function apostaUsu(){
    elementoUsu = prompt(`Sua vez de jogar, você quer PEDRA, PAPEL ou TESOURA? `);

//validando as escolhas
    if(elementoUsu == 'pedra' || elementoUsu == 'Pedra' || elementoUsu == 'PEDRA'){
       return elementos[0]
    } else if(elementoUsu == 'papel' || elementoUsu == 'Papel' || elementoUsu == 'PAPEL'){
        return elementos[1]
    } else if(elementoUsu == 'tesoura' || elementoUsu == 'Tesoura' || elementoUsu == 'TESOURA'){
        return elementos[2]
    } else {
        console.log('jogada não identificada')
    }
        }

        do{
//Permitir que eu decida quantas rodadas iremos fazer;
    rounds = +prompt('Quantas vezes você quer jogar? ')

//Decidir de forma aleatória a decisão do computador;
//Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
    for (i = 0; i < rounds; i++) {
        apostaUsu();

        computador = elementos[Math.floor(Math.random() * 3)];
        console.log(`Você: ${elementoUsu} \tcomputador: ${computador}`);
        console.log();

//Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
        if (elementoUsu == elementos[0] && computador == elementos[2] || elementoUsu == elementos[1] && computador == elementos[0] || elementoUsu == elementos[2] && computador == elementos[1]) {
            console.log('O computador perdeu, Parabéns!');
            console.log();
            usuarioGanha++;
        } else if (computador == elementos[0] && elementoUsu == elementos[2] || computador == elementos[1] && elementoUsu == elementos[0] || computador == elementos[2] && elementoUsu == elementos[1]) {
            console.log('O computador ganhou!');
            console.log();
            computadorGanha++;
        } else {
            console.log('Partida empatada');
            console.log();
            empatado++;
        }
    }
//Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
// Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
    if (usuarioGanha > computadorGanha) {
        console.log(`Placar: Jogador ${usuarioGanha} e computador ${computadorGanha}`)
        console.log('Você é o campeão!!!')
        console.log();
    } else if (computadorGanha > usuarioGanha) {
        console.log(`Placar: computador ${computadorGanha} e jogador ${usuarioGanha}`)
        console.log('Computador é o campeão!!!')
        console.log();
    } else {
        console.log(`Jogo empatado \nPlacar: computador ${computadorGanha} e jogador ${usuarioGanha}`)
        console.log();
    }
//Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.
    console.log('Escreva s para sim e n para não!')
    repetir = prompt('Você quer jogar de novo? ')
            console.log();

}while(repetir == 's'){

}

