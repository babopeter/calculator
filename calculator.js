let firstNum = 0;
let secondNum = 0;
let operator = "+";
let displayValue = "";
let previousValue = "";
const buttons = document.querySelectorAll('button');
let displayArr = [];

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

function displayNum(...num) {
    let displayValue = [];
    displayValue.push(...num);
}

// each time a button is pressed detect the button
// store the value in the displayValue variable
// display the value on the calculator's display

// each time an operator is pressed detect the button
// store the value in the displayOperator varibale
// shift the old displayValue to the upper display
// display the operator in the lower display

// each time a second number is pressed, detect
// display the first value and the operator in the upper display
// run the operate function and display the result 

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.className === 'number') {
            // place the pressed numbers in an array
            displayArr.push(button.id);
            // create a single number from the array
            // this doesn't work, the number is still in an array
            displayValue = parseInt(displayArr.join(''));
            document.getElementById('displaylower').value = displayValue;
            console.log({displayValue});

        } else if (button.className === 'operator') {
            // when you click an operator store the value in previousValue
            previousValue = displayValue;
            console.log({previousValue});
            operator = button.id;
            console.log({operator});
            displayArr = [];
        } else if (button.className === 'equal') {
            // find a way to print the value returned by operate
            let result = operate(previousValue, operator, displayValue);
            console.log({result});
            document.getElementById('displaylower').value = result;
            
           
        }
    });
});