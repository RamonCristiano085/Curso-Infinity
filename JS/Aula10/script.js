const input = document.getElementById("tarefa")
const btnAdd = document.getElementById("btnAdd")
const lista = document.getElementById("lista")

btnAdd.addEventListener("click", function(){
    const texto = input.value.trim()

    if (texto === ""){
        alert("Digite uma tarefa!")
        return
    }

    const li = document.createElement("li")
    li.textContent = texto

    li.addEventListener("click", function (){
        li.classList.toggle("concluida")
    })

    const btnRemove = document.createElement("button")
    btnRemove.textContent = "Remover"

    btnRemove.addEventListener("click", function(event){
        event.stopPropagation()
        lista.removeChild(li)
    })

    li.appendChild(btnRemove)
    lista.appendChild(li)

    input.value = "";
})