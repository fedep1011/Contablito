"use strict";
const dataUser = []


function login () {
const username = document.getElementById("username").value
    
    if(document.getElementById("password").value && document.getElementById("username").value){
        dataUser.push({username})
        localStorage.setItem("dataUser", JSON.stringify(dataUser))
        
        document.getElementById("errorMessage").innerHTML += `<div style="margin-top: 10px" class="alert alert-success" role="alert">
    <strong> Genial! </strong> Enseguida lo llevaremos a su página
  </div>`

        window.location.href = "index.html"

    }
else {
    document.getElementById("errorMessage").innerHTML += `<div style="margin-top: 10px" class="alert alert-danger" role="alert">
    Ingrese credenciales válidas
  </div>`
}

}



document.getElementById("loginButton").addEventListener("click", login)