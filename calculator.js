let firstNum = 0;
let secondNum = 0;
let operator = "+";

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