//Forma de declarar funciones palabra reservada function luego el nombre y parentesis. Por ahora los parentesis no llevan nada 
function pedirNombre(){
    let personaIngresada = prompt("Ingresar Nombre:")
    console.log (`Hola ${personaIngresada}`)
    mostrarNombre (personaIngresada)
}
// Para que se ejecute debemos llamarla / invocar la funcion, se puede invocar en cualquier parte del codigo
pedirNombre()
// El navegador lee primero las funciones y despues el resto del codigo por eso las funciones son ciudadanas de primer orden y se pueden invocar en cualquier momento. Por buena practica es mejor primero declararla y luego invocarla
// Notar que el parametro de las funciones puede variar, no necesariammente es el mimso
function mostrarNombre (nombre){
    console.log (`Hola ${nombre}`)
}
mostrarNombre ("Pablo")
mostrarNombre ("Victor")
mostrarNombre ("Lot")

function suma (num1,num2){
    console.log (`La suma es ${num1+num2}`)
}
suma (5,5)
function resta (num1,num2){
    console.log (`la resta es ${num1-num2}`)
}
resta (10,5)
// Buscar en los ejercicios anteriores donde se pueden hacer funciones, ejem funcion calcularPromedioDeGoles etc etc
// Para la preentrega debe hacer un flujo, entrada, proceso, salida.. se puede hacer un simulador para comprar x articulos, dar el total de articulos, precio de envio, hacer un menu de articulos, desea continuar? etc.. ver al final de la clase 4 la explicacion de la primera preentrega