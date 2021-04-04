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

const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const submitButton = document.querySelector("#submitButton");

let FIRST_NUMBER, SECOND_NUMBER;

function getFirstNumber(a) {
    FIRST_NUMBER = Number(a.target.value);
}

function getSecondNumber(a) {
    SECOND_NUMBER = Number(a.target.value);
}

function showNumber() {
    const answer = document.createElement("p");
    answer.appendChild(document.createTextNode(calculator.showAll(FIRST_NUMBER, SECOND_NUMBER)));
    document.body.appendChild(answer);
}

firstNumber.addEventListener("input", getFirstNumber);
secondNumber.addEventListener("input", getSecondNumber);
submitButton.addEventListener("click", showNumber);

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

let INPUT_NUMBER, STORE_INPUT_NUMBER, OPERATOR;
let OPERATOR_MODE = false;
let GRAND_TOTAL_MODE = false;

function SET_NUMBER(ANY_BUTTON_NUMBER_CLICKED) {
    INPUT_NUMBER = ANY_BUTTON_NUMBER_CLICKED.target.innerHTML;
    if (OPERATOR_MODE) {
        firstNumber.value = INPUT_NUMBER;
        OPERATOR_MODE = false;
        GRAND_TOTAL_MODE = false;
    } else {
        firstNumber.value += INPUT_NUMBER;
    }
}

function SET_OPERATOR(ANY_BUTTON_OPERATOR_CLICKED) {
    OPERATOR = ANY_BUTTON_OPERATOR_CLICKED.target.innerHTML;
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

function FIND_OPERATOR(b, a) {
    const FIRST_NUMBER_TO_INTEGER = Number(a);
    const SECOND_NUMBER_TO_STRING = b.toString();
    const OPERATOR = SECOND_NUMBER_TO_STRING.slice(-1);
    const SECOND_NUMBER_TO_INTEGER = Number(SECOND_NUMBER_TO_STRING.slice(0, SECOND_NUMBER_TO_STRING.length - 1))

    switch (OPERATOR) {
        case '+':
            return calculator.plus(SECOND_NUMBER_TO_INTEGER, FIRST_NUMBER_TO_INTEGER);
        case '-':
            return calculator.sub(SECOND_NUMBER_TO_INTEGER, FIRST_NUMBER_TO_INTEGER);
        case '*':
            return calculator.mul(SECOND_NUMBER_TO_INTEGER, FIRST_NUMBER_TO_INTEGER);
        case '/':
            return calculator.div(SECOND_NUMBER_TO_INTEGER, FIRST_NUMBER_TO_INTEGER);
    }
    console.log("Grand total works!");
}

function SET_GRAND_TOTAL () {
    GRAND_TOTAL_MODE = true;
    const OPERATOR = secondNumber.value.toString().slice(-1);
    const FIRST_NUMBER_TO_INTEGER = Number(firstNumber.value);
    const SECOND_NUMBER_TO_STRING = secondNumber.value.toString().slice(0, secondNumber.value.toString().length - 1);
    const SECOND_NUMBER_TO_INTEGER = Number(SECOND_NUMBER_TO_STRING);
    let GRAND_TOTAL;

    switch (OPERATOR) {
        case '+':
            GRAND_TOTAL = calculator.plus(SECOND_NUMBER_TO_INTEGER, FIRST_NUMBER_TO_INTEGER);
            break;
        case '-':
            GRAND_TOTAL = calculator.sub(SECOND_NUMBER_TO_INTEGER, FIRST_NUMBER_TO_INTEGER);
            break;
        case '*':
            GRAND_TOTAL = calculator.mul(SECOND_NUMBER_TO_INTEGER, FIRST_NUMBER_TO_INTEGER);
            break;
        case '/':
            GRAND_TOTAL = calculator.div(SECOND_NUMBER_TO_INTEGER, FIRST_NUMBER_TO_INTEGER);
            break;
    }

    secondNumber.value += firstNumber.value;
    firstNumber.value = Number(GRAND_TOTAL);
}

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
BUTTON_EQUALS.addEventListener("click", SET_GRAND_TOTAL);