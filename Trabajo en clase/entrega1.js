//Hacer un simulador de un ecommerce. Que permita elegir 3 productos, evaluar si tiene descuentos, discriminar impuestos y mostrarlos, pago en cuotas segun el tipo de tarjeta. Se muestra menu de productos y al seleccionarlos le muestra el precio. Al final muestra el total a pagar (incluye pago en cuotas) + forma de entrega + tiempo estimado.
//Tienda de Mochilas, Botellas de Agua, Tazas de Cafe
//Hacer menu- Seleccione el articulo o esc para salir

//Declaramos los productos y constantes
let devBag = (`Dev BagPack 
            Precio: usd 40
            medidas: 10 x3
            Costo Envio: usd 5`)
const precioDevBag = 40

let gymBag = (`Gym BagPack 
            Precio: usd 45
            medidas: 10 x3
            Costo Envio: usd 5`)
const precioGymBag = 45

let riderBag = (`Rider BagPack 
            Precio: usd 50
            medidas: 10 x3
            Costo Envio: usd 5`)
const precioRiderBag = 50

const envio = 5

function volver(){
    atras = true
    return atras
}
let atras = false
// Comienza la iteraccion

let bandera = true
while (bandera == true) {
    let opcion = prompt(`Ingrese la opcion del producto de su interes:
      1: Mochilas 
      2: Botellas de Agua 
      3: Tazas de cafe
      4: Salir`)
    switch (opcion) {//Menu principal
        case "1": {
            let subseleccion = prompt(`Ingrese la opcion de mochila para ver su descripcion:
            1: Dev BagPack
            2: Gym BackPack
            3: Rider BackPack
            4: Volver`)
            switch (subseleccion) {
                //Dev BagPack
                case "1": {
                    let continuar = prompt(`Ideal para llevar notebook con estilo, confort y seguridad
                    Precio: usd 40
                    medidas: 10 x3
                    Costo Envio: usd 5
                    Desea avanzar en la compra? S/N`)
                    if (continuar.toLocaleLowerCase() == "s") {
                        console.log(`Usted ha seleccionado ${devBag}`)
                        let pago = prompt(`Por favor elija su forma de pago
                         1: Credito
                         2: Contado`)
                        if (pago == 1) {
                            let cuotas = parseInt(prompt(`Ingrese la cantidad de cuotas: 
                            3  cuotas
                            6  cuotas
                            12 cuotas`))
                            if (cuotas == 3) {
                                cuotas = 3
                            } else if (cuotas == 6) {
                                cuotas = 6
                            } else if (cuotas == 12) {
                                cuotas = 12
                            }
                            let entrega = parseInt(prompt(`Ingrese la forma de entrega
                            1: Envio
                            2: Retiro`))
                            if (entrega == 1) {
                                let direccion = prompt(`Ingrese la direccion de su domicilio:`)
                                console.log(`El total a pagar es usd ${precioDevBag}
                              en ${cuotas} cuotas de usd ${precioDevBag / cuotas}.
                              El costo de envio es de usd ${envio} el cual debe ser abonado al momento de recibir el producto.
                              su pedido sera enviado a ${direccion} en los proximos 2 dias habiles
                              `)
                            } else {
                                console.log(`El total a pagar es usd ${precioDevBag}
                              en ${cuotas} cuotas de usd${precioDevBag / cuotas}
                              su pedido puede ser retirado de lunes a viernes de 9 a 18 hs en nuestro local Av Siempre Viva 142
                              `)
                            }
                            // hacer los calculos y mostrar la seleccion. Hacer un carrito para permitir comprar otras cosas.

                        } else {
                            let entrega = parseInt(prompt(`Ingrese la forma de entrega
                            1: Envio
                            2: Retiro`))
                            if (entrega == 1) {
                                let direccion = prompt(`Ingrese la direccion de su domicilio:`)
                                console.log(`El total a pagar es  usd ${precioDevBag}. El costo de envio es de ${envio} el cual debe ser abonado al momento de recibir el producto.
                              Su pedido sera enviado a ${direccion} en los proximos 2 dias habiles
                              `)
                            } else {
                                console.log(`El total a pagar es ${precioDevBag}.
                              Su pedido puede ser retirado de lunes a viernes de 9 a 18 hs en nuestro local Av Siempre Viva 142
                              `)
                            }

                        }
                    }
                break;    //Gym BagPack
                } case "2": {
                    let continuar = prompt(`LLeva todo lo que necesites para entrenar con comodidad. Resistente y versatil
                    Precio: usd 45
                    medidas: 10 x3
                    Costo Envio: usd 5
                    Desea avanzar en la compra? S/N`)
                    if (continuar.toLocaleLowerCase() == "s") {
                        console.log(`Usted ha seleccionado ${gymBag}`)
                        let pago = prompt(`Por favor elija su forma de pago
                         1: Credito
                         2: Contado`)
                        if (pago == 1) {
                            let cuotas = parseInt(prompt(`Ingrese la cantidad de cuotas: 
                            3  cuotas
                            6  cuotas
                            12 cuotas`))
                            if (cuotas == 3) {
                                cuotas = 3
                            } else if (cuotas == 6) {
                                cuotas = 6
                            } else if (cuotas == 12) {
                                cuotas = 12
                            }
                            let entrega = parseInt(prompt(`Ingrese la forma de entrega
                            1: Envio
                            2: Retiro`))
                            if (entrega == 1) {
                                let direccion = prompt(`Ingrese la direccion de su domicilio:`)
                                console.log(`El total a pagar es usd ${precioGymBag}
                              en ${cuotas} cuotas de usd ${precioGymBag / cuotas}.
                              El costo de envio es de usd ${envio} el cual debe ser abonado al momento de recibir el producto.
                              su pedido sera enviado a ${direccion} en los proximos 2 dias habiles
                              `)
                            } else {
                                console.log(`El total a pagar es usd ${precioGymBag}
                              en ${cuotas} cuotas de usd${precioGymBag / cuotas}
                              su pedido puede ser retirado de lunes a viernes de 9 a 18 hs en nuestro local Av Siempre Viva 142
                              `)
                            }
                            // hacer los calculos y mostrar la seleccion. Hacer un carrito para permitir comprar otras cosas.

                        } else {
                            let entrega = parseInt(prompt(`Ingrese la forma de entrega
                            1: Envio
                            2: Retiro`))
                            if (entrega == 1) {
                                let direccion = prompt(`Ingrese la direccion de su domicilio:`)
                                console.log(`El total a pagar es  usd ${precioGymBag}. El costo de envio es de ${envio} el cual debe ser abonado al momento de recibir el producto.
                              Su pedido sera enviado a ${direccion} en los proximos 2 dias habiles
                              `)
                            } else {
                                console.log(`El total a pagar es ${precioGymBag}.
                              Su pedido puede ser retirado de lunes a viernes de 9 a 18 hs en nuestro local Av Siempre Viva 142
                              `)
                            }

                        }
                    }
                break;    //Rider BagPack
                } case "3": {
                    let continuar = prompt(`Tu compañera perfecta para la bici, moto o scooter. 
                    Precio: usd 50
                    medidas: 10 x3
                    Costo Envio: usd 5
                    Desea avanzar en la compra? S/N`)
                    if (continuar.toLocaleLowerCase() == "s") {
                        console.log(`Usted ha seleccionado ${riderBag}`)
                        let pago = prompt(`Por favor elija su forma de pago
                         1: Credito
                         2: Contado`)
                        if (pago == 1) {
                            let cuotas = parseInt(prompt(`Ingrese la cantidad de cuotas: 
                            3  cuotas
                            6  cuotas
                            12 cuotas`))
                            if (cuotas == 3) {
                                cuotas = 3
                            } else if (cuotas == 6) {
                                cuotas = 6
                            } else if (cuotas == 12) {
                                cuotas = 12
                            }
                            let entrega = parseInt(prompt(`Ingrese la forma de entrega
                            1: Envio
                            2: Retiro`))
                            if (entrega == 1) {
                                let direccion = prompt(`Ingrese la direccion de su domicilio:`)
                                console.log(`El total a pagar es usd ${precioRiderBag}
                              en ${cuotas} cuotas de usd ${precioRiderBag / cuotas}.
                              El costo de envio es de usd ${envio} el cual debe ser abonado al momento de recibir el producto.
                              su pedido sera enviado a ${direccion} en los proximos 2 dias habiles
                              `)
                            } else {
                                console.log(`El total a pagar es usd ${precioRiderBag}
                              en ${cuotas} cuotas de usd${precioRiderBag / cuotas}
                              su pedido puede ser retirado de lunes a viernes de 9 a 18 hs en nuestro local Av Siempre Viva 142
                              `)
                            }
                            // hacer los calculos y mostrar la seleccion. Hacer un carrito para permitir comprar otras cosas.

                        } else {
                            let entrega = parseInt(prompt(`Ingrese la forma de entrega
                            1: Envio
                            2: Retiro`))
                            if (entrega == 1) {
                                let direccion = prompt(`Ingrese la direccion de su domicilio:`)
                                console.log(`El total a pagar es  usd ${precioRiderBag}. El costo de envio es de ${envio} el cual debe ser abonado al momento de recibir el producto.
                              Su pedido sera enviado a ${direccion} en los proximos 2 dias habiles
                              `)
                            } else {
                                console.log(`El total a pagar es ${precioRiderBag}.
                              Su pedido puede ser retirado de lunes a viernes de 9 a 18 hs en nuestro local Av Siempre Viva 142
                              `)
                            }

                        }
                    }

                } break;
                //Volver
                case "4": {
                volver()
                console.log(atras)
                }
            }
        }
        case "2": {//Botellas de agua

        }
        case "3": {//Tazas de cafe

        }
        case "4": {//Salir

        }
    }
     if (atras == false){
        let pregunta = prompt(`Desea continuar comprando s/n`)
    if (pregunta.toLowerCase() == "s") {
        bandera = true
    } else {
        bandera = false
    }
     }else if (atras == true) {
        atras = false
        bandera = true
     }  
}
