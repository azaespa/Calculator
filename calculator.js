const inputContainer = document.querySelector(".text"),
    inputBottom = inputContainer.querySelector("#inputBottom"),
    inputTop = inputContainer.querySelector("#inputTop");

const calculator = {
    add: function (firstNum, secondNum) {
        return firstNum + secondNum;
    },
    sub: function (firstNum, secondNum) {
        return firstNum - secondNum;
    },
    mul: function (firstNum, secondNum) {
        return firstNum * secondNum;
    },
    div: function (firstNum, secondNum) {
        return firstNum / secondNum;
    }
}

let firstNum = 0, secondNum = 0;
let selectOperatorMode = false,
    initialMode = true,
    answerMode = false;
let operator = "";
function calculate(op){
    switch (op) {
        case '+':
            return calculator.add(firstNum, secondNum);
        case '-':
            return calculator.sub(firstNum, secondNum);
        case '*':
            return calculator.mul(firstNum, secondNum);
        case '/':
            return calculator.div(firstNum, secondNum);
    }
}

function paintOutput(operator){
    let ans = calculate(operator);
    
}

function paintOperator(operatorKey){
    let ans;
    firstNum = Number(firstNum);
    const firstNumTemp = firstNum;
    if (selectOperatorMode) {
        //firstNum = 0;
    } else {
        secondNum = firstNum;
        selectOperatorMode = true;
    }
    inputTop.value = `${secondNum} ${operatorKey}`;
    firstNum = 0;
    ans = calculate(operatorKey);
    console.log(firstNum, secondNum, ans);
}

function paintNumber(key){
    if (selectOperatorMode || initialMode) firstNum = "";
    firstNum += key; //key here should be string so the numbers could stack
    inputBottom.value = firstNum;
    selectOperatorMode = false;
    initialMode = false;
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

function handleKeyPress(event) {
    const key = event.key;
    switch (true){
        case isKeyNumber(key):
            return paintNumber(key);//SET_NUMBER_KEY(key);
        case isKeyOperator(key):
            return paintOperator(key);//SET_OPERATOR_KEY(key);
        case isKeyEquals(key):
            return //SET_GRAND_TOTAL();
    }
}

function handleClickInput(event){
    inputBottom.focus();
}

function keyEventListeners(){
    inputContainer.addEventListener("click", handleClickInput);
    inputBottom.addEventListener("keypress", handleKeyPress);
}

function init(){
    keyEventListeners();
}

init();