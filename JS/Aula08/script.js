const Aluno = {
    nome: "Carlos",
    notas: [7, 8, 6],

    media(){
        let soma = this.nota.reduce((total, nota) => total + nota, 0)
        return soma / this.nota.length
    }
}

const {nome} = Aluno
console.log(`Nome do aluno: ${nome}`)

console.log(`Notas: ${Aluno.notas}`)

let novaNota = 9
Aluno.nota = [...Aluno.notas, novaNota]

console.log(`Notas atualizada: ${Aluno.nota}`)

console.log(`Média: ${Aluno.media()}`)