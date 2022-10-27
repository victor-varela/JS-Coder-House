// Clase 3 - CICLOS
// FOR (desde; hasta; actualizacion)
// i++ es una sugar syntax, es identico a decir i = i+1
for (let i = 0; i <= 11; i++) {
    console.log(i)
}
// Tabla de multiplicar
// let numero = parseInt(prompt("Ingrese el numero a multiplicar"))

// for (let i = 0; i < 11; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`)
// }
// alt + 96 comillas backticks, para concatenar variables de manera mas practica
// para comentar masivo es crtl+k+c, descomentar crtl+k+u

// CICLO WHILE - mientras
// while (condicion a evaluar)
// debe tener una condicion de corte en el mismo cilco

//Ejercicios clase 3:


//Usuario ingresa tres notas del 1 al 10 y sacamos el total y el promedio de esas notas
//Hacer un condicional que me diga si el promedio es 10 "felicitaciones es un alumno/a ejemplar"
//Si el promedio es mayor a 7 " promociono la materia"
//Si el promedio es mayor o igual a 4 " aprobo la materia"
//menor a 4 "desaprobo la materia"
//Agregarle un ciclo que me pregunte si deseo seguir ingresando notas
// HAGO UN CICLO POR CONTEO O POR CONDICIONES?? ESA ES LA GRAN PREGUNTA
let bandera = prompt("Desea comenzar? s/n")
let notaValida = false
function valida(nota) { 
    if (nota >0 && nota<=10) {
        notaValida = true
        console.log(nota)
        return nota

    } else {
        console.log (notaValida)
        console.log (`La nota ingresada ${nota} no es correcta, favor ingrese una nota entre 0 a 10`)
        return notaValida
        

    }
}

while (bandera.toLowerCase() == "s") {
    let nota1 = parseInt(prompt("Ingrese nota 1"))
        valida(nota1)
        console.log(notaValida)
    while (notaValida == false){
        let nota1 = parseInt(prompt("Ingrese nota 1"))
        valida(nota1)
    }
        let nota2 = parseInt(prompt("Ingrese nota 2"))
    valida(nota2)        
        let nota3 = parseInt(prompt("Ingrese nota 3"))
    valida(nota3)
        
    
        console.log(nota1, nota2, nota3)
        let totalNotas = nota1 + nota2 + nota3
        let promedioNotas = totalNotas / 3
        if (promedioNotas == 10) {
            console.log("Felicitaciones es un alumno/a ejemplar " + "Promedio " + promedioNotas)
        } else if (promedioNotas > 7) {
            console.log("Promociono la materia " + "Promedio " + promedioNotas)
        } else if (promedioNotas >= 4) {
            console.log("Aprobo la materia " + "Promedio " + promedioNotas)
        } else {
            console.log("Desaprobo la materia")
        }    
    
    
    bandera = prompt("Desea continuar: s/n")
}
console.log("Finalizo")

// La preentrega debe tener entrada, proceso y salida de datos. Tiene que haber cilcos, funciones y condicionales
