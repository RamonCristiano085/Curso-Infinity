const container = document.getElementById("container")
const buscar = document.getElementById("buscar")
const resetar = document.getElementById("resetar")
buscar.addEventListener("click", async (e) =>{

    e.preventDefault()

    try {
        const api = await fetch("https://jsonplaceholder.typicode.com/users")

        if(!api.ok) {
            throw new Error("Erro na requisição")
        }

        const usuarios = await api.json()

        container.innerHTML = ""

        usuarios.forEach(usuario => {
            const newBox = document.createElement("div")
            newBox.classList.add("box")

            newBox.innerHTML = `
                <p>ID: ${usuario.id}</p>
                <p>Nome: ${usuario.name}</p>
                <p>Usuário: ${usuario.username}</p>
                <p>E-mail: ${usuario.email}</p>
            `

            container.appendChild(newBox)
        })

    } catch (error) {
        container.innerHTML = "<p>A API não está respondendo.</p>"
        console.error("API não está respondendo", error)
    }
})

resetar.addEventListener("click", () => {
    container.innerHTML = ""
})