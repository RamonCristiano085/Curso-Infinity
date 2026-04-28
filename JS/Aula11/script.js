const container = document.getElementById("container")

const formulario = document.getElementById("formulario")

const usuario = document.getElementById("usuario")
const senha = document.getElementById("senha")
const telefone = document.getElementById("tel")
const email = document.getElementById("email")
const data = document.getElementById("data")

const box = document.createElement("div")
box.classList.add("box")
box.innerHTML = `<h2 class="titulo">Dados</h2>`
document.body.appendChild(box)


const lista = document.createElement("ul")
lista.classList.add("lista")
box.appendChild(lista)


container.appendChild(box)

formulario.addEventListener("submit", function(e){

    e.preventDefault()
    
    if(
        usuario.value === "" ||
        senha.value === "" ||
        telefone.value === "" ||
        email.value === "" ||
        data.value === ""
    ){
        console.log("Preencha todos os campos!")
        return
    }
    
    const item = document.createElement("li")
    item.classList.add("item")
    item.innerHTML = `<p>Usuário: ${usuario.value}</p>
    <p>E-mail: ${email.value}</p>
    <p>Telefone: ${telefone.value}</p>
    <p>Data de nascimento: ${data.value}</p>`
    
    
    lista.appendChild(item)
    
    formulario.reset()
})

const limpar =document.getElementById("limpar")
limpar.addEventListener("click", function(){
    box.innerHTML = `<h2 class="titulo">Dados</h2>`
})
