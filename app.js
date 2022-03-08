let displayPara = document.querySelector('.numbers');
let numberTracker = document.querySelector('.number-tracker');
let numButtons = document.querySelectorAll(".number-button");
let clearButton = document.querySelector('.clear-button');
let divideButton = document.querySelector('.division-button');
let multiplyButton = document.querySelector('.multiply-button');
let subtractButton = document.querySelector('.subtract-button');
let addButton = document.querySelector('.addition-button');
let equalButton = document.querySelector('.equal-button');
let numArray = [];

function add(a, b) {
    return a + b;
} 

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

function equate() {
    if (numArray.length < 2) return;
    numArray.push(parseInt(displayPara.textContent));
    let result = operate(eval(numArray[1]), numArray[0], numArray[2]);
    if (result % 1 != 0) {
        displayPara.textContent = result.toFixed(2);
        numberTracker.textContent = result.toFixed(2);
    } else {
        displayPara.textContent = result;
        numberTracker.textContent = result;
    }
    numArray = ['mark'];
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (numArray[0] === 'mark') {
            removeAllChildNodes(displayPara);
            removeAllChildNodes(numberTracker);
            displayPara.textContent += button.innerText;
        } else {
        displayPara.textContent += button.innerText;
        }
    })
})

clearButton.addEventListener('click', () => {
    removeAllChildNodes(displayPara);
    removeAllChildNodes(numberTracker);
    numArray = [];
    console.log(numArray);
})

divideButton.addEventListener('click', () => {
    if (numArray.length > 0) equate();
    numArray.pop();
    numArray.push(parseInt(displayPara.textContent), 'divide');
    numberTracker.textContent = `${numArray[0]} ÷`;
    removeAllChildNodes(displayPara);
    console.log(numArray);
})

multiplyButton.addEventListener('click', () => {
    if (numArray.length > 0) equate();
    numArray.pop();
    numArray.push(parseInt(displayPara.textContent), 'multiply');
    numberTracker.textContent = `${numArray[0]} x`;
    removeAllChildNodes(displayPara);
    console.log(numArray);
})

subtractButton.addEventListener('click', () => {
    if (numArray.length > 0) equate();
    numArray.pop();
    numArray.push(parseInt(displayPara.textContent), 'subtract');
    numberTracker.textContent = `${numArray[0]} -`;
    removeAllChildNodes(displayPara);
    console.log(numArray);
})

addButton.addEventListener('click', () => {
    if (numArray.length > 0) equate();
    numArray.pop();
    numArray.push(parseInt(displayPara.textContent), 'add');
    numberTracker.textContent = `${numArray[0]} +`;
    removeAllChildNodes(displayPara);
    console.log(numArray);
})

equalButton.addEventListener('click', () => {
    equate();
})



