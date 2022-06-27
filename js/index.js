'use script';

// Set up global variables
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const reset = document.getElementById('reset');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const decimal = document.getElementById('decimal');
const backspace = document.getElementById('backspace');
const plusMinus = document.getElementById('plusMinus');
const percent = document.getElementById('percent');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
const equals = document.getElementById('equals');
const active = document.querySelector('.active');
const themeInput = document.querySelectorAll('.input-selections > input');
console.log(themeInput);

// Set up event listeners

// Disabled the toggle Input Mode button
document.body.addEventListener('mousemove', () => {
  display.toggleAttribute('disabled');
});
document.body.addEventListener('keydown', e => {
  e.preventDefault();

  if (!isNaN(e.key)) {
    display.value += Number(e.key);
  }

  if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }

  if (e.key === 'Enter') {
    display.value = eval(display.value);
  }

  if (e.key === 'Delete') {
    display.value = '';
  }

  if (e.keyCode === 32) {
    display.value = display.value.slice(0, -1);
  }

  if (e.key === '+') {
    display.value += '+';
  }
  if (e.key === '-') {
    display.value += '-';
  }
  if (e.key === '*') {
    display.value += '*';
  }
  if (e.key === '/') {
    display.value += '/';
  }
  if (e.key === '%') {
    display.value += '%';
  }
  if (e.key === '.') {
    display.value += '.';
  }
  if (e.key === '=') {
    display.value = eval(display.value);
  }
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('number')) {
    display.value += e.target.innerText;
  }
  if (e.target.classList.contains('operator')) {
    display.value += e.target.innerText;
  }

  if (e.target.id === 'reset') {
    display.value = '';
  }

  if (e.target.id === 'delete') {
    display.value = display.value.slice(0, -1);
  }
  if (e.target.id === 'decimal') {
    display.value += '.';
  }
  if (e.target.id === 'equals') {
    display.value = eval(display.value);
  }
});

themeInput.forEach((input, index) => {
  input.addEventListener('change', () => {
    if (input === themeInput[0]) {
      document.body.style = 'none';
    }
    if (input === themeInput[1]) {
      document.body.style.cssText =
        'background-color: var(--color-background-light-2) ;';
    } else if (input === themeInput[2]) {
      document.body.style.backgroundColor = 'red';
    } else {
      return;
    }
  });
});

window.addEventListener('load', () => {
  themeInput[0].checked = true;
});
