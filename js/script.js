const precioBolivares = document.getElementById('price-calc');
const calcularPrecio = document.getElementById('calc-btn');
const resetValues = document.getElementById('reset-btn');
const priceVes = document.getElementById('price-ves-container');
const listPriceVes = document.getElementById('price-ves');
const spanPrice = document.getElementById('span-price');
const textPrice = document.getElementById('text-price');

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

const calcular2 = () => {
  for (var key in preciosDolares) {
    let parrafo = document.createElement('P');
    let precioOut = parseFloat(precioBolivares.value) * 1000000 * preciosDolares[key];
    parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
    listPriceVes.appendChild(parrafo);
    parrafo.classList.add('price-bolivares');
  }
  spanPrice.innerHTML = precioBolivares.value;
  textPrice.style.opacity = '1';
};

const reset = () => {
  listPriceVes.innerHTML = '';
  spanPrice.innerHTML = '';
  textPrice.style.opacity = '0';
  precioBolivares.value = '';
};

calcularPrecio.onclick = calcular2;
resetValues.onclick = reset;

// Jquery Dependency

$("input[data-type='currency']").on({
  keyup: function () {
    formatCurrency($(this));
  },
  blur: function () {
    formatCurrency($(this), 'blur');
  },
});
function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.

  // get input value
  let input_val = input.val();
  // don't validate empty input
  if (input_val === '') {
    return;
  }

  // check for decimal
  if (input_val.indexOf(',') >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    let decimal_pos = input_val.indexOf(',');

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);

    // join number by .
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);

    // final formatting
    if (blur === 'blur') {
      input_val += '';
    }
  }
  // send updated string to input
  input.val(input_val);
}
