const form = document.getElementById("form")

const name = document.getElementById("name")
const user = document.getElementById("user")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const date = document.getElementById("date")


form.addEventListener("submit", function(e){

    e.preventDefault()

    try{
            
        if(name.value === ""){
            throw new Error("Nome obrigatório")
        }

        if(user.value === ""){
            throw new Error("Usuário obrigatório")
        }

        if(email.value === ""){
            throw new Error("E-mail obrigatório")
        }

        if(pass.value === ""){
            throw new Error("Senha obrigatória")
        }

        if(date.value === ""){
            throw new Error("Data obrigatória")
        }

        const birth = new Date(date.value)
        const today = new Date()
    
        let age = today.getFullYear() - birth.getFullYear()
        const month = today.getMonth() - birth.getMonth()
    
        if(month < 0 ||
           month === 0 && today.getDate() < birth.getDate()
        ){
            age--
        }
    
        if(age < 18){
            throw new Error("Você deve ser maior de idade")
        }
    
        console.log("Cadastro realizado com sucesso!")

    }catch(error){
        console.error(error.message)
    }
    form.reset()

})