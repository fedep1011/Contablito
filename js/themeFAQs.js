"use strict";
console.log("testing")
function darkTheme1(){

    document.body.style.backgroundColor = "rgb(53, 53, 54)";
    document.body.style.color = "White";

    
}

function ligthTheme1(){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "Black"



document.addEventListener("DOMContentLoaded", (e)=>{
    console.log("test")
   if ( document.getElementById("theme1").checked == false){
       ligthTheme1()

       console.log("test2")

   }
 else {
     darkTheme1()
     
console.log("test3")

 }

})

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
    
    }) }