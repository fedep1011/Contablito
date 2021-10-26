"use strict";
let addData1 =  JSON.parse(localStorage.getItem("data")) || []

const saveDataTable1 = () => {

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value
    let stock = document.getElementById("stockCount").value
    let price = document.getElementById("price").value

    if ( id && name && stock && price) {
    addData1.push({id, name, stock, price})

    localStorage.setItem("data", JSON.stringify(addData1))
}}


function addDataTable1 () {
let htmlContentToAppend = ""
let allDataTable = JSON.parse(localStorage.getItem("data"))
for(let i = 0; i < allDataTable.length; i++){


  htmlContentToAppend += `<tr> 
<td> `+ allDataTable[i].id + ` </td>

<td> `+ allDataTable[i].name+ ` </td>

<td> `+ allDataTable[i].stock + ` </td>

<td> `+ allDataTable[i].price+ ` </td>
</tr>`



    document.getElementById("cuerpoTabla").innerHTML = htmlContentToAppend


}
}




document.addEventListener("DOMContentLoaded", (a) =>{
// console.log (JSON.parse(localStorage.getItem("dataUser"))[0].username != null)
    if (JSON.parse(localStorage.getItem("dataUser")) != null){
document.getElementById("bussiensName").innerHTML = JSON.parse(localStorage.getItem("dataUser"))[0].username
    }
    else window.location = "login.html";
        if (JSON.parse(localStorage.getItem("data")) != null){

        addDataTable1()

        
        }
   

        document.getElementById("registerButton").addEventListener("click", function (){
    
            saveDataTable1()
            addDataTable1()
        })
    
})

 
