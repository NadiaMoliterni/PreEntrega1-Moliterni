function pedirDato(texto) {
    let dato = prompt(texto)
    return dato
}

let nombre = pedirDato("Ingrese su nombre")
let apellido = pedirDato("Ingrese su apellido")

alert("Bienvenid@ " + nombre + " " + apellido)

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
