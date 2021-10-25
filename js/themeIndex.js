"use strict";
function darkTheme(){

    document.body.style.backgroundColor = "rgb(53, 53, 54)";
    document.body.style.color = "White";
    document.getElementById("tablaProduct").style.color = "white";
    document.getElementById("footerCreator").style.color = "rgb(149, 147, 147)";
    document.getElementById("footerBussines").style.color = "rgb(149, 147, 147)";
    
}

function ligthTheme(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "Black";
    document.getElementById("tablaProduct").style.color = "black";
    document.getElementById("footerCreator").style.color = "rgb(149, 147, 147)";
    document.getElementById("footerBussines").style.color = "rgb(149, 147, 147)";
}


document.addEventListener("DOMContentLoaded", (a) =>{
    console.log(document.getElementById("theme").checked)
   if ( document.getElementById("theme").checked == false){
       ligthTheme()

   }
 else {
     darkTheme()
 }

})

document.getElementById("theme").addEventListener("click", (e) =>{
    if (document.getElementById("theme").checked == true){

    darkTheme()

    
    
    }




})

document.getElementById("theme").addEventListener("click", (e) =>{
    if (document.getElementById("theme").checked == false){
        
    ligthTheme()
    
    }
    else {
        darkTheme()
    }
    
    })