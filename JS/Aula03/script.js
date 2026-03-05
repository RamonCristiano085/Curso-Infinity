let nomes = []
let contador = 0

while (true){

    let nome = prompt("Digite um nome (ou 'sair' para encerrar):")

    if (nome == "sair"){
        break
        
    }

    nomes[contador] = nome
    contador++

}

    console.log("Lista de nomes:")

    for (let i = 0; i < contador; i++){
        console.log("Nome " + (i + 1) + ": " + nomes[i])
    }
    
    for(nome of nomes){
        console.log("Bem vindo(a), " + nome + "!")
    }
