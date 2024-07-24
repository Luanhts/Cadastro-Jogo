const prompt = require("prompt-sync")();

const jogos = []

const indice_val = indice => indice >= 0 && indice < jogos.length


const modelo = () => {
    const nome = prompt("Nome do jogo: ")
    const ano_lancamento = prompt("Ano de lançamento: ")
    const duracao = prompt("Duração média de GamePlay: ")
    const preco = prompt("Preço: ")
    const estudio = prompt("Qual o estudio do jogo: ")
    let sequencia = -1
    if(listar()) {
        const sequencia = prompt("Qual a sequencia do jogo? 0 Se não houver:  ") -1;
    }

    if(nome != "" && ano_lancamento >= 1962 && ano_lancamento <= 2024 && duracao > 0 && preco == 0 && estudio != "" && ((sequencia >= 0 && sequencia < jogos.length) || jogos.length == 0)
    ) {
        return {
            nome,
            ano_lancamento,
            duracao,
            preco,
            estudio,
            sequencia
        }
} else{
    console.log("Dados inválidos: ")
}
}

const criar = () => {

    const jogo = modelo()

    if(jogo != undefined){
        jogos.push(jogo);
        console.log("Jogo Cadastrado: ")
    }
};


const listar = () => {
    if(jogos.length == 0) {
        console.log("Nenhum jogo cadastrado: ");
        return false
    } else {
        jogos.forEach((jogo, i) => {
            console.log(`${i + 1}
            Nome: ${jogo.nome}
            Ano de Lançamento: ${jogo.ano_lancamento}
            Duração: ${jogo.duracao}
            Preço: ${jogo.preco}
            Estudio: ${jogo.estudio}
            Sequência: ${jogo.sequencia}`)
        })
        return true
    }
}

const atualizar = () => {
    if (!listar()) {
        return
    }
    const indice = prompt("Qual indice a ser atualizado: ")
    const jogo = modelo();
    
    if ( jogo != undefined && indice >= 0 && indice < jogos.length) {
            jogos[indice] = jogo 

            console.log("Jogo atualizado: ")
    }else {
        console.log("Falha ao atualizar: ");
    }
}

const remover = () => {
    if (!listar()) {
        return;
    }

    const indice = prompt("Qual indice deseja remover: ")
    
    if(indice_val(indice)){
        jogos.splice(indice, 1)
        console.log("O jogo foi removido: ")
    } else{
        console.log("Falha na remoção: ")
    }
}