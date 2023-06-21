const persona = {}

persona.nombre = prompt("Ingrese su nombre")
persona.apellido = prompt("Ingrese su apellido")
console.log("Bienvenid@ " + persona.nombre + " " + persona.apellido)
alert("Bienvenid@ " + persona.nombre + " " + persona.apellido)

let productos = [
    { id: 1, nombre: "mate argentina campeon 1", color: "azul", precio: 5000 },
    { id: 2, nombre: "mate mundi", color: "blanco", precio: 3500 },
    { id: 3, nombre: "mate moli borgoña", color: "rosa", precio: 2000 },
    { id: 4, nombre: "mate moli", color: "blanco", precio: 2500 },
    { id: 5, nombre: "mate argentina campeon 2", color: "negro", precio: 5000 },
    { id: 6, nombre: "mate moli oliva", color: "verde", precio: 3200 },
]

let carrito = []
let seleccion = prompt("Hola! ¿Desea ver los productos para comprar?")

if (seleccion === "si") {
    alert("Lista de productos")
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio
    )
    alert(todoslosProductos.join("\n"))
} else if (seleccion === "no") {
    alert("Gracias por su visita, hasta pronto!")
}

let busquedaP = prompt("Ingrese producto que desea buscar")
const busqueda = productos.find((el) => el.nombre === busquedaP)

if (busqueda) {
    console.log(busqueda)
    alert(busqueda.nombre + " " + "$" + busqueda.precio)
}

let filtrarP = prompt("Ingrese color que desea")
const filtrar = productos.filter((el) => el.color === filtrarP)

if (filtrar.length > 0) {
    const nombresProductosFiltrados = filtrar.map((el) => el.nombre)
    console.log(filtrar)
    alert(`Los productos de color ${filtrarP} son: 
    ${nombresProductosFiltrados.join(', ')}`)

} else {
    alert(`No hay productos de color ${filtrarP}`)
}

let total = 0

while (seleccion !== "no") {
    let producto = prompt("Agrega un producto al carrito")
    let precio = 0

    switch (producto) {
        case "mate argentina campeon 1":
            precio = 5000;
            break;
        case "mate mundi":
            precio = 3500;
            break;
        case "mate moli borgoña":
            precio = 2000;
            break;
        case "mate moli":
            precio = 2500;
            break;
        case "mate argentina campeon 2":
            precio = 5000;
            break;
        case "mate moli oliva":
            precio = 3200;
            break;
        default:
            alert("Por el momento no contamos con ese producto");
            continue;
    }

    carrito.push({ producto, precio })
    console.log(carrito)

    seleccion = prompt("Desea seguir comprando?")

    if (seleccion === "no") {
        alert("Gracias por su visita!")
        const listaCarrito = carrito.reduce((acc, el) => acc += `${el.producto} - $${el.precio} \n`, "")
        alert("Productos que desea comprar: " + listaCarrito)
    }
    total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)

}
console.log(`Total: ${total}`)

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

for (const producto of productos) {
    console.log(producto.nombre)
}

console.log(productos)

let productosFiltrados = productos.filter((producto) => producto.precio < 3000)

for (const producto of productosFiltrados) {
    console.log(producto.precio)
}

let totall = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0)
console.log(total)