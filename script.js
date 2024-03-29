const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const BUTTON_ONE = document.querySelector('#one');
const BUTTON_TWO = document.querySelector('#two');
const BUTTON_THREE = document.querySelector('#three');
const BUTTON_FOUR = document.querySelector('#four');
const BUTTON_FIVE = document.querySelector('#five');
const BUTTON_SIX = document.querySelector('#six');
const BUTTON_SEVEN = document.querySelector('#seven');
const BUTTON_EIGHT = document.querySelector('#eight');
const BUTTON_NINE = document.querySelector('#nine');
const BUTTON_ZERO = document.querySelector('#zero');
const BUTTON_DECIMAL = document.querySelector('#decimal');
const BUTTON_ADDITION = document.querySelector('#addition');
const BUTTON_SUBTRACTION = document.querySelector('#subtraction');
const BUTTON_MULTIPLICATION = document.querySelector('#multiplication');
const BUTTON_DIVISION = document.querySelector('#division');
const BUTTON_EQUALS = document.querySelector('#equals');

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        return a / b;
    },
    showAll: function (a, b) {
        const allAnswers = [
            calculator.plus(a, b),
            calculator.sub(a, b),
            calculator.mul(a, b),
            calculator.div(a, b)
        ]
        return allAnswers.toString().replaceAll(",", ". ");
    }
}

let FIRST_NUMBER, SECOND_NUMBER, ANS;

function storeNumberInput(){
    
}

function getFirstNumber(num) {
    FIRST_NUMBER = Number(num.target.value);
}

function getSecondNumber(num) {
    SECOND_NUMBER = Number(num.target.value);
}

firstNumber.addEventListener("input", getFirstNumber);
secondNumber.addEventListener("input", getSecondNumber);

let INPUT_NUMBER;
let OPERATOR_MODE = false;
let GRAND_TOTAL_MODE = false;

function SET_NUMBER_KEY(ANY_KEY_NUMBER) {
    INPUT_NUMBER = ANY_KEY_NUMBER;
    if (OPERATOR_MODE) {
        firstNumber.value = INPUT_NUMBER;
        OPERATOR_MODE = false;
    } else {
        firstNumber.value += INPUT_NUMBER;
    }
    
    if (GRAND_TOTAL_MODE) {
        firstNumber.value = INPUT_NUMBER;
        secondNumber.value = '';
        GRAND_TOTAL_MODE = false;  
    }
}

function SET_NUMBER(ANY_BUTTON_NUMBER_CLICKED) {
    INPUT_NUMBER = ANY_BUTTON_NUMBER_CLICKED.target.innerHTML;
    if (OPERATOR_MODE) {
        firstNumber.value = INPUT_NUMBER;
        OPERATOR_MODE = false;
    } else {
        firstNumber.value += INPUT_NUMBER;
    }
    
    if (GRAND_TOTAL_MODE) {
        firstNumber.value = INPUT_NUMBER;
        secondNumber.value = '';
        GRAND_TOTAL_MODE = false;  
    }
    firstNumber.focus();
}

function SET_OPERATOR_KEY(ANY_BUTTON_OPERATOR_CLICKED) {
    const OPERATOR = ANY_BUTTON_OPERATOR_CLICKED;
    let TOTAL = firstNumber.value;
    if (OPERATOR_MODE) {
        secondNumber.value = secondNumber.value.toString().slice(0, secondNumber.value.toString().length - 1) + OPERATOR;
    } else {
        if (secondNumber.value != '') {
            TOTAL = FIND_OPERATOR(secondNumber.value, firstNumber.value);
        }
        secondNumber.value = TOTAL + OPERATOR;
        firstNumber.value = TOTAL;
        OPERATOR_MODE = true;
    }
}

function SET_OPERATOR(ANY_BUTTON_OPERATOR_CLICKED) {
    const OPERATOR = ANY_BUTTON_OPERATOR_CLICKED.target.innerHTML;
    let TOTAL = firstNumber.value;
    if (OPERATOR_MODE) {
        secondNumber.value = secondNumber.value.toString().slice(0, secondNumber.value.toString().length - 1) + OPERATOR;
    } else {
        if (secondNumber.value != '') {
            TOTAL = FIND_OPERATOR(secondNumber.value, firstNumber.value);
        }
        secondNumber.value = TOTAL + OPERATOR;
        firstNumber.value = TOTAL;
        OPERATOR_MODE = true;
    }
    firstNumber.focus();
}

function FIND_OPERATOR(b, a) {
    const FIRST_NUMBER_TO_INTEGER = Number(a);
    const SECOND_NUMBER_TO_STRING = b.toString();
    const OPERATOR = SECOND_NUMBER_TO_STRING.slice(-1);
    const SECOND_NUMBER_TO_INTEGER = Number(SECOND_NUMBER_TO_STRING.slice(0, SECOND_NUMBER_TO_STRING.length - 1))
    return calculate(OPERATOR, FIRST_NUMBER_TO_INTEGER, SECOND_NUMBER_TO_INTEGER);
}

function calculate(operator, firstNum, secNum) {
    switch (operator) {
        case '+':
            return calculator.plus(secNum, firstNum);
        case '-':
            return calculator.sub(secNum, firstNum);
        case 'x':
            return calculator.mul(secNum, firstNum);
        case '*':
            return calculator.mul(secNum, firstNum);
        case '÷':
            return calculator.div(secNum, firstNum);
        case '/':
            return calculator.div(secNum, firstNum);
    }
}

function isSecNumEmpty(){
    if(secondNumber.value === ""){
        return true;
    } else {
        return false;
    }
}

function SET_GRAND_TOTAL () {
    GRAND_TOTAL_MODE = true;
    const OPERATOR = secondNumber.value.toString().slice(-1);
    const FIRST_NUMBER_TO_INTEGER = Number(firstNumber.value);
    const SECOND_NUMBER_TO_STRING = secondNumber.value.toString().slice(0, secondNumber.value.toString().length - 1);
    const SECOND_NUMBER_TO_INTEGER = Number(SECOND_NUMBER_TO_STRING);
    let GRAND_TOTAL;
    if (isSecNumEmpty) {
        GRAND_TOTAL = firstNumber.value;
    } else {
        GRAND_TOTAL = calculate(OPERATOR, FIRST_NUMBER_TO_INTEGER, SECOND_NUMBER_TO_INTEGER);
    }
    secondNumber.value += firstNumber.value;
    firstNumber.value = GRAND_TOTAL;
}

function grandTotal () {
    firstNumber.value = firstNumber.value;
}

function paintGrandTotal() {
    GRAND_TOTAL_MODE ? grandTotal() : SET_GRAND_TOTAL();
}

function isKeyNumber(key){
    const numberSet = "1234567890";
    let isKeyNumberBool;
    isKeyNumberBool = numberSet.includes(key) ? true : false;
    return isKeyNumberBool;
}

function isKeyOperator(key){
    const operatorSet = "+-/*";
    let isKeyOperatorBool;
    isKeyOperatorBool = operatorSet.includes(key) ? true : false;
    return isKeyOperatorBool;
}

function isKeyEquals(key){
    const equals = "=Enter";
    let isKeyEqualsBool;
    isKeyEqualsBool = equals.includes(key) ? true : false;
    return isKeyEqualsBool;
}

function handleKeyPress(event){
    const key = event.key;
    switch (true){
        case isKeyNumber(key):
            return SET_NUMBER_KEY(key);
        case isKeyOperator(key):
            return SET_OPERATOR_KEY(key);
        case isKeyEquals(key):
            return SET_GRAND_TOTAL();
    }
}

firstNumber.addEventListener("keypress", handleKeyPress);
BUTTON_ONE.addEventListener("click", SET_NUMBER);
BUTTON_TWO.addEventListener("click", SET_NUMBER);
BUTTON_THREE.addEventListener("click", SET_NUMBER);
BUTTON_FOUR.addEventListener("click", SET_NUMBER);
BUTTON_FIVE.addEventListener("click", SET_NUMBER);
BUTTON_SIX.addEventListener("click", SET_NUMBER);
BUTTON_SEVEN.addEventListener("click", SET_NUMBER);
BUTTON_EIGHT.addEventListener("click", SET_NUMBER);
BUTTON_NINE.addEventListener("click", SET_NUMBER);
BUTTON_ZERO.addEventListener("click", SET_NUMBER);
BUTTON_DECIMAL.addEventListener("click", SET_NUMBER);
BUTTON_ADDITION.addEventListener("click", SET_OPERATOR);
BUTTON_SUBTRACTION.addEventListener("click", SET_OPERATOR);
BUTTON_MULTIPLICATION.addEventListener("click", SET_OPERATOR);
BUTTON_DIVISION.addEventListener("click", SET_OPERATOR);
BUTTON_EQUALS.addEventListener("click", paintGrandTotal);