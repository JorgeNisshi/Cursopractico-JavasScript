function calcularCuadradoArea(lado) {
  return lado * lado;
}
console.log(calcularCuadradoArea(4));
function calcularCuadradoPerimetro(lado) {
  return lado * 4;
}
calcularCuadradoPerimetro(3);

const areaTriangulo = (altura, base) => (base * altura) / 2,
  perimetroTriángulo = (ladoA, ladoB, base) => ladoA + ladoB + base;

//tarea
function alturatrianguloisoceles(
  base = undefined,
  ladoA = undefined,
  ladoB = undefined
) {
  if (ladoA !== ladoB) return console.error("No es un triangulo isoceles");
  let basemedio = base / 2;
  let altura = Math.round(Math.sqrt(ladoA * ladoB - basemedio * basemedio));
  return altura;
}
alturatrianguloisoceles(4, 6, 6);

console.group("Círculo");
const areaCirculo = (radio) => radio * radio * Math.PI.toFixed(4);
const perimetroCirculo = (radio) => radio * 2 * Math.PI.toFixed(4);

console.groupEnd("Círculo");

const diametroCirculo = (radio) => radio * 2;
const areaTotaLCirculo = (radio) => {
  let diametro = diametroCirculo(radio);
  return diametro * Math.PI.toFixed(4);
};

console.log("el aréa total es de " + areaTotaLCirculo(4) + "cm2");

const exponente = (radio) => Math.PI * radio ** 2;

// Aqui interactuamos con HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = calcularCuadradoPerimetro(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = calcularCuadradoArea(value);
  alert(area);
}

function vet1() {
  const input = document.getElementById();
}
