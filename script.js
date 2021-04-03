const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return `The product of ${a} and ${b} is equals to ${a * b}`;
    },
    div: function (a, b) {
        return `The quotient of ${a} and ${b} is equals to ${a / b}`;
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
const BUTTON_ADDITION = document.querySelector('#addition');
const BUTTON_SUBTRACTION = document.querySelector('#subtraction');

let INPUT_NUMBER, STORE_INPUT_NUMBER, OPERATOR;
let OPERATOR_MODE = false;

function SET_NUMBER(ANY_BUTTON_NUMBER_CLICKED) {
    INPUT_NUMBER = ANY_BUTTON_NUMBER_CLICKED.target.innerHTML;
    if (OPERATOR_MODE) {
        firstNumber.value = INPUT_NUMBER;
        OPERATOR_MODE = false;
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
        OPERATOR_MODE = true;
    }
}

function FIND_OPERATOR(b, a) {
    const FIRST_NUMBER_TO_INTEGER = Number(a);
    const SECOND_NUMBER_TO_STRING = b.toString();
    const SECOND_NUMBER_TO_INTEGER = Number(SECOND_NUMBER_TO_STRING.slice(0, SECOND_NUMBER_TO_STRING.length - 1))

    switch (SECOND_NUMBER_TO_STRING.slice(-1)) {
        case '+':
            return calculator.plus(SECOND_NUMBER_TO_INTEGER, FIRST_NUMBER_TO_INTEGER);
        case '-':
            return calculator.sub(SECOND_NUMBER_TO_INTEGER, FIRST_NUMBER_TO_INTEGER);
    }
}

BUTTON_ONE.addEventListener("click", SET_NUMBER);
BUTTON_TWO.addEventListener("click", SET_NUMBER);
BUTTON_THREE.addEventListener("click", SET_NUMBER);
BUTTON_ADDITION.addEventListener("click", SET_OPERATOR);
BUTTON_SUBTRACTION.addEventListener("click", SET_OPERATOR);