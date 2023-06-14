/* function pedirDato(texto) {
    let dato = prompt(texto)
    return dato
}

let nombre = pedirDato("Ingrese su nombre")
let apellido = pedirDato("Ingrese su apellido")

alert("Bienvenid@ " + nombre + " " + apellido)
 */

//esto va a reemplazar la manera de arriba de pedir nombre y apellido
/* const persona = {}

persona.nombre = prompt("Ingrese su nombre")
persona.apellido = prompt("Ingrese su apellido")
console.log("Bienvenid@ " + persona.nombre + " " + persona.apellido)
alert("Bienvenid@ " + persona.nombre + " " + persona.apellido)
 */

/* 

let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos:"));
let listaProductos = "";

for (let i = 0; i < cantidadProductos; i++) {
    let producto = prompt("Ingrese el nombre del producto " + (i + 1));
    let precio = parseFloat(prompt("Ingrese el precio del producto " + (i + 1)));

    listaProductos += producto + " - $" + precio + "\n";
}

alert("Lista de productos:\n" + listaProductos);

function calcularTotal(importe, iva) {
    return importe + importe * (iva / 100)
}

let importe = Number(prompt("Ingrese importe para conocer precio final"))
let iva = Number(21)
console.log(calcularTotal(importe, iva))

alert("El precio final es " + calcularTotal(importe, iva))

let mensaje = Number(prompt("Para conocer descuentos y cuotas presione\n 1 VISA\n 2 MASTER\n 3 AMERICAN\n 0 para salir"))

do {
    if (mensaje === 1) {
        alert("Tenes 10% off en todos los productos y 3 cuotas sin interes")
    } else if (mensaje === 2) {
        alert("Tenes 15% off en todos los productos y 6 cuotas sin interes")
    } else if (mensaje === 3) {
        alert("Tenes 20% off en todos los productos y 12 cuotas sin interes")
    }
} while (mensaje == 0);

let codigoPostal = Number(prompt("Ingrese su codigo postal para conocer el costo de envio"))

if (!isNaN(codigoPostal)) {
    if (codigoPostal < 1000) {
        console.log("El costo de envio es de $500")
        alert("El costo de envio es de $500")

    } else if (codigoPostal < 3000) {
        console.log("El costo de envio es de 1000")
        alert("El costo de envio es de $1000")

    } else if (codigoPostal < 5000) {
        console.log("El costo de envio es de $1500")
        alert("El costo de envio es de $1500")

    } else if (codigoPostal < 7000) {
        console.log("El costo de envio es de $2000")
        alert("El costo de envio es de $2000")

    } else {
        console.log("El costo de envio es de $3500")
        alert("El costo de envio es de $3500")
    }
} else {
    console.log("Error")
    alert("El numero es incorrecto, por favor vuelva a ingresar su codigo postal")
}
 */
/* 
ej cargar array con entrada
const listaNombres = []
let cantidad = 5

do {
    let entrada = prompt("Ingrese nombre del producto")
    listaNombres.push(entrada.toUpperCase())
    console.log(listaNombres.length)
    
} while (listaNombres.length != cantidad);

const nuevaLista = listaNombres.concat[(ana)]
alert(nuevaLista.join("\n")) */

let productos = [
    { id: 1, nombre: "Mate Argentina Campeon Az", precio: 5000 },
    { id: 2, nombre: "Mate Mundi", precio: 3500 },
    { id: 3, nombre: "Mate Moli Borgoña", precio: 2000 },
    { id: 4, nombre: "Mate Moli Blanco", precio: 2500 },
    { id: 5, nombre: "Mate Argentina Campeon Ng", precio: 5000 },
    { id: 6, nombre: "Mate Moli Vd Oliva", precio: 3200 },
]

let carrito = []

let seleccion = prompt("Hola! ¿Desea ver los productos para comprar?")

// while (seleccion != "si" && seleccion != "no") {
//     alert("Hola! ¿Desea ver los productos para comprar?")
//     seleccion = prompt("Hola! ¿Desea ver los productos para comprar?")
// }

if (seleccion === "si") {
    alert("lista de productos")
    let todoslosProductos = productos.map(
        (productos) => productos.nombre + " " + "$" + productos.precio
    )
    alert(todoslosProductos.join("\n"))
} else if (seleccion === "no") {
    alert("Gracias por su visita, hasta pronto!")
}

while (seleccion != "no") {
    let producto = prompt("Agrega un producto al carrito")
    let precio = 0

    if (producto == "Mate Argentina Campeon Az" || "Mate Mundi" || "Mate Moli Borgoña" || "Mate Moli Blanco" || "Mate Argentina Campeon Ng" || "Mate Moli Vd Oliva") {
        switch (productos) {
            case "Mate Argentina Campeon Az":
                precio = 5000
                break;
            case "Mate Mundi":
                precio = 3500
                break;
            case "Mate Moli Borgoña":
                precio = 2000
                break;
            case "Mate Moli Blanco":
                precio = 2500
                break;
            case "Mate Argentina Campeon Ng":
                precio = 5000
                break;
            case "Mate Moli Vd Oliva":
                precio = 3200
                break;
            default:
                break;
        }
        carrito.push({ producto, precio })
        console.log(carrito)
    } else {
        alert("Por el momento no contamos con ese producto")
    }
    seleccion = prompt("Desea seguir comprando?")

    while (seleccion === "no") {
        alert("Gracias por su compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, precio: ${carritoFinal.precio}`)
        })
        break;
    }
}

const totalFinal = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)
console.log(totalFinal)



/* 
for (const producto of productos) {
    console.log(producto.nombre)   
}

console.log(productos)

 */
/* let productosFiltrados = productos.filter((producto) => producto.precio < 3000)

for (const producto of productosFiltrados) {
    console.log(producto.precio)
}
 */
let total = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0)
console.log(total)