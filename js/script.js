/* 
  todo Limpiar Lineas CSS sin usar.
  todo Actualizar estilos CSS de la calculadora 2
*/

const precioBolivares = document.getElementById('price-calc');
const calcularPrecio = document.getElementById('calc-btn');
const resetValues = document.getElementById('reset-btn');
const priceVes = document.getElementById('price-ves-container');
const spanPriceContainer = document.getElementById('span-price-container');
const spanPrice = document.getElementById('span-price');
const textPrice = document.getElementById('text-price');
const menuSection = document.getElementById('menu-section');

// Menu Buttons:
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');

// Selection of the multiple boxes for the prices
const priceList1 = document.getElementById('price-ves1');
const priceList2 = document.getElementById('price-ves2');
const priceList3 = document.getElementById('price-ves3');
const priceList4 = document.getElementById('price-ves4');
const priceList5 = document.getElementById('price-ves5');
const priceList6 = document.getElementById('price-ves6');
const priceList7 = document.getElementById('price-ves7');
const priceList8 = document.getElementById('price-ves8');
const priceList9 = document.getElementById('price-ves9');
const priceList10 = document.getElementById('price-ves10');
const priceList11 = document.getElementById('price-ves11');
const priceList12 = document.getElementById('price-ves12');
const priceList13 = document.getElementById('price-ves13');
const priceList14 = document.getElementById('price-ves14');
const priceList15 = document.getElementById('price-ves15');
const priceList16 = document.getElementById('price-ves16');

const price1 = { price1: [priceOil] };
const price2 = { price2: [priceRice] };
const price3 = { price3: [pricePersonalClean] };
const price4 = { price4: [priceSugar] };
const price5 = { price5: [priceCondiments] };
const price6 = { price6: [priceCoffee] };
const price7 = { price7: [priceCharcuteria] };
const price8 = { price8: [priceCandy] };
const price9 = { price9: [priceFlour] };
const price10 = { price10: [priceEggs] };
const price11 = { price11: [priceJuice] };
const price12 = { price12: [priceLact] };
const price13 = { price13: [pricePasta] };
const price14 = { price14: [priceFish] };
const price15 = { price15: [priceSalsa] };
const price16 = { price16: [priceOthers] };

const calcular = () => {
  let chars1 = price1['price1'];
  for (let i = 0, len = chars1.length; i < len; i++) {
    for (let prop in chars1[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars1[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList1.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars2 = price2['price2'];
  for (let i = 0, len = chars2.length; i < len; i++) {
    for (let prop in chars2[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars2[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList2.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars3 = price3['price3'];
  for (let i = 0, len = chars3.length; i < len; i++) {
    for (let prop in chars3[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars3[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList3.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars4 = price4['price4'];
  for (let i = 0, len = chars4.length; i < len; i++) {
    for (let prop in chars4[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars4[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList4.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars5 = price5['price5'];
  for (let i = 0, len = chars5.length; i < len; i++) {
    for (let prop in chars5[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars5[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList5.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars6 = price6['price6'];
  for (let i = 0, len = chars6.length; i < len; i++) {
    for (let prop in chars6[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars6[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList6.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars7 = price7['price7'];
  for (let i = 0, len = chars7.length; i < len; i++) {
    for (let prop in chars7[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars7[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList7.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars8 = price8['price8'];
  for (let i = 0, len = chars8.length; i < len; i++) {
    for (let prop in chars8[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars8[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList8.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars9 = price9['price9'];
  for (let i = 0, len = chars9.length; i < len; i++) {
    for (let prop in chars9[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars9[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList9.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars10 = price10['price10'];
  for (let i = 0, len = chars10.length; i < len; i++) {
    for (let prop in chars10[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars10[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList10.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars11 = price11['price11'];
  for (let i = 0, len = chars11.length; i < len; i++) {
    for (let prop in chars11[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars11[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList11.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars12 = price12['price12'];
  for (let i = 0, len = chars12.length; i < len; i++) {
    for (let prop in chars12[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars12[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList12.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars13 = price13['price13'];
  for (let i = 0, len = chars13.length; i < len; i++) {
    for (let prop in chars13[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars13[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList13.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars14 = price14['price14'];
  for (let i = 0, len = chars14.length; i < len; i++) {
    for (let prop in chars14[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars14[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList14.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  let chars15 = price15['price15'];
  for (let i = 0, len = chars15.length; i < len; i++) {
    for (let prop in chars15[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars15[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList15.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }
  let chars16 = price16['price16'];
  for (let i = 0, len = chars16.length; i < len; i++) {
    for (let prop in chars16[i]) {
      let parrafo = document.createElement('SPAN');
      let precioOut = parseFloat(precioBolivares.value) * 1000000 * chars16[i][prop];
      parrafo.innerHTML = precioOut.toLocaleString() + ' Bs';
      priceList16.appendChild(parrafo);
      parrafo.classList.add('price-bolivares');
    }
  }

  spanPriceContainer.style.visibility = 'visible';
  spanPrice.innerHTML = precioBolivares.value + ' Bs';
  textPrice.style.opacity = '1';
};
const reset = () => {
  priceList1.innerHTML = '';
  priceList2.innerHTML = '';
  priceList3.innerHTML = '';
  priceList4.innerHTML = '';
  priceList5.innerHTML = '';
  priceList6.innerHTML = '';
  priceList7.innerHTML = '';
  priceList8.innerHTML = '';
  priceList9.innerHTML = '';
  priceList10.innerHTML = '';
  priceList11.innerHTML = '';
  priceList12.innerHTML = '';
  priceList13.innerHTML = '';
  priceList14.innerHTML = '';
  priceList15.innerHTML = '';
  priceList16.innerHTML = '';
  spanPrice.innerHTML = '';
  textPrice.style.opacity = '0';
  precioBolivares.value = '';
  spanPriceContainer.style.visibility = 'hidden';
};

const openMenu = () => {
  menuSection.style.left = '45vw';
  menuSection.style.visibility = 'visible';
};
const closeMenu = () => {
  menuSection.style.left = '100vw';
  menuSection.style.visibility = 'hidden';
};

//Calculation click functions
calcularPrecio.onclick = calcular;
resetValues.onclick = reset;

//Menu buttons functions
openMenuBtn.onclick = openMenu;
closeMenuBtn.onclick = closeMenu;

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
