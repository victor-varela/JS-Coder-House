// // Contol de Flujos
// let edad = prompt ("Responda por si o por no es mayor de edad ")
// if (edad.toLocaleLowerCase () =="si")  {
//     console.log ("Usted puede comprar alcohol")
// }
// else {
//     console.log ("Usted NO puede comprar alcohol")
// }
// // Otro ejemplo

// let color = prompt ("Ingrese su color favorito")
// if (color == "rojo") {
//     console.log ("Es un color primario")
// }
// else if (color =="azul"){
//     console.log ("Es un color primario")
// }
// else if (color == "amarillo") {
//     console.log ("Es un color primario")
// }
// else {
//     console.log (" NO es un color primario")
// }
// //Hacer una variable que nos de un valor booleano
// let numero = 4
// let mayor5 = (numero >5)
// if (mayor5) {
//     console.log ("El numero es mayor a 5")
// }else {
//     console.log ("El numero NO es mayor a 5")
// }

// Como hacer lo mismo pero con una sola condicion
// let color2 = prompt ("Ingrese su color favorito")
// if ((color2 == "rojo")|| (color2 =="amarillo")|| (color2 =="azul")) {
//     console.log ("Es un color primario "+ color2)
// }else
// {
//     console.log ("No es un color primario "+ color2)
// }
//Ejercicios clase 2:


//Usuario ingresa tres notas del 1 al 10 y sacamos el total y el promedio de esas notas
//Hacer un condicional que me diga si el promedio es 10 "felicitaciones es un alumno/a ejemplar"
//Si el promedio es mayor a 7 " promociono la materia"
//Si el promedio es mayor o igual a 4 " aprobola materia"
//menor a 4 "desaprobo la materia"

let nota1= parseInt(prompt("Ingrese nota 1"))
let nota2= parseInt(prompt("Ingrese nota 2"))
let nota3= parseInt(prompt("Ingrese nota 3"))
let totalNotas = nota1+nota2+nota3
let promedioNotas = totalNotas /3
if (promedioNotas == 10){
    console.log ("Felicitaciones es un alumno/a ejemplar "+ "Promedio "+ promedioNotas)
}else if (promedioNotas>7) {
    console.log ("Promociono la materia "+ "Promedio "+ promedioNotas)
}else if (promedioNotas >= 4){
    console.log ("Aprobo la materia "+ "Promedio "+ promedioNotas)
}else {
    console.log("Desaprobo la materia")
}