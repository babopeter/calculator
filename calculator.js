let firstNum = 0;
let secondNum = 0;
let operator = "+";
let displayValue = "";
let previousValue = "";
const buttons = document.querySelectorAll('button');
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
            displayArr.push(button.id);
            displayValue = parseInt(displayArr.join(''));
            document.getElementById('displaylower').value = displayValue;
        } else if (button.className === 'operator') {
            operateArr.push(displayValue);
            previousValue = displayValue;
            operator = button.id;
            displayArr = [];
        } else if (button.className === 'equal') {
            operateArr.push(displayValue);
            let result = operate(operator, ...operateArr);
            console.log({result}); //log the result
            document.getElementById('displaylower').value = result;
        }
    });
});

// make the calculator work for chaining different operators
// call the operate() function every time an operator is pressed
// store the resulting number in a variable
// include that variable in the new operation as the first array element