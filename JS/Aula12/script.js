const add = document.getElementById("add")
add.addEventListener("click", function(e){
    e.preventDefault()

    const createNewNote = document.createElement("section")
    document.body.appendChild(createNewNote)
    createNewNote.classList.add("container")

    const createNewNoteDIV = document.createElement("div")
    createNewNote.appendChild(createNewNoteDIV)
    createNewNoteDIV.classList.add("box")

    const title = document.createElement("input")
    title.classList.add("item")
    title.type = "text"
    title.id = "titulo"
    title.placeholder = "Titulo da Nota."
    createNewNoteDIV.appendChild(title)

    const note = document.createElement("textarea")
    note.classList.add("item")
    note.id = "nota"
    note.placeholder = "Nota."
    createNewNoteDIV.appendChild(note)

    const save = document.createElement("button")
    save.id = "save"
    save.innerHTML = `Salvar.`
    createNewNoteDIV.appendChild(save)

    save.addEventListener("click", (e) => {
        e.preventDefault()

        const obj = {
            titulo: title.value,
            nota: note.value
        }

        localStorage.setItem(obj.titulo, JSON.stringify(obj))

        
        const result = document.createElement("div")
        result.classList.add("box")

        const remove = document.createElement("button")
        remove.innerHTML = `Remover`

        result.innerHTML = `
        <h3>Título: ${title.value}</h3>
        <h3>Nota: <h3>
        <p>${note.value}</p>
        `
        result.appendChild(remove)

        remove.addEventListener("click", (e) => {
            e.preventDefault()
            localStorage.removeItem(obj.titulo)
            result.remove()
        })
        createNewNote.appendChild(result)
    })
    const view = document.getElementById("view")

    view.addEventListener("click", (e) => {

        e.preventDefault()
        createNewNote.remove()
    
        for(let i = 0; i < localStorage.length; i++){

            const chave = localStorage.key(i)
      
            const obj = JSON.parse(localStorage.getItem(chave))
    
            const result = document.createElement("div")

            result.classList.add("box")

            result.innerHTML = `
                <h2>Título: ${obj.titulo}</h2>

                <h3>Nota:</h3>

                <p>${obj.nota}</p>
            `

            const remove = document.createElement("button")

            remove.innerText = "Remover"

            result.appendChild(remove)

            remove.addEventListener("click", () => {

                localStorage.removeItem(obj.titulo)

                result.remove()

            })

            document.body.appendChild(result)
        }

    })
})
