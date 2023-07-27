let firstNum = 0;
let secondNum = 0;
let operator = "+";
let displayValue = "";
const buttons = document.querySelectorAll('button');

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

function operate(firstNum, operator, secondNum) {
    let result;
    switch (operator) {
        case "+":
            result = add(firstNum, secondNum);
            break;
        case "-":
            result = subtract(firstNum, secondNum);
            break;
        case "x":
            result = multiply(firstNum, secondNum);
            break;
        case "/":
            result = divide(firstNum, secondNum);
            break;
    }
    return result;
}



// each time a button is pressed detect the button
// store the value in the displayValue variable
// display the value on the calculator's display

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue = button.id;
        document.getElementById('display').value = displayValue;
    });
});