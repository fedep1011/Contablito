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

let addData2 =  JSON.parse(localStorage.getItem("data2")) || []

console.log(addData2)

const saveDataTable2 = () => {

    let type = document.getElementById("type").value;
    let product = document.getElementById("producto").value
    let cantProducto = document.getElementById("cantProducto").value
    let date = document.getElementById("fecha").value
    let iva = document.getElementById("iva").value
    let precioUnitario = document.getElementById("precioUnitario2").value

    if ( type && product && cantProducto && date && iva && precioUnitario){
    addData2.push({type, product, cantProducto, date, iva, precioUnitario})

    localStorage.setItem("data2", JSON.stringify(addData2))
}}


function addDataTable2 () {
let htmlContentToAppend = ""
let allDataTable2 = JSON.parse(localStorage.getItem("data2"))
for(let i = 0; i < allDataTable2.length; i++){


  htmlContentToAppend += `<tr> 
<td> `+ allDataTable2[i].date + ` </td>

<td> `+ allDataTable2[i].type+ ` </td>

<td> `+ allDataTable2[i].product + ` </td>

<td> `+ allDataTable2[i].cantProducto+ ` </td>

<td> `+ allDataTable2[i].precioUnitario+ ` </td>

<td> `+"$"+ allDataTable2[i].cantProducto * allDataTable2[i].precioUnitario + ` </td>

<td> ` +"$"+ allDataTable2[i].iva * allDataTable2[i].cantProducto * allDataTable2[i].precioUnitario + ` </td>

<td> $${allDataTable2[i].iva * allDataTable2[i].cantProducto * allDataTable2[i].precioUnitario + allDataTable2[i].cantProducto * allDataTable2[i].precioUnitario }   </td>
</tr>`



    document.getElementById("cuerpoTabla2").innerHTML = htmlContentToAppend


}
}



document.addEventListener("DOMContentLoaded", (a) =>{

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
    

if(JSON.parse(localStorage.getItem("data2")) != null ){
            addDataTable2()

}

})

document.getElementById("botonRegistroCV").addEventListener("click", function (){
    
    saveDataTable2()
    addDataTable2()

})

 
