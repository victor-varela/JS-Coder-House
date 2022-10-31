//Hacer un menu para el admin de la tienda que permita añadir y eliminar objetos. Hacer un log in si es admin o si es cliente
//Usar objetos para guardar los productos. Nombre, precio, categoria, descripcion, etc
//Ejercicio: hacer un array de objetos y que los incluya el usuario. 
class Taza {
    constructor(nombre, color, mensaje, precio) {
        this.nombre = nombre,
            this.color = color,
            this.mensaje = mensaje,
            this.precio = precio
    }
}
const ArrayTaza = []
function validaPassword() {
    let i = 1
    let password = prompt(`Ingrese su contraseña:`)
    while ((password.toLocaleLowerCase() != "admin") && (i < 5)) {
        alert(`Contraseña Incorrecta`)
        password = prompt(`Ingrese su contraseña:`)
        i = i + 1
        console.log(i)
    }

}
function cargarProducto(array) {
    let nombre = prompt(`Ingrese el nombre del producto`)
    let color = prompt(`Ingrese el color del producto`)
    let envio = prompt(`Ingrese el envio del producto`)
    let precio = prompt(`Ingrese el precio del producto`)
    let tazaCreada = new Taza(nombre, color, envio, precio)
    ArrayTaza.push(tazaCreada)
    console.log(ArrayTaza)
}
function menu() {
    let tipoUsuario = prompt(`Bienvenido
    Por favor elija una opcion
    1. Admin
    2. Cliente`)
    if (tipoUsuario == 1) {
        let user = prompt(`Ingrese nombre de usuario:`)
        let password = prompt(`Ingrese su contraseña:`)
        if (password.toLocaleLowerCase() == "admin") {
            console.log(`Hola ${user}`)
            let bandera = true
            let n = 1
            while (bandera == true) {//permitir la carga de tazas
                // cargar el objeto mediante entradas del usuario
                let nombre = prompt(`Ingrese el nombre del producto ${n}`)
                let color = prompt(`Ingrese el color del producto`)
                let envio = prompt(`Ingrese el envio del producto`)
                let precio = prompt(`Ingrese el precio del producto`)
                let tazaCreada = new Taza(nombre, color, envio, precio)
                ArrayTaza.push(tazaCreada)
                console.log(ArrayTaza)
                let pregunta = prompt(`Desea seguir cargando tazas? s/n`)
                if (pregunta.toLowerCase() == "s") {
                    bandera = true
                    n = n + 1
                } else {
                    bandera = false
                }
            }

        } else {
            alert(`Contraseña Incorrecta`)
            validaPassword()

        }
    } else {//hacer caso de tipousuario cliente
        alert(`Todavia no esta lista esta parte del codigo`)
    }

}
//menu()
// SEGUNDA ENTREGA
let divCards = document.getElementById("tarjetas")
let btnCrear = document.getElementById("btnCrear")
function cargarTaza() {
    let nombre = document.getElementById("nombreTaza")
    let color = document.getElementById("color")
    let mensaje = document.getElementById("mensaje")
    let precio = document.getElementById("precio")
    let tazaCreada = new Taza(nombre.value, color.value, mensaje.value, precio.value)
    ArrayTaza.push(tazaCreada)
    console.log(tazaCreada)
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
btnCrear.addEventListener("click", cargarTaza)