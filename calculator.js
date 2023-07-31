let firstNum = 0;
let secondNum = 0;
let operator = "+";
let displayValue = "";
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.getElementById('=');
let displayArr = [];
let operateArr = [];

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

function operate(operator, ...numbers) {
    let result;
    switch (operator) {
        case "+":
            result = add(...numbers);
            break;
        case "-":
            result = subtract(...numbers);
            break;
        case "x":
            result = multiply(...numbers);
            break;
        case "/":
            result = divide(...numbers);
            break;
    }
    return result;
}

function displayButton(button) {
    displayArr.push(button.id);
    displayValue = parseInt(displayArr.join(''));
    document.getElementById('display').value = displayValue;
    
}

function storeNumber(number) {
    operateArr.push(number);
}

function displayResult(number) {
    document.getElementById('display').value = number;
}

// clicking numbers
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayButton(button);
    });
});


// clicking operators
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        storeNumber(displayValue);
    
        operator = button.id;
        displayArr = [];

        console.log({ operateArr });
        console.log({ operator });

        let result = operate(operator, ...operateArr);

        console.log({ result });
        displayResult(result);
    });
});

// clicking equal
equalButton.addEventListener('click', () => {
    operateArr.push(displayValue);
    let result = operate(operator, ...operateArr);
    console.log({ result }); //log the result
    displayResult(result);
});




// make the calculator work for chaining different operators
// call the operate() function every time an operator is pressed
// store the resulting number in a variable
// include that variable in the new operation as the first array element