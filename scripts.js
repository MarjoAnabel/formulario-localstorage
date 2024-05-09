const firstname = document.getElementById('firstname')
const email = document.getElementById ('email')
const mensage = document.getElementById ('message')


const sendButton = document.getElementById ('sendButton')
sendButton.addEventListener ('click', onSubmit)

function onSubmit(event) {
    event.preventDefault()
    const firstname = firstname.value
    const email = email.value
    const mensage = mensage.value

    localStorage.setItem('formulario', JSON.stringify({
        name: firstname.value,
        email: email.value,
        mensage: mensage.value,
        
    }))
    
}

// const remove = localStorage.clear
// remove.addEventListener ('click', onSubmit)

