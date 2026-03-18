let qntd = Number(prompt("Digite quandos itens você vai adicionar:"))
let lista = []
let rsp = 0
let rsp2 = 0


for (let i = 0; i < qntd; i++){
    let itens = prompt("Digite os itens")
    lista.push(itens)
}

console.log("Esta é a sua lista de itens:", lista)

rsp = prompt("Você quer colocar mais algum item? (S/N)")

if(rsp === "S"){

    qntd = Number(prompt("Quantos itens?"))

    for (let i = 0; i < qntd; i++){
        itens = prompt("Digite os itens")
        lista.push(itens)
    }

    console.log("Esta é a sua nova lista de itens: ", lista)

}
else if(rsp === "N"){
    
    console.log("Sua lista não houve alterações")
    console.log("Lista: ", lista)

}

rsp2 = prompt("Você quer retirar algum item? (S/N)")

if(rsp2 = "S"){

    for (let i = 0; i < lista.length; i++) {
        console.log(i + " - " + lista[i])
    }

    let indice = Number(prompt("Digite o índice do item que quer remover:"));

    if (indice >= 0 && indice < lista.length) {

        lista.splice(indice, 1)

    }
    else {

        console.log("Índice inválido!")

    }


}

console.log("Esta é a sua lista após remover um item: ", lista)

let atualizar = prompt("Você quer atualizar algum item? (S/N)");

    if (atualizar === "S") {

    for (let i = 0; i < lista.length; i++) {

        console.log(i + " - " + lista[i]);

    }

    let indice = Number(prompt("Digite o índice que deseja atualizar:"));

    if (indice >= 0 && indice < lista.length) {

        let novoValor = prompt("Digite o novo valor:");
        lista[indice] = novoValor;

    } 
    else {

        console.log("Índice inválido!")

    }

    console.log("Lista atualizada:", lista)
}
