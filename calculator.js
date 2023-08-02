const displayScreen = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('=');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');

let displayArr = [];

let operator = undefined;
let displayValue = 0;
let currentNumber = 0;
let prevNumber = undefined;

let result = undefined;

function add(...numbers) {
    let result = numbers.reduce((sum, current) => sum + current, 0);
    return result;
}

function subtract(...numbers) {
    let result = numbers.reduce((acc, current) => acc - current);
    return result;
}

function multiply(...numbers) {
    let result = numbers.reduce((acc, current) => acc * current);
    return result;
}

function divide(...numbers) {
    let result = numbers.reduce((acc, current) => acc / current);
    return result;
}

function operate(operator, prev, current) {
    let result;
    switch (operator) {
        case "+":
            result = add(prev, current);
            break;
        case "-":
            result = subtract(prev, current);
            break;
        case "x":
            result = multiply(prev, current);
            break;
        case "/":
            result = divide(prev, current);
            break;
    }
    return result;
}

function displayButton(button) {
    displayArr.push(button.id);
    displayValue = parseInt(displayArr.join(''));
    displayScreen.value = displayValue;
    
}

function storeCurrentNumber() {
    currentNumber = displayValue;
    console.log({currentNumber});
}

function storePrevNumber() {
    if (result != undefined) {
        prevNumber = result;
    } else {
        prevNumber = currentNumber;
    }
    
    currentNumber = undefined;
    console.log({prevNumber});
}

function displayResult(number) {
    displayScreen.value = number;
}

Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
  }

function clear() {
    displayArr = [];
    displayScreen.value = 0;
    currentNumber = 0;
    prevNumber = 0;
    result = 0;
}

function del() {
    displayArr.pop();
    displayValue = parseInt(displayArr.join(''));
    displayScreen.value = displayValue;
}

// clicking numbers
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayButton(button);
        storeCurrentNumber();
    });
});


// clicking operators
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        storePrevNumber();
        operator = button.id;
        displayArr = [];
        if (result != undefined) {
            result = operate(operator, prevNumber, currentNumber);
        }
        console.log({ result }); // log the result
    });
});

// clicking equal
equalsButton.addEventListener('click', () => {
    result = operate(operator, prevNumber, currentNumber);
    console.log({ result }); //log the result
    displayResult(result.round(7));
    
});

// clicking AC
clearButton.addEventListener('click', () => {
    clear();
})

deleteButton.addEventListener('click', () => {
    del();
    storeCurrentNumber();
})
