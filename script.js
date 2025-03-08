`use strict`;

// const buttonSubmit = document.querySelector('.submit__button');
const inputQuantity = document.getElementById('quantity');
const total = document.getElementById('total');

console.log(inputQuantity.value);
function calcTotal() {
  total.value = 250 * +inputQuantity.value;
}
inputQuantity.addEventListener('change', calcTotal);
