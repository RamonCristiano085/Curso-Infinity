const Aluno = {
    nome: "Pedro",
    idade: 12,
    notas: [8, 7, 9],

    calcularMedia: function(){
        let soma = this.notas.reduce((total, nota) => total + nota, 0)
        return soma / this.nota.length
    }
}

let nome = Aluno.nome
let idade = Aluno.idade

let novaNota = 10
Aluno.nota = [...Aluno.notas, novaNota]

function verificarSituacao(media, notas){

    let mensagem

    if(media >= 7){
        mensagem = "Aprovado!"
        console.log("Aluno aprovado!")
    }
    else{
        mensagem = "Reprovado!"
        console.log("Aluno reprovado!")
    }

    console.log("Notas do aluno: ")
    for(let i = 0; i < notas.length; i++){
        console.log(`Nota ${i + 1}: ${notas[i]}`)
    }

    return mensagem
}

let mediaFinal = Aluno.calcularMedia()
let situacao = verificarSituacao(mediaFinal, Aluno.notas)

console.log(`Nome do aluno: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Média Final: ${mediaFinal}`)
console.log(`Situação: ${situacao}`)

