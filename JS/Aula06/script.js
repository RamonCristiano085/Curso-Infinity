let lista = []

const adicionarTarefa = function(tarefa) {
    lista.push({ nome: tarefa, concluida: false })
}

const listarTarefas = () => {
    console.log("Lista de Tarefas:")
    lista.forEach((tarefa, index) => {
        console.log(`${index} - ${tarefa.nome} [${tarefa.concluida ? "OK" : "PENDENTE"}]`)
    })
}

function executarAcao(callback) {
    let index = Number(prompt("Digite o índice da tarefa:"))
    callback(index)
}

const removerTarefa = (index) => {
    lista.splice(index, 1)
}

const atualizarTarefa = (index) => {
    let nova = prompt("Digite a nova tarefa:")
    lista[index].nome = nova
}

const concluirTarefa = (index) => {
    lista[index].concluida = true
}

let continuar = "S"

while (continuar === "S") {
    let opcao = prompt(
        "Escolha uma opção:\n1 - Adicionar\n2 - Listar\n3 - Remover\n4 - Atualizar\n5 - Concluir"
    )

    switch (opcao) {
        case "1":
            let tarefa = prompt("Digite a tarefa:")
            adicionarTarefa(tarefa);
            break

        case "2":
            listarTarefas()
            break

        case "3":
            listarTarefas()
            executarAcao(removerTarefa)
            break

        case "4":
            listarTarefas()
            executarAcao(atualizarTarefa)
            break

        case "5":
            listarTarefas()
            executarAcao(concluirTarefa)
            break

        default:
            console.log("Opção inválida!")
    }

    continuar = prompt("Deseja continuar? (S/N)").toUpperCase()
}