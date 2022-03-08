let displayPara = document.querySelector('.numbers');
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
}; 

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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayPara.textContent += button.innerText;
        console.log(button.innerText);
    });
});

clearButton.addEventListener('click', () => {
    removeAllChildNodes(displayPara);
    numArray = [];
    console.log(numArray);
})

divideButton.addEventListener('click', () => {
    numArray.push(parseInt(displayPara.textContent), 'divide');
    removeAllChildNodes(displayPara);
    console.log(numArray);
})

multiplyButton.addEventListener('click', () => {
    numArray.push(parseInt(displayPara.textContent), 'multiply');
    removeAllChildNodes(displayPara);
    console.log(numArray);
})

subtractButton.addEventListener('click', () => {
    numArray.push(parseInt(displayPara.textContent), 'subtract');
    removeAllChildNodes(displayPara);
    console.log(numArray);
})

addButton.addEventListener('click', () => {
    numArray.push(parseInt(displayPara.textContent), 'add');
    removeAllChildNodes(displayPara);
    console.log(numArray);
})

equalButton.addEventListener('click', () => {
    numArray.push(parseInt(displayPara.textContent));
    let result = operate(eval(numArray[1]), numArray[0], numArray[2]);
    displayPara.textContent = result;
    numArray = [];
})



