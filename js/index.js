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
const toggleContainer = document.querySelector('.input-selections');
const themeSelect = document.querySelector('.theme-selection');
const header = document.querySelector('.header');
const deleteNum = document.getElementById('delete');
const calculatorDisplay = document.querySelector('.calculator-display');

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
    if (display.value === '') {
      display.value = '0';
    }
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
    if (display.value === '') {
      display.value = '0';
    }
    display.value = eval(display.value);
  }
});

// function set theme
let currentNumber = 1;
const toggleSwitchHandler = () => {
  if (currentNumber === 1) {
    currentNumber += 1;
    setTheme(currentNumber);
  } else if (currentNumber === 2) {
    currentNumber += 1;
    setTheme(currentNumber);
  } else if (currentNumber === 3) {
    currentNumber = 1;
    setTheme(currentNumber);
  }
};

toggleSwitchHandler();

function setTheme(number) {
  document.documentElement.setAttribute('data-theme', number);
  const items = [header, calculatorDisplay];
  if (currentNumber === 1) {
    items.forEach(item => {
      item.style.setProperty('var(--text-color--1)', 'var(--text-color--2');
    });
  } else {
    items.forEach(item => {
      item.style.removeProperty('var(--text-color--1)');
    });
  }
  if (currentNumber === 3) {
    equals.style.setProperty('var(--text-color--2)', 'var(--text-color--3');
  } else {
    equals.style.removeProperty('var(--text-color--2)');
  }
}

themeInput.forEach((input, index) => {
  input.addEventListener('change', () => {
    setTheme(index + 1);
  });
});

window.addEventListener('load', () => {
  themeInput[1].checked = true;
});
