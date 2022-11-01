class Persona {
    constructor(nombre,edad,telefono){
        this.nombre = nombre,
        this.edad = edad,
        this.telefono = telefono
    }
}
let arrayPersona = []
function captura(){
    let nombre= document.getElementById("nombre")
    alert (nombre.value) 
    let edad= document.getElementById("edad")
    alert (edad.value)
    let telefono= document.getElementById("telefono")
    alert (telefono.value)
    let nuevaPersona = new Persona (nombre.value,edad.value,telefono.value)
    console.log(nuevaPersona)
    arrayPersona.push(nuevaPersona)
    console.log(arrayPersona)
    nombre.value = " "
    edad.value =" "
    telefono.value =" "

}
let btnCaptura = document.getElementById("boton")
let mostrar = document.getElementById("mostrar")
let btnPersonas = document.getElementById("ver")

function mostrarPersonas(array){
    console.log("funciona")
    for(let persona of array){
        console.log(persona.nombre)
        console.log(persona.edad)
        console.log(persona.telefono)
    }
}
btnCaptura.addEventListener("click", captura)
btnPersonas.addEventListener("click", mostrarPersonas(arrayPersona))