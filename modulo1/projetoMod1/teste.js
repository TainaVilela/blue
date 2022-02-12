const prompt = require('prompt-sync')();

function jogador(nome, dado, pontos) {
    this.nome = nome ;
    this.dado = dado;
    this.pontos = pontos;
};
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    let numero = "";

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    for (const item of array) {
        numero = numero + item.toString();
    }
    return numero;
}

var codigo = [3];
var sorteio = shuffle(codigo);

let quantidade_jogadores = 2

const rounds = +prompt('quantas vezes vai apostar? ');
const monstroXjogador = 3;
const acumulo = [];

for (let i = 0; i < monstroXjogador; i++) {
    acumulo.push(new jogador('Jogador', (+prompt('qual a sua aposta? ')), 0));
    acumulo.push(new jogador('monstro',(sorteio), 0));
}

let aposta;
let maiorAposta;
let vencedor;

for (x = 0; x < rounds; x++){
    aposta = [];
    for(y = 0; y < acumulo.length; y++){
        aposta.push(Math.floor(Math.random()*6)+1);
        acumulo[y].dado = aposta[y];
    }
    maiorAposta = aposta.sort((a,b) => a-b)[aposta.length -1];
    for(const value of aposta){
        if(value.dado == maiorAposta)value.pontos++;
    }
    vencedor = acumulo.filter(a => a.dado == maiorAposta);
    console.log(vencedor);
}
const maisPontos = acumulo.sort((a,b) => a.pontos - b.pontos)[acumulo.length -1].pontos;
const venceOJogo =  acumulo.filter(a => a.pontos == maisPontos);

console.log(`O vencedor do jogo foi:`)
for(const value of venceOJogo){
    console.log(value.nome)}

