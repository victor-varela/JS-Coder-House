console.log ("primera linea")
alert ("Bienvenidos")

// Var no se usa. Let si.
let editorial
console.log (editorial)
editorial = "Gredos"
console.log (editorial)
// las Const tienen que inicializarse si o si
const cantidadPagina = 210
console.log (cantidadPagina)
//Tipos de Datos:
//Lenguaje de tipado debil: no tengo que aclarar el tipo de dato
//Number:
let numero = 5
console.log (numero)
//String:
let cadenaTexto = "hola, buenas noches"
console.log (cadenaTexto)
//Booleano
let booleano = false
console.log (booleano)

//Operaciones Basicas
let num1 = 8
let num2 = 5
const num3 = 2
let suma = 6+7
console.log (suma)
let suma2 = num1 + num2
console.log (suma2)
let suma3 = suma + num3
console.log (suma3)

let restar = num1 - num3
console.log (restar)
let mult = num2 * num3
console.log (mult)
console.log(mult * num3) 
// Concatenar

let cadena1 = "Coder"
let cadena2 = "House"
console.log (cadena1 +" "+ cadena2)

// NaN es not a number, cuando en una operacion tenemos string y numeros
console.log (num1 / cadena1)

//Prompt, es un cartel de entrada. Alert es un cartel de salida
let nombreIngresado = prompt ("Ingrese su Nombre")
let apellidoIngresado = prompt ("Ingrese su Apellido")
alert ("El nombre ingresado es \n "  + nombreIngresado +" "+  apellidoIngresado)
let numero1 = parseInt (prompt ("Ingrese numero 1")) 
let numero2 = parseInt (prompt ("ingrese numero 2")) 
let sumatoria = numero1 + numero2
alert ("El resultado de la suma es \n"+ sumatoria)
// Ejercicios
alert ("Ahora vamos a Restar")
let restar1 = parseInt (prompt ("Ingrese numero 1")) 
let restar2 = parseInt (prompt ("ingrese numero 2"))
let resta = restar1 - restar2
console.log (resta)
alert ("El resultado de la resta es \n"+ resta)
alert ("Que te parece una division?")
let div1 = parseInt (prompt("Ingrese numero 1"))
let div2 = parseInt (prompt("Ingrese numero 2"))
let division =  div1 / div2
alert ("El resultado de la division es \n"+ division)
alert ("Solo falta multiplicar")
let mul1 = parseInt (prompt("Ingrese numero 1"))
let mul2 = parseInt (prompt("Ingrese numero 2"))
let multiplicacion = mul1 * mul2
alert ("El resultado de la multiplicacion es \n"+ multiplicacion)

//Pidan usuario ingrese cantidad goles de un jugador/a, cantidad de partidos y saque el promedio de gol

//Usuario ingresa tres notas del 1 al 10 y sacamos el total y el promedio de esas notas
let cantGoles = parseInt (prompt("Ingrese la cantidad de goles"))
let cantPartidos = parseInt (prompt("Ingrese la cantidad de partidos jugados"))
alert ("El promedio de goles es "+ cantGoles/cantPartidos)