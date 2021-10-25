
function login () {
    if(document.getElementById("password").value && document.getElementById("username").value){
    debugger
       console.log(login)
        window.location = "index.html"

    }
else {
    document.getElementById("errorMessage").innerHTML += `<div class="alert alert-danger" role="alert">
    Ingrese credenciales válidas
  </div>`
}

}



document.getElementById("loginButton").addEventListener("click", (e) => {
    login()
   
})