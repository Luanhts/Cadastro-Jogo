const prompt = require("prompt-sync")();
const {
    criar, atualizar, listar, remover
} = require("./jogos")

while(true){
    console.log(`
    1. Criar 
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair`)

    const opcao = parseInt(prompt("Escolha uma opção acima: "))

    switch (opcao) {
        case 1:
            atualizar();
            break;
        case 2:
            listar();
            break;
        case 3:
            atualizar();
            break;
        case 4:
            remover();
            break;
        case 5:
            process.exit();
            break;
        default:
            console.log("Opção inválida: ")            
            break;
    }
}