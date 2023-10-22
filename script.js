
const screen = document.getElementById('calc-input');
let currentInput = '';
let selectedOperator = '';
let previousNumber = '';
// Variables used for my calculator
document.querySelectorAll('.calc-grid button:not(#addition):not(#subtraction):not(#division):not(#multiply):not(#equals):not(#percentage)').forEach(function (button) {
    button.addEventListener('click', function () {
        currentInput += button.textContent;
        updateScreen(currentInput);
    });
});
// In order to have each button t
function updateScreen(value) {
    screen.value = value;
}
// created different functions based on operator I wanted to use in my calculator and each operator can be used when applying the .addEventListner to its corresponding button
document.getElementById('addition').addEventListener('click', function () {
    selectedOperator = '+';
    previousNumber = currentInput;
    currentInput = '';
});
document.getElementById('multiply').addEventListener('click', function () {
    selectedOperator = '*';
    previousNumber = currentInput;
    currentInput = '';
});
document.getElementById('subtraction').addEventListener('click', function () {
    selectedOperator = '-';
    previousNumber = currentInput;
    currentInput = '';
});
document.getElementById('division').addEventListener('click', function () {
    selectedOperator = '/';
    previousNumber = currentInput;
    currentInput = '';
});
document.getElementById('percentage').addEventListener('click', function () {
    selectedOperator = '%';
    previousNumber = currentInput;
    currentInput = '';
});


document.getElementById('equals').addEventListener('click', function () {
    calculate();
});

document.getElementById('clear').addEventListener('click', function () {
    clear();
});
//This is the major/important portion of my calculator and it basicially says that whichever selected operator take the current input and the previous number and apply that operator to it . I utilized if and else statements  
function calculate() {
    if (selectedOperator === '+') {
        currentInput = parseFloat(previousNumber) + parseFloat(currentInput);
    } else if (selectedOperator === '-') {
        currentInput = parseFloat(previousNumber) - parseFloat(currentInput);
    } else if (selectedOperator === '*') {
        currentInput = parseFloat(previousNumber) * parseFloat(currentInput);
    } else if (selectedOperator === '/') {
        if (parseFloat(currentInput) === 0) {
            currentInput = "Error";
        } else {
            currentInput = parseFloat(previousNumber) / parseFloat(currentInput);
        }
    } else if (selectedOperator === '%') {
        currentInput = parseFloat(previousNumber) / 100;
    } else {
        currentInput = "Error";
    }

    updateScreen(currentInput);
}

// this seperate function clears the calculator and from each variable and update the Screen to basicially nothing
function clear() {
    currentInput = '';
    selectedOperator = '';
    previousNumber = '';
    updateScreen(currentInput);
}

