const precioBolivares = document.getElementById('price-calc');
const calcularPrecio = document.getElementById('calc-btn');
const resetValues = document.getElementById('reset-btn');
const priceVes = document.getElementById('price-ves-container');
const listPriceVes = document.getElementById('price-ves');
// const preciosArray = [2.1, 1, 1.1, 1, 0.8, 0.5];

const preciosDolares = {
  Aceite_Soya: 2.1,
  Arroz_Emi: 1,
  Arroz_Palacio: 1.1,
  Atun: 1,
  Azucar: 0.8,
  Bombillos: 0.5,
  Cafe_Madrid_500: 2.7,
  Carton_de_Huevos: 3.5,
  Chimo: 0.4,
  Condimentos: 0.4,
  Crema_dental_Alident: 0.7,
  Crema_dental_Colgate: 0.8,
  Desodorante: 0.5,
  Fructus: 0.3,
  Harina_Dona_Belen: 1.1,
  Harina_Dona_Gema: 1,
  Harina_Levudante: 1.3,
  Harina_pan: 1.3,
  Hojillas_Schick: 0.3,
  Hojillas_Schick_cu: 0.1,
  Jabon_Azul: 0.6,
  Jabon_de_Olor: 0.5,
  Konga: 0.5,
  Leche_DoBon: 1.3,
  Mantequilla_Adorita: 0.7,
  Mantequilla_Estancia: 1.2,
  Mayonesa_445gr: 1.7,
  Mayonesa_Mavesa: 1.3,
  Mortadela: 2,
  Papel_Higienico_Rosal_paquete: 1,
  Papel_Higienico_Rosal_cu: 0.3,
  Pasta_1kg_Larga_y_Corta: 1.3,
  Pasta_500gr_Larga_y_Corta: 0.7,
  Pasta_Venecia: 1.2,
  Pega_loca: 0.5,
  Pilas_CU: 0.4,
  Pilas_paquete: 0.9,
  Sal: 0.3,
  Salchichas: 1.7,
  Salsa_de_ajo: 0.9,
  Salsa_de_Pasta: 0.8,
  Salsa_de_tomate: 1,
  Salsa_Inglesa: 0.9,
  Salsa_Soya: 0.9,
  Sardinas: 0.9,
  Shampoo: 0.4,
  Sopa_Maggi: 1,
  Tabaco: 0.3,
  Velas: 0.3,
  Vinagre: 0.9,
  Yesquero: 0.5,
};

// const calcular = () => {
//   for (let i = 0; i < preciosArray.length; i++) {
//     let parrafo = document.createElement('P');
//     let precioOut = precioBolivares.value * preciosArray[i];
//     parrafo.innerHTML = precioOut.toLocaleString();
//     listPriceVes.appendChild(parrafo);
//     parrafo.classList.add('price-bolivares');
//   }
// };
const calcular2 = () => {
  for (var key in preciosDolares) {
    let parrafo = document.createElement('P');
    let precioOut = precioBolivares.value * preciosDolares[key];
    parrafo.innerHTML = precioOut.toLocaleString();
    listPriceVes.appendChild(parrafo);
    parrafo.classList.add('price-bolivares');
    console.log(precioBolivares.value.toLocaleString() * preciosDolares[key]);
  }
};

const reset = () => {
  listPriceVes.innerHTML = '';
};

calcularPrecio.onclick = calcular2;
resetValues.onclick = reset;
