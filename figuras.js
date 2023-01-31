function calcularCuadradoArea(lado) {
  return lado * lado;
}
console.log(calcularCuadradoArea(4));
function calcularCuadradoPerimetro(lado) {
  return lado * 4;
}
calcularCuadradoPerimetro(3);

const areaTriangulo = (altura, base) => (Number(base) * Number(altura)) / 2;
perimetroTriángulo = (ladoA, ladoB, base) =>
  Number(ladoA) + Number(ladoB) + Number(base);

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

// Aqui interactuamos con HTML "CUADRADO"
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = calcularCuadradoPerimetro(value);
  // alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = calcularCuadradoArea(value);
  // alert(area);

  const trianguloIsoceles = (ladoA, ladoB, ladoC) => {
    if (ladoA === undefined)
      return console.error("agregue los lados de un triangulo");
    if (typeof ladoA !== "number")
      return console.error("El valor del ladoA tiene que ser un NÚMERO");
    if (typeof ladoB !== "number")
      return console.error("El valor del ladoB tiene que ser un NÚMERO");
    if (typeof ladoC !== "number")
      return console.error("El valor del ladoC tiene que ser un NÚMERO");
    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      if (ladoA === ladoB) {
        let base = ladoC / 2;
        let altura = Math.sqrt(ladoB * ladoB - base * base).toFixed(2);
        return alert("la altura del triangulo es" + altura);
      }
      if (ladoC === ladoB) {
        let base = ladoC / 2;
        let altura = Math.sqrt(ladoC * ladoC - base * base).toFixed(2);
        return alert("la altura del triangulo es " + altura);
      }
      if (ladoA === ladoC) {
        let base = ladoB / 2;
        let altura = Math.toFixed(
          Math.sqrt(ladoA * ladoA - base * base)
        ).toFixed(2);
        return alert("la altura del triangulo es " + altura);
      }
    } else {
      alert("Este triangulo no es isoceles ");
    }
  };
  // trianguloIsoceles(3, 3, 4);
  // trianguloIsoceles();
  // trianguloIsoceles(3, 5, 10);
  // trianguloIsoceles("rata");
}
//Aqui interactuamos con HTML "TRIANGULO"
function calcularAreaTriangulo() {
  const Altura = document.getElementById("inputTrianguloaltura");
  const altura = Altura.value;
  const base = document.getElementById("inputTriangulobase1");
  const Base = base.value;
  const area = areaTriangulo(altura, Base);
  const aRea = document.getElementById("area");
  aRea.innerText = "el area del triángulo es " + area + " cm2";
}
function calcularPerimetroTriangulo() {
  const ladoA = document.getElementById("inputTrianguloladoA");
  const valorA = ladoA.value;
  const ladoB = document.getElementById("inputTrianguloladoB");
  const valorB = ladoB.value;
  const base = document.getElementById("inputTriangulobase");
  const valorBase = base.value;
  const perimetro = perimetroTriángulo(valorA, valorB, valorBase);
  const Perimetro = document.getElementById("perimetro");
  Perimetro.innerText = "El perimetro del triángulo es  " + perimetro + " cm";
}
