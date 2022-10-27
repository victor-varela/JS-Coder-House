//OBJETOS
// Hay 3 formas de declarar objetos
// Primera: Objetos literales
const integrante1 = {
    //observar la estructura, = {}, propiedad : despues de cada valor va , coma ojo
    nombre: "Victor",
    edad: 37,
    rol: "Estudiante",
    ciudad: "Montevideo"
}
const integrante2 = {
    //observar la estructura, = {}, propiedad : despues de cada valor va , coma ojo
    nombre: "Gonzalo",
    edad: 37,
    rol: "Estudiante",
    ciudad: "Buenos Aires"
}
const integrante3 = {
    //observar la estructura, = {}, propiedad : despues de cada valor va , coma ojo
    nombre: "Fernanda",
    edad: 26,
    rol: "Estudiante",
    ciudad: "Montevideo"
}
const integrante4 = {
    //observar la estructura, = {}, propiedad : despues de cada valor va , coma ojo
    nombre: "Alex",
    edad: 17,
    rol: "Estudiante",
    ciudad: "Montevideo",
    gustoHelados : {
        gustoPrincipal: "Chocolate",
        gustoSecundario: "Mantecado"
    }
}
console.log (integrante1.ciudad)
console.log (integrante4.gustoHelados.gustoPrincipal)
console.log(integrante2)
console.log(integrante2.nombre)
// Se llaman literales porque se van declarando cada una de las propiedades / atributos del objeto

// Cambiar valores en un objeto incluse si ha declara el objeto con CONST
integrante1.ciudad = "Treinta y Tres"
console.log(integrante1.ciudad)

//Objetos Constructores. Es una funcion que permite crear objetos. POR CONVENCION el nombre de la funcion constructora o clases comienza con Mayuscula OJO

function Participante (nombre, edad, rol, ciudad){
    this.nombre = nombre,
    this.edad = edad,
    this.rol = rol,
    this.ciudad = ciudad,
    this.mostrarDatos = function(){ console.log(`Soy ${this.nombre} tengo ${this.edad} mi rol es ${this.rol} y vivo en ${this.ciudad}`)}, // Este ultimo atributo this.mostrarDatos en un METODO solo se aplica al objeto Participante, notar el this. en las variables. La funcion puede ser invocada CUANDO EL OBJETO SEA INSTANCIADO PREVIAMENTE, en este caso el objeto Participante, el cual se instancia como se ve en el siguiente comentario: const participante1 = new Participante (.........)
    this.duplicarEdad = function(){
        console.log(`La edad original es ${this.edad} pero ahora es `, this.edad = this.edad *2) 
    }
}

//INSTACIACION de Objetos// CREAR OBJETOS
const participante1 = new Participante ("Alejandro", 37, "Estudiante", "Montevideo")
console.log (participante1)
const participante2 = new Participante ("Sol", 50, "estudiante", "Maracay")
console.log(participante2)

//METODOS. se puede decir que un método es una función dentro de un objeto. Ver comentario dentro del objeto Participante

// Utilizacion de un metodo
participante1.mostrarDatos ()// notar que se invoca el objeto y luego "."nombre del METODO (mostrarDatos)+"()" de   esa forma se invoca el metodo que esta dentro del objeto participante y que ya fue previamente instanciado.
participante1.duplicarEdad()
participante1.duplicarEdad ()

//FOR IN una forma de declarar un ciclo for
//FOR IN RECORRE UN OBJETO PROPIEDAD A PROPIEDAD. En la sintaxys del For (desde, hasta, actualizacion) cambia, al ser un FOR IN y ahora se declara una variable cualquiera, en este caso la variable es la palabra prop de propiedad y luego el nombre del objeto el cual se va a recorrer propiedad/atributo por propiedad/atributo
for(let prop in integrante3){
    console.log(integrante3[prop])
}

for(const propiedad in participante1){
    console.log(participante1[propiedad])
}

//TERCERA FORMA DECLARAR OBJETOS: Es la mas usada actualmente.. usar esta forma!! la palabra constructor es reservada y hace lo mismo que la funcion constructora anterior
class Auto{
    //En el constructor atributos
    constructor(modelo, marca, cantPuerta){
        this.modelo =modelo,
        this.marca = marca, 
        this.cantidadPuertas = cantPuerta

    }
    //Métodos por separado:
    mostrarDatos(){
        console.log(`El modelo del auto ${this.modelo} tiene ${this.cantidadPuertas}`)
    }
}
let fitito = new Auto("600", "Fiat", 3)
console.log(fitito)
fitito.mostrarDatos()

class Libro{
    constructor(autor, titulo, precio){
        this.autor = autor,
        this.titulo = titulo,
        this.precio = precio
    }
    mostrarDataLibro(){
        
        console.log(`El autor es ${this.autor} su libro es ${this.titulo} y vale ${this.precio}`)
    }
}













function menu(){

    let opcion = prompt(`Ingrese su opcion deseada:
    1: -Libro favorito
    2: -Libro que desea comprar
    3:  Regalar libro
    ESC: para salir`);
    //Repetimos hasta que se ingresa "ESC"
    while(opcion != "ESC" ){
       switch (opcion) {
           case "1":
                prompt("Ingrese su libro favorito");
                break;
            case "2":
                prompt("Ingrese el libro que desea comprar y no tiene");
                break;
            case "3":
                prompt("Regalar libro")
                break;
           default:
               alert("OPCIÓN NO CONTEMPLADA")
               break;
       }
       opcion = prompt(`Ingrese su opcion deseada:
        1: Libro favorito
        2: Libro que desea comprar
        3: Regalar libro
        ESC: Para salir`);
    }
}

