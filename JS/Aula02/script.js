let idade = Number(prompt("Digite sua idade: "))
let stats = prompt("Você já foi registrado? (Sim ou Não)")

let maioridade = (idade >= 18) ? 'Maior de Idade' : 'Menor de Idade'

console.log("Classificação de Idade: " + maioridade)

switch (stats){

    case "Sim":
        console.log("Bem-vindo! Que bom ter você de volta.")
        break
    case "Não":
        console.log("Faça o seu registro para que tenha acesso a todos os recursos")
        break
    default:
        console.log("Status desconhecido")

}

if (idade >= 18 && stats === "Sim"){
    console.log("Acesso Liberado")
}
else if (idade < 18 || stats === "Sim"){
    console.log("Acesso Limitado")
}