//Arrays. Los [] indican que es un array
const miPrimerArray = []
console.log(miPrimerArray)
// Array number
const arrayNumber = [23, 5, 18, 40, 50]
console.log(arrayNumber)

// Array con tipo de dato string
const arrayString = ["coder", "mango", "coso", "chop suey"]
console.log(arrayString)

//Acceder a los elementos del Array
console.log(arrayNumber[4])

const numeros = [13, 15, 20, 22, 15, 63, 80]
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

// METODOS:


//Metodos para agregar elementos al array
// PUSH agrega un elemento al final del array
numeros.push(77)
console.log(numeros)
// UNSHIFT agrega un elemento al principio del array
numeros.unshift(12)
console.log(numeros)

//Ejercicio: hacer un array de objetos y que los incluya el usuario. 
class Taza {
    constructor(nombre, color, envio, precio) {
            this.nombre = nombre,
            this.color = color,
            this.envio = envio,
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
function cargarProducto (array){
    let nombre = prompt(`Ingrese el nombre del producto`)
    let color = prompt(`Ingrese el color del producto`)
    let envio = prompt(`Ingrese el envio del producto`)
    let precio = prompt(`Ingrese el precio del producto`)
    let tazaCreada = new Taza(nombre, color, envio, precio)
    array.push(tazaCreada)
    console.log(array)
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
                    n = n+1
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
menu()
