const resultDisplay = document.getElementById('result');
let currentValue = '';
let previousValue = '';
let operator = '';

function updateDisplay(value) {
  resultDisplay.value = value;
}

function handleNumber(number) {
  if (currentValue === '0') {
    currentValue = number;
  } else {
    currentValue += number;
  }
  updateDisplay(currentValue);
}

function handleOperator(op) {
  if (operator !== '') {
    calculate();
  }
  previousValue = currentValue;
  currentValue = '';
  operator = op;
}

function handleEqual() {
  calculate();
  previousValue = '';
  operator = '';
}