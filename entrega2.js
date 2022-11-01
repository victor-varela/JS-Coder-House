//Hacer un menu para el admin de la tienda que permita añadir y eliminar objetos. Hacer un log in si es admin o si es cliente
//Usar objetos para guardar los productos. Nombre, precio, categoria, descripcion, etc
//Ejercicio: hacer un array de objetos y que los incluya el usuario. 



// SEGUNDA ENTREGA
class Taza {
    constructor(nombre, color, mensaje, precio) {
            this.nombre = nombre,
            this.color = color,
            this.mensaje = mensaje,
            this.precio = precio
    }
}
let ArrayTaza = []

let divCards = document.getElementById("tarjetas")
let btnCrear = document.getElementById("btnCrear")

function cargarTaza(array) {
    array.prevenDefault()
    let nombre = document.getElementById("nombreTaza")
    let color = document.getElementById("color")
    let mensaje = document.getElementById("mensaje")
    let precio = document.getElementById("precio")
    let tazaCreada = new Taza(nombre.value, color.value, mensaje.value, precio.value)
    array.push(tazaCreada)
    console.log(array)
}
function mostrarTarjetas(array) {
    for (let taza of array) {
        let nuevaTaza = document.createElement("div")
        nuevaTaza.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="textoCentrado">
            <img src="/imgJs/taza.png" class="card-img-top" alt="...">
            <div class="texto">${taza.nombre}</div>
        </div>
        <div class="card-body">
            <h5 class="card-title">La taza de ${taza.nombre}</h5>
            <p class="card-text">${taza.mensaje}</p>
            <div class="precioTaza">$${taza.precio}</div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
        divCards.appendChild(nuevaTaza)
    }
}


btnCrear.addEventListener("click", ()=>{
    cargarTaza(ArrayTaza)
})
