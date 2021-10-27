"use strict";
console.log("testing")

function darkTheme1(){

    document.body.style.backgroundColor = "rgb(53, 53, 54)";
    document.body.style.color = "White";
    document.getElementById("darkThemeCard").style.color = "White"
    document.getElementById("darkThemeCard").style.backgroundColor = "rgb(53, 53, 54)"
    document.getElementById("backCard").style.color = "White"
    document.getElementById("backCard").style.backgroundColor = "rgb(65, 65, 65)"
    document.getElementById("darkThemeCard2").style.color = "White"
    document.getElementById("darkThemeCard2").style.backgroundColor = "rgb(53, 53, 54)"
    document.getElementById("backCard2").style.color = "White"
    document.getElementById("backCard2").style.backgroundColor = "rgb(65, 65, 65)"
    document.getElementById("darkThemeCard3").style.color = "White"
    document.getElementById("darkThemeCard3").style.backgroundColor = "rgb(53, 53, 54)"
    document.getElementById("backCard3").style.color = "White"
    document.getElementById("backCard3").style.backgroundColor = "rgb(65, 65, 65)"
}

function ligthTheme1(){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "Black"

}

window.onload = (e)=>{
    console.log("test")
   if ( document.getElementById("theme1").checked == false){
       ligthTheme1()

       console.log("test2")

   }
 else {
     darkTheme1()
     
console.log("test3")

 }

}

document.getElementById("theme1").addEventListener("click", (e) =>{

    console.log("test")
    if (document.getElementById("theme1").checked == true){

    darkTheme1()

    
    
    }




})

document.getElementById("theme1").addEventListener("click", (e) =>{
    if (document.getElementById("theme1").checked == false){
        
    ligthTheme1()
    
    }
    else {
        darkTheme1()
    }
    
    }) 