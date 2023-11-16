// const number = document.querySelectorAll(".number");
// const output = document.querySelector(".output");
// const sign = document.querySelectorAll(".sign");
// const equal = document.querySelector(".equal");
// const clear = document.querySelector(".clear");
// const negative = document.querySelector(".negative");
// const percent = document.querySelector(".percent");

// let firstNum = "";
// let isFirstNum = false;
// let secondNum = "";
// let isSecondNum = false;
// let operator = "";
// let outputNum = 0;

// for (let i = 0; i < number.length; i++) {
//     number[i].addEventListener('click', (e) => {
//         let atr = e.target.getAttribute('value');
//         if(isFirstNum === false) {
//             getFirstNum(atr);
//         }
//         if (isSecondNum == false) {
//             getSecondNum(atr);
//         }
//     });    
// }

// function getFirstNum(el) {
//     output.innerHTML = "";
//     firstNum += el;
//     output.innerHTML = firstNum;
//     firstNum = +firstNum;
// }

// function getSecondNum(el) {
//     if(firstNum != "" && operator != "") {
//         secondNum += el;
//         output.innerHTML = secondNum;
//         secondNum = +secondNum;
//     }
// }

// function getOperator() {
//     for (let i = 0; i < sign.length; i++) {
//         sign[i].addEventListener('click', (e) => {
//             operator = e.target.getAttribute('value');
//             isFirstNum = true;
//         });
        
//     }
// }
// getOperator();

// equal.addEventListener('click', () => {
//     output.innerHTML = "";
//     if(operator === "+"){
//         outputNum = firstNum + secondNum;
//     }
//     else if(operator === "-"){
//         outputNum = firstNum - secondNum;
//     }
//     else if(operator === "x"){
//         outputNum = firstNum * secondNum;
//     }
//     else if(operator === "/"){
//         outputNum = firstNum / secondNum;
//     }
//     output.innerHTML = outputNum;
//     firstNum = outputNum;
//     secondNum = "";

//     checkLength();
// });

// function checkLength() {
//     outputNum = JSON.stringify(outputNum);
//     if (outputNum.length >= 8) {
//         outputNum = JSON.parse(outputNum);
//         output.innerHTML = outputNum.toFixed(5);
//     }
// }

// negative.addEventListener("click", () => {
//     output.innerHTML = "";
//     if (firstNum != "") {
//         outputNum = -firstNum;
//         firstNum = outputNum;
//     }
//     if (firstNum != "" && secondNum != "" && operator != "") {
//         outputNum = -outputNum;
//     }
//     output.innerHTML = outputNum;
// })

// percent.addEventListener("click", () => {
//     output.innerHTML = "";
//     if (firstNum != "") {
//         outputNum = firstNum / 100;
//         firstNum = outputNum;
//     }
//     if (firstNum != "" && secondNum != "" && operator != "") {
//         outputNum = outputNum / 100;
//     }
//     output.innerHTML = outputNum;
// })

// clear.addEventListener("click", () => {
//     output.innerHTML = 0;

//     firstNum = "";
//     isFirstNum = false;
//     secondNum = "";
//     isSecondNum = false;
//     operator = "";
//     outputNum = 0;
// })



function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'AC') {
            clearDisplay();
        } else if (button.textContent === '=') {
            calculate();
        } else {
            appendToDisplay(button.textContent);
        }
    });
});