//Creates an object to keep track of values//
const calculator = {
    //This displays 0 on the screen//
    displayValue: "0",
    //This will hold the first operand for any expressions, we set it to null for now//
    firstOperand: null,
    //This checks whether or not the second operand has been input//
    waitSecondOperand: false,
    //This will hold the operator, we set it to null for now//
    operator: null,
};

//This modifies values each time a button is clicked//
function inputDigit(digit) {
    const { displayValue, waitSecondOperand } = calculator;
    //We are checking to see if waitSecondOperand is true and set//
    //displayValue to the key that was clicked//
    if(waitSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitSecondOperand = false;
    } else {
        //this overwrites display value is current value is 0//
        //otherwise it adds on to it//
        calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
    }
}

//This section handles decimal points//
function inputDecimal(dot) {
    //This ensures that accidental clicking of the decimal point//
    //doesn't cause bugs in the operation//
    if (calculator.waitSecondOperand === true) return;
    if (!calculator.displayValue.includes(dot)) {
        //we are saying that is the displayValue does not contain a decimal point//
        //we want to add a decimal point//
        calculator.displayValue += dot;
    }
}

//This section handles operators//
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator} = calculator;
    //When the operator key is pressed, we convert the current number//
    //displayed on the screen to a number and then store the result in//
    //calculatorFirstOperand if it doesnt already exist//
    const valueOfInput = parseFloat(displayValue);
    //Checks if an operator already exists and if waitSecondOperand is true//
    //then updated the operator and exits from the function//
    if (operator && calculator.waitSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }  
    if (firstOperand == null) {
        calculator.firstOperand = valueOfInput;
    }  else if (operator) { //checks if operator already exists//
        const valueNow = firstOperand  || 0;
        //If operator exists, property lookup is performed for the operator//
        //in performCalculation object and the function that matches the//
        //operator is executed//
        let result = performCalculation[operator](valueNow, valueOfInput);
        //here we add a fixed amount of numbers after the decimal//
        result = Number(result).toFixed(9)
        //This will remove any trailing 0's//
        result = (result * 1).toString()
        calculator.displayValue = parseFloat(result);
        calculator.firstOperand = parseFloat(result);
    }
    calculator.waitSecondOperand = true;
    calculator.operator = nextOperator;
}

    const performCalculation = {
        "/" : (firstOperand, secondOperand) => firstOperand / secondOperand,
        "*" : (firstOperand, secondOperand) => firstOperand * secondOperand,
        "+" : (firstOperand, secondOperand) => firstOperand + secondOperand,
        "-" : (firstOperand, secondOperand) => firstOperand - secondOperand,
        "=" : (firstOperand, secondOperand) => secondOperand
    };

    function calculatorReset() {
        calculator.displayValue = "0";
        calculator.firstOperand = null;
        calculator.waitSecondOperand = false;
        calculator.operator = null;
    }

    //This function updates the screen with the contents of displayValue//
    function updateDisplay() {
        const display = document.querySelector(".calculatorScreen");
        display.value = calculator.displayValue;
    }

    updateDisplay();
    //This section monitors button clicks//
    const keys = document.querySelector(".calculatorKeys");
    keys.addEventListener("click", (event) => {
        //the target variable is an object that represents the element//
        //that was clicked//
        const { target } = event;
        //If the element that was clicked on is not a button, exit the function//
        if(!target.matches('button')) {
            return;
        }
        
        if(target.classList.contains("operator")) {
            handleOperator(target.value);
            updateDisplay();
            return;
        }

        if (target.classList.contains("decimal")) {
            inputDecimal(target.value);
            updateDisplay();
            return;
        }

        //Ensures that AC clears the numbers from the calculator//
        if (target.classList.contains("allClear")) {
            calculatorReset();
            updateDisplay();
            return;
        }

        inputDigit(target.value);
        updateDisplay();
    })