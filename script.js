const calculator = {
    plus: function(a, b) {
        return `The sum of ${a} and ${b} is equals to ${a + b}`;
    },
    sub: function (a, b) {
        return `The difference of ${a} and ${b} is equals to ${a - b}`;
    },
    mul: function (a, b) {
        return `The product of ${a} and ${b} is equals to ${a * b}`;
    },
    div: function (a, b) {
        return `The quotient of ${a} and ${b} is equals to ${a / b}`;
    },
    showAll: function(a, b) {
        const allAnswers = [
            calculator.plus(a,b),
            calculator.sub(a,b),
            calculator.mul(a,b),
            calculator.div(a,b)
        ]
        return allAnswers.toString().replaceAll(",", ". "); 
    }
}

const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const submitButton = document.querySelector("#submitButton");

let FIRST_NUMBER, SECOND_NUMBER;

function getFirstNumber(a){
    FIRST_NUMBER = Number(a.target.value);
}

function getSecondNumber(a) {
    SECOND_NUMBER = Number(a.target.value);
}

function showNumber(){
    const answer = document.createElement("p");
    answer.appendChild(document.createTextNode(calculator.showAll(FIRST_NUMBER, SECOND_NUMBER)));
    document.body.appendChild(answer);
}

firstNumber.addEventListener("input", getFirstNumber);
secondNumber.addEventListener("input", getSecondNumber);
submitButton.addEventListener("click", showNumber);