const prompt = require("prompt-sync")();

console.log(`
Um acidente no espaço faz com que um monstro caia no planeta, sua cápsula foi vista caindo em uma grande floresta proximo a cidade, porém as pessoas
da cidade alegam que o extraterrestre está rondando a cidade e quando ele começa a entrar em contato com as pessoas transmite um vírus letal 
que vai dizimar a população em 3 dias.
Ao ser reconhecido como uma ameaça, se inicia no planeta uma caçada para capturar o extraterrestre e encontrar uma cura para esse vírus.
No laboratório da cidade começam as pesquisas para encontrar uma cura para esse vírus letal,o cientista ao examinar os corpos mortos 
que há uma alteração no sangue dos infectados e que só poderá produzir o antídoto para a cura com o sangue do monstro.
Capturar esse monstro não é fácil ele ronda por toda a cidade e ninguém sabe ao certo o que ele pode fazer além de infectar, ele é muito poderoso 
e somente com materiais como fibra espacial produzidos no seu planeta são capazes de aniquilar o extraterrestre
`);

let escolha = "";
var codigo = [1, 3, 5];
var sorteio = shuffle(codigo);

let infoMonstroVida = {
    vida: 200,
};
let infoCacador1Vida = {
    vida: 100,
};
let infoCacador2Vida = {
    vida: 100,
};
let infoCientistaVida = {
    vida: 100,
};

var dias = 0;
let monstroNome = "";
let cientista = "";
let cacador1 = "";
let cacador2 = "";

function sleep(milliseconds) {
    //Variável para controle da passagem do tempo
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
            break;
        }
    }
}

do {
    console.log("Digite o nome do personagem Monstro extraterrestre: ");
    monstroNome = prompt("").toUpperCase();
    if (monstroNome === "") {
        console.log("Digite um nome válido para o Monstro: ");
    } else {
        break;
    }
} while (true);
{
}

do {
    console.log(`Digite o nome do personagem Cientista: `);
    cientista = prompt("").toUpperCase();
    if (cientista === "") {
        console.log("Digite um nome válido para o cientista");
    } else {
        break;
    }
} while (true);
{
}

do {
    console.log(`Digite o nome do personagem Caçador 1: `);
    cacador1 = prompt("").toUpperCase();
    if (cacador1 === "") {
        console.log("Digite um nome válido para o caçador 1: ");
    } else {
        break;
    }
} while (true);
{
}

do {
    console.log(`Digite o nome do personagem Caçador 2: `);
    cacador2 = prompt("").toUpperCase();
    if (cacador2 === "") {
        console.log("Digite um nome válido para o caçador 2: ");
    } else {
        break;
    }
} while (true);
{
}

console.log(`
Os caçadores vão fazer uma busca, mas, precisam planejar a melhor estratégia, uma busca pela cidade atrás do extraterrestre,
uma varredura na floresta que cerca a cidade e onde especialistas afirmam que a cápsula caiu, tudo isso demanda tempo!
Você pode enviar os dois juntos para se protegerem e se ajudarem nas buscas e cada caçada em busca de seus elemento dura 1 dia,
ou, pode separá-los, enviar um para a cidade e outro para a floresta afim de ganhar tempo, mas podem haver muitos perigos!
`);

    //função para sorteio dos números de desbloqueio das missões "TENTATIVA".
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    let numero = "";

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    for (const item of array) {
        numero = numero + item.toString();
    }
    return numero;
}

function validador() {
    //Funções para executar cada uma das tarefas - função que os personagens executam a primeira missão juntos/separrados
    /* variável que armazena status de "juntos/separados"*/let separados = true;

    do {
        console.log(`Deseja separar ${cacador1} e ${cacador2} para cada um buscar um elemento?: 
                1) Sim            2) Não`);
        escolha = prompt(`R: `).toLowerCase();

        //Condicionais para alterações dessas variáveis
        //Conteúdo de condicionais, laços, funções e objetos bem aplicados
        if (escolha == 1 || escolha === `sim`) {
            separados = true;
            return tentativasSeparados();
            break;
        } else if (escolha == 2 || escolha === `nao`) {
            separados = false;
            return tentativasS();
            break;
        } else {
            console.log("Escolha não identificada");
        }
    } while (true);
    {
    }
}

function tentativasS() {
    //Conteúdo de condicionais, laços, funções e objetos bem aplicados
    /* variável que armazena status de "aposta"*/let tentativa;
    //Funções para executar cada uma das tarefas - função que os personagens executam a primeira missão
    console.log(
        "\nStatus de vida " + cacador1 + ": " + Math.trunc(infoCacador1Vida.vida)
    );
    console.log(
        "Status de vida " +
        cacador2 +
        ": " +
        Math.trunc(infoCacador2Vida.vida) +
        "\n"
    );
    dias++;
    console.log(
        `Os caçadores ${cacador1} e ${cacador2} seguem para buscar o sangue do monstro e pegar o material necessário para o cientista produzir uma arma capaz de matar o monstro...`
    );
    console.log(`Ao encontrarem a nave notam que o monstro está dormindo profundamente e tentam desbloquear a porta da nave para buscar o que é necessário
            ...
            para desbloquear essa porta é necessário digitar um código de 3 números ímpares aleatórios entre 1 e 5 que não se repetem! `);

    /*Laço de repetição que determinará os ciclos em que a história vai se passar. Determinar o que acontecerá ao final
    do ciclo e como ficarão os status*/
    for (let tentativa = 1; tentativa < 4; tentativa++) {
        codigo = prompt("Digite o códico para desbloquear a porta da nave: ");

        if (codigo == sorteio) {
            break;
        }
    }
    if (codigo !== sorteio) {
        console.log(`Você errou todas as tentativas de abrir a nave o código era ${sorteio}, mas o tempo está correndo!
        Pegue o que puder e leve para o cientista produzir o material necessário para atacar o monstro e o vírus.
        Para segui para o laboratório...
        1) Sim`);
        continuar = prompt(`R: `).toLowerCase();
        return voltaLaboratorioSemMaterial();
    } else if (codigo === sorteio) {
        console.log(`Você acertou, o código é ${sorteio}, pegue seus elementos e siga para a próxima etapa.
                Para continuar...
                Pronto para seguir para o laboratório? 
                1) Sim `);
        continuar = prompt(`R: `).toLowerCase();
        return voltaAoLaboratorioComMaterial();
    }

}

function tentativasSeparados() {
    //Conteúdo de condicionais, laços, funções e objetos bem aplicados
    /* variável que armazena status de "aposta"*/let tentativa;
    //Funções para executar cada uma das tarefas - função que os personagens executam a primeira missão
    console.log(
        "\nStatus de vida " + cacador1 + ": " + Math.trunc(infoCacador1Vida.vida)
    );
    console.log(
        "Status de vida " +
        cacador2 +
        ": " +
        Math.trunc(infoCacador2Vida.vida) +
        "\n"
    );
    dias++;

    console.log(
        ` ${cacador2} Encontra o monstro na cidade, ao se aproximar acaba tomando arranhões pois o monstro deixou muita destruição ao redor, ${cacador2}
         disparar com sua arma um dardo especial capaz de deixar dormindo o monstro ${monstroNome} por alguns minutos, ${cacador2} aproveita o momento para extrair o sangue e voltar ao laboratorio.`
    );
    infoMonstroVida.vida = infoMonstroVida.vida - 50;
    console.log(
        `${cacador1} Encontra a nave do ${monstroNome}, a nave emite um forte calor, ao se aproximar da nave sente uma grande onda de calor... tudo leva a crer
        que dentro da nave estão os materiais necessários para produzir a bala capaz de matar o monstro e o antídoto para salvar a humanidade do vírus.`);

    /*Laço de repetição que determinará os ciclos em que a história vai se passar. Determinar o que acontecerá ao final do ciclo e como ficarão os status*/
    for (let tentativa = 1; tentativa < 4; tentativa++) {
        codigo = prompt("Digite o códico para desbloquear a porta da nave: ");

        if (codigo == sorteio) {
            break;
        }
    }
    if (codigo !== sorteio) {
        console.log(`Você errou todas as tentativas de abrir a nave o código era ${sorteio}, mas o tempo está correndo!
        Pegue o que puder e leve para o cientista produzir o material necessário para atacar o monstro e o vírus.
        Para segui para o laboratório...
        1) Sim`);
        let continuar = prompt(`R: `).toLowerCase();
        return voltaLaboratorioSemMaterial();
    } else if (codigo === sorteio) {
        console.log(`Você acertou, o código é ${sorteio}, pegue seus elementos e siga para a próxima etapa.
                Para continuar...
                Pronto para seguir para o laboratório? 
                1) Sim `);
        continuar = prompt(`R: `).toLowerCase();
        return voltaAoLaboratorioComMaterial();
    }
}

function voltaLaboratorioSemMaterial() {
    console.clear();
    sleep(1000);

    console.log(`Você Trouxe pedras e água... mas o cientista ${cientista} se dedicou para tentar achar algumas coisas que fossem úteis para você poder
        lutar contra o montro na proxima etapa, deixe ele trabalhar, amanhã será um dia cansativo...`);
    return ultimoDesafio();
}

validador();

function voltaAoLaboratorioComMaterial() {
    console.clear();
    sleep(1000);
    console.log(
        "Você chegou aqui com o material necessário, amanhã iremos destruir esse monstro e salvar a humanidade!"
    );
    return ultimoDesafio();
}

function ultimoDesafio() {
    //Conteúdo de condicionais, laços, funções e objetos bem aplicados
    //Funções para executar cada uma das tarefas - tarefa matar o monstro
    console.log("");
    console.log("");
    console.clear();
    console.log(`Essa é última missão, com o antídoto pronto e as armas calibradas com o material que você buscou, um jogo aleatório entre
${monstroNome} e ${cientista} vai enfim definir o vencedor da partida...`);
    sleep(4000);

    function sorteando() {
        let sorteando = Math.random() * (Math.floor (6)-(Math.ceil (1)+ 1));
        sorteando = parseInt(sorteando);
        return sorteando;
    }

    function criarJogador(qtd) {
        for (let i = 0; i < qtd; i++) {
            let jogador = {
                nome: nomes[i],
                golpe: 0,
                vitorias: 0,
            };
            jogadores.push(jogador);
        }
        return jogadores;
    }

    function compararDados(a, b) {
        console.log(`${jogadores[0].nome} tirou ${jogadores[0].golpe} de dano.
${jogadores[1].nome} tirou ${jogadores[1].golpe} de dano.
`)
        return a.golpe - b.golpe;
    }
    function compararVitorias(a, b) {
        return a.vitorias - b.vitorias;
    }

    function validacaoNumero(a) {
        while (true) {
            if (!isNaN(a)) break;
            else {
            }
        }
        return a;
    }
    const jogadores = [];
    const nomes = [];
    let x = 0;

    let qtdadeJogadores = 2;
    let nome1 = [monstroNome];
    nomes.push(nome1);
    let nome2 = [cientista];
    nomes.push(nome2);

    criarJogador(qtdadeJogadores);
    let qtdadeRodadas = 4;
    validacaoNumero(qtdadeRodadas);
    let ganhador ;

/*Laço de repetição que determinará os ciclos em que a história vai se passar. Determinar o que acontecerá ao final do ciclo e como ficarão os status "vencedor/perdedor*/
    for (i = 1; i < qtdadeRodadas; i++) {
        x = 0;
        for (jogador of jogadores) {
            jogadores[x].golpe = sorteando(20, 1);
            x++;
        }
        jogadores.sort(compararDados);
        for (a in jogadores) {
            if (jogadores[a].golpe === jogadores[jogadores.length - 1].golpe) {
                jogadores[a].vitorias += 1;
            }
        }
    }
    jogadores.sort(compararVitorias);

    ganhador = jogadores[jogadores.length - 1].nome
    sleep(2000);
    console.log(
        `O campeão desta etapa foi o jogador ${ganhador}`
    );

    sleep(3000);
    console.log(ganhador);
    jogadores.splice(0);
    nomes.splice(0);

    sleep(3000);
    console.log(jogador);

    if (ganhador == nome1) {
        return monstrovence();
    } else if (ganhador == nome2) {
        return ganharGame();
    }
}

var jogaMais = '';

function ganharGame() {
    console.log(
        "Parabéns você ganhou o jogo, o monstro foi derrotado com uma arma letal e a humanidade foi salva com o antídoto criado pelo cientista"
    );

    console.log(`
   Deseja jogar de novo?:
        1) Sim            2) Não
        `);

        jogaMais = prompt(`R: `).toLowerCase();
        console.log(jogaMais)
    if (jogaMais === '1' || jogaMais === `sim`) {
            return validador();

    } else {
        console.log("FIM!");
    }

}

function monstrovence() {
    console.log(
        "O monstro venceu dessa vez, mas você pode jogar novamente se quiser..."
    );
    console.log(`
    Deseja jogar de novo?: 
    1) Sim            2) Não
    `);

    jogaMais = prompt(`R: `).toLowerCase();
    if (jogaMais === '1' || jogaMais === `sim`) {
          return validador();

    } else {
        console.log("FIM!");
    }

};