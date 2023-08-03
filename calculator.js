const displayScreen = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('=');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const decimalButton = document.getElementById('.');

let displayArr = [];

let operator = undefined;
let displayValue = 0;
let currentNumber = 0;
let prevNumber = undefined;

let result = undefined;
let equalsPressed = false;

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
    console.log({prevNumber}); // log
    console.log({currentNumber}); // log
}

function displayResult(number) {
    displayScreen.value = number;
}

function checkResult() {
    if (result != undefined) {
        result = operate(operator, prevNumber, currentNumber);
    }
}

Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
  }

function clear() {
    displayArr = [];
    displayScreen.value = 0;
    currentNumber = 0;
    prevNumber = undefined;
    result = undefined;
    equalsPressed = false;
}

function del() {
    displayArr.pop();
    console.log({displayArr}); // log
    displayValue = parseInt(displayArr.join(''));
    if (displayArr.length === 0) {
        displayValue = 0;
        result = undefined;
    }
    displayScreen.value = displayValue;
    console.log({displayValue}); //log
}

// clicking numbers
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayButton(button);
        storeCurrentNumber();
        checkResult();
        console.log({ result }); // log the result
    });
});


// clicking operators
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        storePrevNumber();
        operator = button.id;
        displayArr = [];
        checkResult();
        result = operate(operator, prevNumber, currentNumber);
        console.log({ result }); // log the result
    });
});

// clicking equal
equalsButton.addEventListener('click', () => {
    equalsPressed = true;
    result = operate(operator, prevNumber, currentNumber);
    // convert each digit to array
    displayArr = Array.from(String(result), Number);
    console.log({displayArr}); //log
    if (result != undefined) {
        console.log({ result }); //log the result
        displayResult(result.round(7));
    }
});

// clicking AC
clearButton.addEventListener('click', () => {
    clear();
})

deleteButton.addEventListener('click', () => {
    // if (result === undefined) {
    //     del();
    //     storeCurrentNumber();
    // } else {
    //     clear();
    // }
    if (!equalsPressed) {
        del();
        storeCurrentNumber();
    } else {
        clear();
    }
   
})

decimalButton.addEventListener('click', () => {
    displayScreen.value = `${displayValue}.`;
})

// bug - deleting the result and continuing with a new operation

// add decimal support
// add keyboard support
// display funny error message when dividing by 0
// CSS - make it look nice