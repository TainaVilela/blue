const prompt = require ('prompt-sync')();

let monstroNome = prompt(`Digite o nome do personagem Monstro extraterrestre: `);
let cientista = prompt(`Digite o nome do personagem Cientista: `);
let cacador1 = prompt(`Digite o nome do personagem Caçador 1: `);
let cacador2 = prompt(`Digite o nome do personagem Caçador 2: `);
let sangueMonstro = true;
let fibraEspacial = true;
let escolha = "";
let separados = true;
let chances = 3;
let count = 0;
let numeroCodigo = [];
var codigo = [1, 3, 5];
var sorteio = shuffle(codigo);

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
do { console.log(`
    Deseja separar ${cacador1} e ${cacador2} para cada um buscar um elemento?: 
    1) Sim            2) Não
    `)
    escolha = prompt(`R: `).toLowerCase();
    if (escolha == 1 || escolha == `sim`) {
        separados = true;
        break;
    } else if (escolha == 2 || escolha == `nao`) {
        separados = false;
        break;
    } else {
        console.log('Escolha não identificada')
    };
}while(true){}

function voltaAoLaboratorioComMaterial(){
    console.log(`Você acertou, o código é ${sorteio}, pegue seus elementos e siga para a próxima etapa.`)
    console.log('Você chegou aqui com o material necessário, amanhã iremos destruir esse monstro e salvar a humanidade!')
    return tentandoSalvar()
};
function voltaLaboratorioSemMaterial(){
    console.log(`Ok, era esperado material espacial, mas vamos testar o que temos no laboratório e ver se a gente consegue
     matar esse monstro e salvar o mundo!`)
    return tentandoSalvar()
};

for (chute = 0; chute < 3; chute++) {
        codigo = prompt('Digite o códico para desbloquear o elemento: ')
    }
    do {
        if (codigo == sorteio) {
            return voltaAoLaboratorioComMaterial();
            break;
        }
        if (codigo != sorteio) {
            console.log('você errou!')
            return voltaLaboratorioSemMaterial()
            break;
        }
    } while (true)
{ };

