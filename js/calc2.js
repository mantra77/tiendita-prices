const priceOfProduct = document.getElementById('price');
const quantityofProduct = document.getElementById('quantity');
const percentage = document.getElementById('percentage');
const exchangeRate = document.getElementById('exchange');
const calcBtn = document.getElementById('calc');
const resultBox = document.getElementById('result');

priceOfProduct.value = '';
quantityofProduct.value = '';
percentage.value = '';
exchangeRate.value = '';
const calc = () => {
  let result1 = (parseFloat(priceOfProduct.value) * 1000000) / quantityofProduct.value;
  let result2 = (result1 * percentage.value) / 100;
  let result3 = result1 + result2;
  let result = result3 / (parseFloat(exchangeRate.value) * 1000000);
  resultBox.innerHTML = result;
};

calcBtn.onclick = calc;

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
