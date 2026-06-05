const container = document.getElementById("container")
const title = document.getElementById("title")
title.addEventListener("click", (e) => {
    e.preventDefault()
    container.innerHTML = ""
})

const newBttn = document.getElementById("newBttn")
newBttn.addEventListener("click", (e) => {
    e.preventDefault()
    
    container.innerHTML = ""

    try {

    const newBox = document.createElement("box")
    newBox.id = "box-new"

    const t1 = document.createElement("h3")
    t1.classList.add("title")
    t1.innerHTML = "Task title:"
    newBox.appendChild(t1)
    
    const input1 = document.createElement("input")
    input1.classList.add("input")
    input1.type = "text"
    input1.placeholder = "Title."
    newBox.appendChild(input1)

    const t2 = document.createElement("h3")
    t2.classList.add("title")
    t2.innerHTML = "Task:"
    newBox.appendChild(t2)

    const input2 = document.createElement("input")
    input2.classList.add("input")
    input2.type = "text"
    input2.placeholder = "Task."
    newBox.appendChild(input2)

    const saveBttn = document.createElement("button")
    saveBttn.id = "saveBttn"
    saveBttn.classList.add("button")
    saveBttn.innerHTML = "Save Task"
    newBox.appendChild(saveBttn)
 
    let list = {
    title: "",
    task: []
    }

    saveBttn.addEventListener("click", (e) => {
        e.preventDefault()

        if(input1.value === ""){
            throw new Error("Enter a title!")
            return
        }else if(input2.value === ""){
            throw new Error("Enter a task!")
            return
        }

        list.title = input1.value
        list.task.push({
            text: input2.value,
            completed: false
        })

        input2.value = ""
    
        })

    const svListBttn = document.createElement("button")
    svListBttn.id = "svListBttn"
    svListBttn.classList.add("button")
    svListBttn.innerHTML = "Save List"
        
    svListBttn.addEventListener("click", (e) => {
            e.preventDefault()

            

            if(input1.value === ""){
                throw new Error("Enter a title!")
                return
            }else if (list.task.length === 0){
                throw new Error("Enter a task!")
                return
            }

            list.title = input1.value
            
            console.log(list)

            const lists = JSON.parse(localStorage.getItem("lists")) || []

            lists.push(list)

            localStorage.setItem("lists", JSON.stringify(lists))

            list = {
            title: "",
            task: []
            }

            input1.value = ""
            input2.value = ""
            
            
    })

    newBox.appendChild(svListBttn)
        
    container.appendChild(newBox)

    } catch (error) {
        console.error(error)
    }
})

const viewBttn = document.getElementById("viewBttn")
viewBttn.addEventListener("click", (e) => {
    e.preventDefault()

    container.innerHTML = ""
    
    try {
        const lists = JSON.parse(localStorage.getItem("lists")) || []

        if (lists.length === 0) {
            container.innerHTML = `<h3 class = "title">No List</h3>`
            throw new Error("No lists saved!")
        }


        let currentPage = 0
       
        const seeBox = document.createElement("div")
        seeBox.id = "see-box"
        container.appendChild(seeBox)
              
        
        const t3 = document.createElement("h3")
        t3.classList.add("title")
        seeBox.appendChild(t3)
        t3.addEventListener("click", () => {

            const newTitulo = prompt("Edit title:", currentList.title)

            if (
                newTitulo === null ||
                newTitulo.trim() === ""
            ){
                return
            }

            currentList.title = newTitulo

            localStorage.setItem("lists", JSON.stringify(lists))

            renderPage()
            })
        
        const listUl = document.createElement("ul")
        listUl.classList.add("list")
        seeBox.appendChild(listUl)
        
        const navBox = document.createElement("div")
        navBox.id = "nav"
        seeBox.appendChild(navBox)
        
        const prevBttn = document.createElement("button")
        prevBttn.classList.add("pageBttn")
        prevBttn.innerHTML = `⬅ Previous`
        navBox.appendChild(prevBttn)
        
        const nextBttn = document.createElement("button")
        nextBttn.classList.add("pageBttn")
        nextBttn.innerHTML = `Next ➡`
        navBox.appendChild(nextBttn)
        
        function renderPage(){
            
            const currentList = lists[currentPage]

            t3.textContent = currentList.title

            t3.onclick = () => {

                const novoTitulo = prompt("Edit title:", currentList.title)

                if (
                    novoTitulo === null ||
                    novoTitulo.trim() === ""
                ){
                    return
                }

                currentList.title = novoTitulo

                localStorage.setItem("lists", JSON.stringify(lists))

                renderPage()
            }
            
            listUl.innerHTML = ""
            
            currentList.task.forEach((taskObj, index) => {
                
                const item = document.createElement("li")
                item.classList.add("item")
                
                const task = document.createElement("p")
                task.classList.add("task")
                task.textContent = taskObj.text

                if(taskObj.completed){
                    task.classList.add("task-completed")
                }
                task.addEventListener("click", () => {

                    taskObj.completed = !taskObj.completed

                    localStorage.setItem("lists",JSON.stringify(lists))  

                    renderPage()
                })     
                
                const editBttn = document.createElement("button")
                editBttn.classList.add("editBttn")
                editBttn.textContent = "Edit"

                editBttn.addEventListener("click", () => {

                    const novoTexto = prompt("Edit task:",taskObj.text)

                    if (
                            novoTexto === null ||
                            novoTexto.trim() === ""
                    ){
                        return
                    }

                    taskObj.text = novoTexto

                    localStorage.setItem("lists",JSON.stringify(lists))

                    renderPage()
                })

                const rmvBttn = document.createElement("button")
                rmvBttn.classList.add("rmvBttn")
                rmvBttn.textContent = "Remove"

                rmvBttn.addEventListener("click", (e) =>{
                    e.preventDefault()
                    
                    currentList.task.splice(index, 1)
    
                    if (currentList.task.length === 0) {
                        lists.splice(currentPage, 1)
                    }
                    
                    localStorage.setItem("lists",JSON.stringify(lists))

                    if (lists.length === 0) {
                        container.innerHTML = `<h3 class = "title">No List</h3>`
                        return
                    }

                    if (currentPage >= lists.length) {
                        currentPage = lists.length - 1
                    }
                    renderPage()
                })
    
                item.appendChild(task)
                item.appendChild(editBttn)
                item.appendChild(rmvBttn)
                
                listUl.appendChild(item)
    
            })
            
            prevBttn.disabled = currentPage === 0
            nextBttn.disabled = currentPage === lists.length - 1
        }

        prevBttn.addEventListener("click", () => {

            if (currentPage > 0) {
            currentPage--
            renderPage()
            }
        })

        nextBttn.addEventListener("click", () => {

            if (currentPage < lists.length - 1) {
                currentPage++;
                renderPage();
            }
        })

        renderPage()
     
    } catch (error) {
        console.error(error)
    }
})