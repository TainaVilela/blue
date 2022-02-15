const prompt = require ('prompt-sync')();

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
let separados = true;
let chances = 3;
let count = 0;
let numeroCodigo = [];
var codigo = [1, 3, 5];
var sorteio = shuffle(codigo);

//variavel de status

let infoMonstroVida = {
    vida: 200
}
let infoCacador1Vida = {
    vida: 100
}
let infoCacador2Vida = {
    vida: 100
}
let infoCientistaVida = {
    vida: 100
}
// infoCientistaVida = infoCientistaVida - 33.1
// let intCientista = parseInt(infoCientistaVida);

// variavel de tempo
var dias = 0;
let monstroNome = '';
let cientista = '';
let cacador1 = '';
let cacador2 = '';

do {console.log('Digite o nome do personagem Monstro extraterrestre: ')
    monstroNome = prompt('').toUpperCase();
    if (monstroNome == ''){
        console.log('Digite um nome válido para o Monstro: ')
    }else{
        break;
    }
}while (true){};

do {console.log(`Digite o nome do personagem Cientista: `);
    cientista = prompt('').toUpperCase()
    if (cientista == "") {
        console.log('Digite um nome válido para o cientista')
    }else{
        break;
    }
}while (true){};

do {console.log(`Digite o nome do personagem Caçador 1: `);
    cacador1 = prompt('').toUpperCase()
    if (cacador1 == '') {
        console.log('Digite um nome válido para o caçador 1: ')
    }else{
        break;
    }
}while(true){};
do {
    console.log(`Digite o nome do personagem Caçador 2: `);
    cacador2 = prompt('').toUpperCase()
    if (cacador2 == '') {
        console.log('Digite um nome válido para o caçador 2: ')
    }else{
        break;
    }
}while (true) {};

console.log(`
Os caçadores vão fazer uma busca, mas, precisam planejar a melhor estratégia, uma busca pela cidade atrás do extraterrestre,
uma varredura na floresta que cerca a cidade e onde especialistas afirmam que a cápsula caiu, tudo isso demanda tempo!
Você pode enviar os dois juntos para se protegerem e se ajudarem nas buscas e cada caçada em busca de seus elemento dura 1 dia,
ou, pode separá-los, enviar um para a cidade e outro para a floresta afim de ganhar tempo, mas podem haver muitos perigos!
`);

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

function validador(){
    do {
        console.log(`Deseja separar ${cacador1} e ${cacador2} para cada um buscar um elemento?: 
                1) Sim            2) Não`)
        escolha = prompt(`R: `).toLowerCase();
        if (escolha == 1 || escolha == `sim`) {
            separados = true;
            return tentativasSeparados()
            break;
        } else if (escolha == 2 || escolha == `nao`) {
            separados = false;
            return tentativasS()
            break;
        } else {
            console.log('Escolha não identificada')
        };
    }while(true){}
}

function tentativasS() {
    if (separados == false) {
        console.log('\nStatus de vida ' + cacador1 + ': ' + Math.trunc(infoCacador1Vida.vida))
        console.log('Status de vida ' + cacador2 + ': ' + Math.trunc(infoCacador2Vida.vida) + '\n')
        dias++

        if (dias == 1) {
            console.log('\n' + cacador2 + ' Encontra o monstro na cidade, ao se aproximar acaba tomando arranhões pois o monstro deixou muita \ndestruição ao redor, ' + cacador2 + ' resolve disparar com sua arma um dardo especial capaz de deixar dormindo o monstro: ' + monstroNome + '\n por alguns minutos, \n ' + cacador2 + ' aproveita o momento para extrair o sangue e voltar ao laboratorio.\n')
            infoMonstroVida.vida = infoMonstroVida.vida - 50;
            console.log(cacador1 + ' Encontra a nave do: ' + monstroNome + ', A nave emite um forte calor, ' + cacador1 + ' ao se aproximar da nave encontra uma porta com senha para ser desbloqueada, \n pois desconfia que os materiais importantes para neutralizar o ' + monstroNome + ' estejam lá\n')
            console.log('\nTentativa do dia ' + dias + ' para salvar o mundo\n')
        } else if (dias == 2) {
            console.log('\nTentativa do dia ' + dias + ' para salvar o mundo\n')
        } else if (dias == 3) {
            console.log('\nTentativa do dia ' + dias + ' para salvar o mundo\n')
        }
        for (let tentativa = 0; tentativa < 3; tentativa++) {
            codigo = prompt('Digite o códico para desbloquear a porta da nave: ')
            if (codigo == sorteio) {
                console.log(`Você acertou, o código é ${sorteio}, pegue seus elementos e siga para a próxima etapa.
                Para continuar...1) Sim `)
                let continuar = prompt(`R: `).toLowerCase();
                if (continuar == 1 || continuar == `sim`) {
                    console.clear()
                    return voltaAoLaboratorioComMaterial();
                }
                if (codigo != sorteio) {
                    console.log('você errou, se ainda possui vida tente mais uma vez!\n')
                    if (infoCacador1Vida <= 0 && infoCacador2Vida <= 0) {
                        return voltaLaboratorioSemMaterial();
                    }
                }
            } else {
                monstrovence()
            }
        }
    }
};
function tentativasSeparados() {
    console.log(`${cacador1} e ${cacador2} encontram o monstro na cidade, ao se aproximar acaba sofrem alguns arranhões pois o monstro deixou muita 
    destruição ao redor, ${+cacador2} resolve disparar com sua arma um dardo especial capaz de deixar dormindo o monstro: ${monstroNome} por alguns 
    minutos, os caçadores aproveitam o momento para extrair o sangue e voltar ao laboratorio.`)

    if (separados == true) {
        console.log('\nStatus de vida ' + cacador1 + ': ' + Math.trunc(infoCacador1Vida.vida))
        console.log('Status de vida ' + cacador2 + ': ' + Math.trunc(infoCacador2Vida.vida) + '\n')
        dias++

        if (dias == 1) {
            infoMonstroVida.vida = infoMonstroVida.vida - 50;
            console.log(`${cacador1} e ${cacador2} Encontram a nave do ${monstroNome}, A nave emite um forte calor, ao se aproximarem da nave encontram uma porta
        com senha para ser desbloqueada, pois desconfiam que os materiais importantes para neutralizar o ${+monstroNome} estejam lá`)
            console.log('\nTentativa do dia ' + dias + ' para salvar o mundo\n')

        } else if (dias == 2) {
            console.log('\nTentativa do dia ' + dias + ' para salvar o mundo\n')

        } else if (dias == 3) {
            console.log('\nTentativa do dia ' + dias + ' para salvar o mundo\n')

        } else{
            console.log('Seus dias acabaram e vocês não concluiram a missão...')
            return monstrovence()
        }
        for (let tentativa = 0; tentativa < 3; tentativa++) {
            codigo = prompt('Digite o códico para desbloquear a porta da nave: ')
            if (codigo == sorteio) {
                console.log(`Você acertou, o código é ${sorteio}, pegue seus elementos e siga para a próxima etapa..
                Para continuar...1) Sim`)
                if(infoCacador1Vida <= 0 && infoCacador2Vida <= 0){
                    let continuar = prompt(`R: `).toLowerCase();const prompt = require("prompt-sync")();

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
                    let separados = true;
                    let chances = 3;
                    let count = 0;
                    let numeroCodigo = [];
                    var codigo = [1, 3, 5];
                    var sorteio = shuffle(codigo);
                    let tentativa;
//variavel de status

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
// infoCientistaVida = infoCientistaVida - 33.1
// let intCientista = parseInt(infoCientistaVida);

// variavel de tempo
                    var dias = 0;
                    let monstroNome = "";
                    let cientista = "";
                    let cacador1 = "";
                    let cacador2 = "";

                    function sleep(milliseconds) {
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
                        if (monstroNome == "") {
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
                        if (cientista == "") {
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
                        if (cacador1 == "") {
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
                        if (cacador2 == "") {
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

                    function shuffle(array) {
                        let currentIndex = array.length,
                            randomIndex;
                        let numero = "";

                        // While there remain elements to shuffle...
                        while (currentIndex != 0) {
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
                        do {
                            console.log(`Deseja separar ${cacador1} e ${cacador2} para cada um buscar um elemento?: 
                1) Sim            2) Não`);
                            escolha = prompt(`R: `).toLowerCase();
                            if (escolha == 1 || escolha == `sim`) {
                                separados = true;
                                return tentativasSeparados();
                                break;
                            } else if (escolha == 2 || escolha == `nao`) {
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
                            `Os caçadores ${cacador1} e ${cacador2} seguem para buscar o sangue do monstro e pegar o material necessário para o cientista produzir uma
                arma capaz de matar o monstro...`
                        );
                        console.log(`Ao encontrarem a nave notam que o monstro está dormindo profundamente e tentam desbloquear a porta da nave para buscar o que é necessário
            ...
            para desbloquear essa porta é necessário digitar um código de 3 números ímpares aleatórios entre 1 e 5 que não se repetem! `)
                        for (let tentativa = 0; tentativa < 3; tentativa++) {
                            codigo = prompt("Digite o códico para desbloquear a porta da nave: ");
                        }
                        switch (tentativa < 3) {
                            case tentativa < 1 && codigo != sorteio:
                                console.log(`Você errou todas as tentativas de abrir a nave, mas o tempo está correndo!
        Pegue o que puder e leve para o cientista produzir o material necessário para atacar o monstro e o vírus.
        Para segui para o laboratório...
        1) Sim`);
                                let continuar = prompt(`R: `).toLowerCase();
                                return voltaLaboratorioSemMaterial();
                                break;

                            case tentativa < 1 && codigo == sorteio:
                                console.log(`Você acertou o código para abrir a nave, mas o tempo está correndo!
        Pegue o que puder e leve para o cientista produzir o material necessário para atacar o monstro e o vírus.
        Para segui para o laboratório...
        1) Sim`);
                                continuar = prompt(`R: `).toLowerCase();
                                return voltaLaboratorioSemMaterial();
                                break;

                            case tentativa >= 1 && codigo != sorteio:
                                console.log(`Você acertou o código para abrir a nave, mas o tempo está correndo!
        Pegue o que puder e leve para o cientista produzir o material necessário para atacar o monstro e o vírus.
        Para segui para o laboratório...
        1) Sim`);
                                continuar = prompt(`R: `).toLowerCase();
                                return voltaLaboratorioSemMaterial();
                                break;

                            case tentativa >= 1 && codigo == sorteio:
                                console.log(`Você acertou, o código é ${sorteio}, pegue seus elementos e siga para a próxima etapa.
                Para continuar...
                Pronto para seguir para o laboratório? 
                1) Sim `);
                                continuar = prompt(`R: `).toLowerCase();
                                return voltaAoLaboratorioComMaterial();

                        }
                    }


                    function tentativasSeparados() {
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
                            "\n" +
                            cacador2 +
                            " Encontra o monstro na cidade, ao se aproximar acaba tomando arranhões pois o monstro deixou muita \ndestruição ao redor, " +
                            cacador2 +
                            " resolve disparar com sua arma um dardo especial capaz de deixar dormindo o monstro: " +
                            monstroNome +
                            "\n por alguns minutos, \n " +
                            cacador2 +
                            " aproveita o momento para extrair o sangue e voltar ao laboratorio.\n"
                        );
                        infoMonstroVida.vida = infoMonstroVida.vida - 50;
                        console.log(
                            cacador1 +
                            " Encontra a nave do: " +
                            monstroNome +
                            ", A nave emite um forte calor, " +
                            cacador1 +
                            " ao se aproximar da nave encontra uma porta com senha para ser desbloqueada, \n pois desconfia que os materiais importantes para neutralizar o " +
                            monstroNome +
                            " estejam lá\n"
                        );

                        for (let tentativa = 0; tentativa < 3; tentativa++) {
                            codigo = prompt("Digite o códico para desbloquear a porta da nave: ");
                        }
                        switch (tentativa < 3) {
                            case tentativa < 1 && codigo != sorteio:
                                console.log(`Você errou todas as tentativas de abrir a nave, mas o tempo está correndo!
        Pegue o que puder e leve para o cientista produzir o material necessário para atacar o monstro e o vírus.
        Para segui para o laboratório...
        1) Sim`);
                                let continuar = prompt(`R: `).toLowerCase();
                                return voltaLaboratorioSemMaterial();

                            case tentativa >= 1 && codigo == sorteio:
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
                        sleep(700)

                        console.log(`Você Trouxe pedras e água... mas o cientista ${cientista} se dedicou para tentar achar algumas coisas que fossem úteis para você poder
        lutar contra o montro na proxima etapa, deixe ele trabalhar, amanhã será um dia cansativo...`
                        );
                        return ultimoDesafio();
                    }

                    validador();
                    tentativasS();

                    function voltaAoLaboratorioComMaterial() {
                        console.clear();
                        sleep(700)
                        console.log(
                            "Você chegou aqui com o material necessário, amanhã iremos destruir esse monstro e salvar a humanidade!"
                        );
                        return ultimoDesafio();
                    }

                    function jogarnovamente() {
                        do {
                            console.log(`Deseja jogar novamente?: 
    1) Sim            2) Não`);

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
                            jogarD = prompt(`Resposta: `).toLowerCase();
                            if (jogarD == 1) {
                                //Retornando valores das variaves
                                escolha = "";
                                separados = true;
                                chances = 3;
                                count = 0;
                                dias = 0;

                                //Retornando valores das variaves
                                infoMonstroVida.vida = 200;
                                infoCacador1Vida.vida = 100;
                                infoCacador2Vida.vida = 100;
                                infoCientistaVida.vida = 100;

                                return validador();
                            } else {
                                return ganharGame();
                            }
                        } while (true);
                        {
                        }
                    }

                    function ultimoDesafio() {
                        console.log("");
                        console.log("");
                        console.clear();
                        console.log(`Essa é última missão, com o antídoto pronto e as armas calibradas com o material que você buscou, um jogo aleatório entre
${monstroNome} e ${cientista} vai enfim definir o vencedor da partida...`);

                        function random(maximo, minimo = 0) {
                            let max = Math.floor(maximo);
                            let min = Math.ceil(minimo);
                            let random = Math.random() * (max - min + 1) + min;
                            random = parseInt(random);
                            return random;
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
                        let qtdadeRodadas = 3;
                        validacaoNumero(qtdadeRodadas);
                        let ganhador;

                        for (i = 0; i < qtdadeRodadas; i++) {
                            x = 0;
                            for (jogador of jogadores) {
                                jogadores[x].golpe = random(20, 1);
                                x++;
                            }
                            jogadores.sort(compararDados);
                            for (a in jogadores) {
                                if (jogadores[a].golpe == jogadores[jogadores.length - 1].golpe) {
                                    jogadores[a].vitorias += 1;
                                }
                            }
                        }
                        jogadores.sort(compararVitorias);

                        sleep(1000);
                        console.log(
                            `O campeão desta etapa foi o jogador ${(ganhador =
                                jogadores[jogadores.length - 1].nome)}`
                        );

                        sleep(1000);
                        console.log(ganhador);
                        jogadores.splice(0);
                        nomes.splice(0);

                        sleep(1000);
                        console.log(jogador);

                        if (ganhador == monstroNome) {
                            return monstrovence();
                        } else if (ganhador == cientista) {
                            return ganharGame();
                        }
                    }

                    let jogaMais;

                    function ganharGame() {
                        console.log(
                            "Parabéns você ganhou o jogo, O monstro foi derrotado com uma arma letal e a humanidade foi salva com o antitodo criado pelo cientista"
                        );
                        while (jogaMais == 1 || jogaMais == `sim`) {
                            console.log("Você pode jogar novamente se quiser...");
                            console.log(`
    Deseja jogar de novo?: 
    1) Sim            2) Não
    `);
                            jogaMais = prompt(`R: `).toLowerCase();
                            if (jogaMais == 1 || jogaMais == "sim") {
                                console.clear();
                                return jogarnovamente();
                            }
                        }        console.log("FIM!");
                    };

                    function monstrovence() {
                        console.log(
                            "O monstro venceu dessa vez, mas você pode jogar novamente se quiser..."
                        );

                        while (jogaMais == 1 || jogaMais == `sim`) {
                            console.log(`
    Deseja jogar de novo?: 
    1) Sim            2) Não
    `);
                            jogaMais = prompt(`R: `).toLowerCase();
                            if (jogaMais == 1 || jogaMais == `sim`) {
                                console.clear();
                                return jogarnovamente();
                            }

                        }  console.log("FIM!");
                    };


                    if(continuar == 1 || continuar =='sim')
                    console.clear()
                    return voltaAoLaboratorioComMaterial();
                }
                }
            }
        };
        if (codigo != sorteio) {
            if(infoCacador1Vida <= 0 && infoCacador2Vida <= 0) {
                console.log('você errou, como ainda possui vida tente mais uma vez!\n')
                return voltaAoLaboratorioComMaterial();
            };
    }else{
        return monstrovence()
    };
};

function voltaLaboratorioSemMaterial(){

    infoCacador1Vida.vida = infoCacador1Vida.vida - 33.1
    infoCacador2Vida.vida = infoCacador2Vida.vida - 33.1

    if (infoCacador2Vida.vida == 0.7000000000000028 && infoCacador2Vida.vida == 0.7000000000000028 ){
        console.log('Você esta sem vida, Você perdeu o jogo\n')
         return jogarnovamente();
        // intCacador2 = parseInt(infoCacador2Vida);
        // intCacador1 = parseInt(infoCacador1Vida);
    }else if(infoCacador1Vida >= 0 && infoCacador2Vida >= 0){
         return tentativasS();
    }
}

validador();
tentativasS();

function voltaAoLaboratorioComMaterial(){
    console.log('Você chegou aqui com o material necessário, amanhã iremos destruir esse monstro e salvar a humanidade!')
    return ultimoDesafio()
}

function jogarnovamente(){
    do { console.log(`Deseja jogar novamente?: 
    1) Sim            2) Não`)

        console.log('\nStatus de vida '+cacador1+': '+Math.trunc(infoCacador1Vida.vida))
        console.log('Status de vida '+cacador2+': '+Math.trunc(infoCacador2Vida.vida)+'\n')
        jogarD = prompt(`Resposta: `).toLowerCase();
        if ( jogarD == 1){
            //Retornando valores das variaves
            escolha = "";
            separados = true;
            chances = 3;
            count = 0;
            dias = 0;

            //Retornando valores das variaves
            infoMonstroVida.vida = 200;
            infoCacador1Vida.vida = 100;
            infoCacador2Vida.vida = 100;
            infoCientistaVida.vida = 100;

            return validador();
        }
        else{
            return ganharGame()
        }
    }while(true){}
};

function ultimoDesafio(){
    console.log('')
    console.log('')

    console.clear()
    console.log(`Essa é última missão, com o antídoto pronto e as armas calibradas com o material que você buscou, um jogo aleatório entre
${monstroNome} e ${cientista} vai enfiem definir o vencedor da partida...`)


    function random(maximo, minimo = 0) {
        let max = Math.floor(maximo);
        let min = Math.ceil(minimo);
        let random = Math.random() * (max - min + 1) + min;
        random = parseInt(random);
        return random;
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
        return a
    }
    const jogadores = [];
    const nomes = [];
    let x=0

    let qtdadeJogadores = 2;
    let nome1 = [monstroNome];
    nomes.push(nome1);
    let nome2 = [cientista];
    nomes.push(nome2);

    criarJogador(qtdadeJogadores);
    let qtdadeRodadas = 3;
    validacaoNumero(qtdadeRodadas);
    let ganhador;

    for (i = 0; i < qtdadeRodadas; i++) {
        x=0
        for (jogador of jogadores ){
            jogadores[x].golpe = random(20, 1);
            x++
        }
        jogadores.sort(compararDados);
        for (a in jogadores) {
            if (jogadores[a].golpe == jogadores[jogadores.length - 1].golpe) {
                jogadores[a].vitorias += 1;
            }
        }
    }
    jogadores.sort(compararVitorias);
    console.log(`O campeão desta etapa foi o jogador ${
        ganhador = jogadores[jogadores.length - 1].nome}`
    );
    console.log(ganhador)
    jogadores.splice(0);
    nomes.splice(0);
    console.log(jogador)

    if(ganhador == monstroNome){
        return monstrovence()

    } else if(ganhador == cientista){
        return ganharGame()
    }
};

function ganharGame () {
    console.log('Parabéns você ganhou o jogo, O monstro foi derrotado com uma arma letal e a humanidade foi salva com o antitodo criado pelo cientista')
    do {
        console.log('Você pode jogar novamente se quiser...')
        console.log(`
    Deseja jogar de novo?: 
    1) Sim            2) Não
    `)
        let jogaMais = prompt(`R: `).toLowerCase();
        if (jogaMais == 1 || jogaMais == 'sim') {
            console.clear();
            return validador();
        } if (jogaMais ==2 || jogaMais == 'nao'){
            console.log('FIM!')
            break;
        }
    }while (true){}
};

function monstrovence() {
    console.log('O monstro venceu dessa vez, mas você pode jogar novamente se quiser...')
   do {
       console.log(`
    Deseja jogar de novo?: 
    1) Sim            2) Não
    `)
       let jogaMais = prompt(`R: `).toLowerCase();
       if (jogaMais == 1 || jogaMais == `sim`) {
           console.clear();
           return validador();
       }  if (jogaMais ==2 || jogaMais == 'nao') {
           console.log('FIM!')
           break;
       }
   }while (true){};
};