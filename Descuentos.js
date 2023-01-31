const precioAPagar = 100,
  porcentajeDeDescuento = 30;

const totalADescuento = 100 - porcentajeDeDescuento,
  totalApagar = (precioAPagar * totalADescuento) / 100;
console.log(
  `Precio a pagar $${precioAPagar}\ndescuento de la compra${porcentajeDeDescuento}%\npagare solo el ${totalADescuento}% del producto\nAl final solo pague $${totalApagar}`
);

// Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.

// Déjame tu solución en los comentarios y luego, sí, evalúa mis 3 propuestas.

const arrDescuento = [10, 15, 20, 25, 30, 35];
const valorDsctRandom =
  arrDescuento[Math.floor(Math.random() * arrDescuento.length)];
const productos = [
  { producto: "Ace", precio: 4, objeto: "detargente" },
  { producto: "lomo fino", precio: 12, objeto: "carnes" },
  { producto: "blancaFlor", precio: 5, objeto: "azucar" },
  { producto: "samgsumg", precio: 1200, objeto: "televisor" },
];
const productosRandom = productos[Math.floor(Math.random() * productos.length)];

console.log(productosRandom);
// function cupon() {
//   const precioDelProducto = productosRandom.precio;
//   const descuento = 100 - valorDsctRandom;
//   const precioFinal = (descuento * precioDelProducto) / 100;
//   return console.log(
//     `el/la  ${productosRandom.objeto} de nombre ${productosRandom.producto}  con valor de ${productosRandom.precio}\nel descuento es ${valorDsctRandom}%\ny el precio final nos da ${precioFinal}$.`
//   );
// }
// // cupon();

//todos los  martes tenemos un 10% de descuento en detergentes
class Detergente {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  descuento() {
    const descuento = 100 - 10;
    const precioAPagar = (this.precio * descuento) / 100;
    return console.log(
      `el precio del producto ${this.nombre} es ${this.precio} pero con el descuento de los Martes pagas ${precioAPagar}`
    );
  }
}
const ariel = new Detergente("Ariel", 4);
const ace = new Detergente("Ace", 4.5);
const magiaBlanca = new Detergente("Magia blanca", 4);
const opal = new Detergente("Opal", 4);
const bolivar = new Detergente("bolivar", 5);
ariel.descuento();

const descuentoTotal = (totalPrecio, descuento) => {
  const porcentajeDescuento = 100 - descuento;
  const sumaAPagar = (totalPrecio * porcentajeDescuento) / 100;
  return sumaAPagar;
};
// descuentoTotal(300, 12);

function botonDeDescuentoAPagar() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;
  const precioConDescuento = descuentoTotal(priceValue, discountValue);
  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento es $" + precioConDescuento;
}

const cuponesDeDescuento = ["jorgeisGOD", "peropero", "mamitaquerida"];

function cuponesPrecio() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const nombresCupon = document.getElementById("inputCupon");
  const valorCupon = nombresCupon.value;

  let descuentoCupon;

  switch (valorCupon) {
    case cuponesDeDescuento[0]:
      descuentoCupon = 10;
      break;
    case cuponesDeDescuento[1]:
      descuentoCupon = 15;
      break;
    case cuponesDeDescuento[2]:
      descuentoCupon = 20;
      break;
  }

  const PrecioConCupon = descuentoTotal(priceValue, descuentoCupon);
  const ResultadoCupon = document.getElementById("resultadoCupon");
  ResultadoCupon.innerText = "el precio con el cupon es " + PrecioConCupon;
}
