function descuento(precio, descuento) {
  const restaDescuentos = 100 - descuento;
  const valorAPagar = (restaDescuentos * precio) / 100;
  return valorAPagar;
}

let cupones = ["luchito", "Pet", "taza"];
function DescuentoTrasdescuento() {
  const inputPrice = document.getElementById("inputPrice");
  const valorPrice = inputPrice.value;
  const inputCupon = document.getElementById("inputCupon");
  const valueCupon = inputCupon.value;
  const inputDescuento = document.getElementById("inputDescuento");
  const valueDescuento = inputDescuento.value;
  let descuentoCupon;
  switch (valueCupon) {
    case cupones[0]:
      descuentoCupon = 10;

      break;
    case cupones[1]:
      descuentoCupon = 15;
      break;
    case cupones[2]:
      descuentoCupon = 20;
      break;
  }
  console.log(valueDescuento);
  const queDescuentoUtilizar = () => {
    if (valueDescuento === null) {
      return descuento(valorPrice, descuentoCupon);
    }
    if (!valorPrice) {
      return alert("No hay Precio");
    }
    if (valueCupon == "") {
      return descuento(valorPrice, valueDescuento);
    }
    if (true) {
      const sumaDeDescuento = descuento(
        descuento(valorPrice, valueDescuento),
        descuentoCupon
      );
      return sumaDeDescuento;
    }
  };
  const resultado = document.getElementById("resultado");
  resultado.innerText = "el descuento es " + queDescuentoUtilizar;
}

const coupons = [
  {
    name: "JuanDC_es_Batman",
    discount: 15,
  },
  {
    name: "pero_no_le_digas_a_nadie",
    discount: 30,
  },
  {
    name: "es_un_secreto",
    discount: 25,
  },
];
//esta variable lo que va hacer es
const isCouponValueValid = function (coupon) {
  return coupon.name === couponValue; //juanDc es batman
};
const cuponValido = (cupon) => cupon === couponValue;

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
  alert("El cupón " + couponValue + "no es válido");
} else {
  const descuento = userCoupon.discount;
  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

const losChichos = [
  { nombre: "jorge", edad: 26 },
  { nombre: "luis", edad: 28 },
  { nombre: "josue", edad: 26 },
];
function esJorge(datos) {
  return datos.nombre === "pepito";
}
console.log(losChichos.find(esJorge));

const vasito = {
  lion: "leon",
  basija: "CAra",
  color: "amarillo",
};
