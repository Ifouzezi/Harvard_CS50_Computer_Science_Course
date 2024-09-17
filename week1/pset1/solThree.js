// Get the necessary elements
let n1 = document.querySelector('.number1');
let n2 = document.querySelector('.number2');
let sign = document.querySelector('.sign');
let calc_btn = document.querySelector('.btn');
let result_field = document.querySelector('.result');

// Function to perform the calculation
function calculate() {
    // Get the values of the numbers and the operation sign
    let num1 = parseFloat(n1.value);
    let num2 = parseFloat(n2.value);
    let operation = sign.value;
    let result;

    // Perform the calculation based on the operation
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case ':':
            if (num2 === 0) {
                result = 'Error: Division by zero';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Invalid Operation';
    }

    // Display the result
    result_field.value = result;
}

// Attach the calculate function to the button click event
calc_btn.addEventListener('click', calculate);
