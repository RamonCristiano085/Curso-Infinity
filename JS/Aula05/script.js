const Lista = []
let quantidade = Number(prompt("Quantas tarefas você terá hoje? "))
let resp = 0
let resploop = "S"

for(let i = 0; i < quantidade; i++){
    let tarefas = prompt("Digite suas tarefas: ")
    Lista.push(tarefas)
}

console.log("Está é a lista de suas tarefas em sequência: ")

for(let i = 0; i < Lista.length; i++){
    console.log(Lista[i])
}

while(resploop === "S"){

    resp = prompt("Você deseja adicionar mais alguma tarefa? (S/N) ")

    if(resp === "S"){
        quantidade = Number(prompt("Quantas tarefas você quer adicionar? "))

        for(let i = 0; i < quantidade; i++){
            let adicionar = prompt("Digite a tarefa que você quer adicionar: ")
            Lista.push(adicionar)
        }

        console.log("Essa é a sua lista atualizada: ")

        for(let i = 0; i < Lista.length; i++){
            console.log(Lista[i])
        }
    }
    else if(resp === "N"){
        console.log("Sua lista permanece a mesma. ")
    }
    else{
        alert("Opção inválida! ")
    }

    resp = 0
    resp = prompt("Você deseja remover alguma tarefa? (S/N) ")

    if(resp === "S"){

        console.log("Este é o índice de suas tarefas: ")

        for(let i = 0; i < Lista.length; i++){
            console.log(i + " - " + Lista[i])
        }

        let indice = Number(prompt("Digite o índice da tarefa que você quer retirar."))

        if(indice >= 0 && indice < Lista.length){
            Lista.splice(indice, 1)
        } else {
            alert("Índice inválido!")
        }

        console.log("Esta é a sua lista após a remoção: ")

        for(let i = 0; i < Lista.length; i++){
            console.log(Lista[i])
        }
    }
    else if(resp === "N"){
        console.log("Sua lista permanece a mesma. ")
    }
    else{
        alert("Opção inválida! ")
    }

    resp = 0
    resp = prompt("Você finalizou alguma tarefa? (S/N)")

    if(resp === "S"){

        console.log("Sua lista com o índice de cada tarefa: ")

        for(let i = 0; i < Lista.length; i++){
            console.log(i + " - " + Lista[i])
        }

        let indice2 = Number(prompt("Digite o índice da tarefa que você concluiu. "))

        Lista[indice2] = Lista[indice2] + " - OK"

        console.log("Esta é a sua lista após a conclusão da tarefa: ")

        for(let i = 0; i < Lista.length; i++){
            console.log(Lista[i])
        }
    }
    else if(resp === "N"){
        console.log("Sua lista permanece a mesma. ")

        for(let i = 0; i < Lista.length; i++){
            console.log(Lista[i])
        }
    }
    else{
        alert("Opção inválida! ")
    }

    resploop = prompt("Você tem mais alguma alteração? (S/N)")
}

console.log("Esta é a sua lista final: ")
for(let i = 0; i < Lista.length; i++){
    console.log(Lista[i])
}