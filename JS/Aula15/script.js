const load = document.getElementById("load")
const container = document.getElementById("container")

load.addEventListener("click", async (e) => {
    e.preventDefault()

    container.innerHTML = ""

    try {
        
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
            throw new Error(`Erro HTTP: ${response.status}`)
        }
        
        const data = await response.json()
        
        data.forEach(user => {
            const box = document.createElement("div")
            box.classList.add("box")
            container.appendChild(box)

            const list = document.createElement("ul")
            list.classList.add("list")
            box.appendChild(list)

            const item = document.createElement("li")
            item.classList.add("item")
            
            item.innerHTML = `
            <p class = "text">ID: ${user.id}</p>
            <p class = "text">Name: ${user.name}</p>
            <p class = "text">Username: ${user.username}</p>
            <p class = "text">Email: ${user.email}</p>
            `

            list.appendChild(item)
        })
        
    } catch (error){
        container.innerHTML = `<p class = "error">A API não está respondendo.</p>`
        console.error("Erro ao carregar os usuários, tente novamente mais tarde.", error)
    }
})