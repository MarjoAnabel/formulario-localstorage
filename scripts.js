const inputName = document.getElementById('userName')
const email = document.getElementById ('userEmail')
const mensage = document.getElementById ('userMensage')
const userInfo = document.getElementById ('content')
const sendButton = document.getElementById ('sendButton')


function onSubmit(event) {
    event.preventDefault()
    saveDataStorage ()
    const userFromStorage = JSON.parse (localStorage.getItem ('userInfo'))
    userInfo.innerHTML = `<p>Hola ${userFromStorage.userName} tu correo ${userFromStorage.userEmail} y el mensaje ${userFromStorage.userMensage}</p>`
 }
    function saveDataStorage() {
    localStorage.setItem('userInfo', JSON.stringify({
        userName: userName.value,
        userEmail: userEmail.value,
        userMensage: userMensage.value,
        
    }))

}
sendButton.addEventListener ('click', onSubmit)


// const remove = localStorage.clear
// remove.addEventListener ('click', onSubmit) 
