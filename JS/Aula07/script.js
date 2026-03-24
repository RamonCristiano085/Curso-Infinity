let Lista = []

function adicionarNome(){
    let nome = prompt("Digite o nome: ")
    Lista.push(nome)
    console.log("Lista atual: ", Lista)
}
function filtrarNome(){
    let letra = prompt("Digite a letra inicial para filtrar: ")
    let filtrados = Lista.filter(nome => nome.toLowerCase().startsWith(letra.toLowerCase()))
    console.log(`Nomes filtrados: ${filtrados}`)
}
function buscarNome(){
    let nomeBuscado = prompt("Digite o nome que você quer buscar: ")
    let resultado = Lista.find(nome => nome === nomeBuscado)
    if(resultado){
        console.log(`Nome encontrado: ${resultado}`)
    } else{
        console.log("Nome não encontrado")
    }
}

function transformarNome(){
    let nomesMaiusculos = Lista.map(nome => nome.toUpperCase())
    console.log("Nomes em maiúsculas:", nomesMaiusculos)
}

function verificarCaracter(){   
    let verificar = Lista.every(nome => nome.length > 3)
    console.log(`Todos os nomes têm mais de 3 caracteres? ${verificar}`)
}

let continuar = "S"

while(continuar === "S"){

    let opcao = prompt(
        "=== MENU ===\nEscolha uma opção:\n1 - Adicionar\n2 - Filtrar\n3 - Buscar\n4 - Transformar\n5 - Verificar"
    )

    switch(opcao){
        case "1":
            adicionarNome()
            break
        case "2":
            filtrarNome()
            break
        case "3":
            buscarNome()
            break
        case "4":
            transformarNome()
            break
        case "5":
            verificarCaracter()
            break
        default:
            console.log("Opção inválida!")
    }

    continuar = prompt("Deseja continuar? (S/N)").toUpperCase()
}