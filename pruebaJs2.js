class Persona {
    constructor(nombre,edad,telefono){
        this.nombre = nombre,
        this.edad = edad,
        this.telefono = telefono
    }
}
let arrayPersona = []
function captura(e){
    e.preventDefault()
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
    for(let persona of array){
        let nuevaPersona= document.createElement("div")
        nuevaPersona.innerHTML='<p> ${persona.Persona.nombre} tiene ${persona.Personaedad} y su numero es ${persona.telefono}</p>'
        
    }
}
btnCaptura.addEventListener("click", captura)
btnPersonas.addEventListener("click", mostrarPersonas)