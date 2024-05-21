// Get references to the HTML elements by their IDs
const warning = document.getElementById('warning');
const result = document.getElementById('result');

function oddEven() {
    // Get the value from the input box and parse it as an integer
    const inputNumber = document.getElementById('input-box').value;
    const number = parseInt(inputNumber); // Converts input to a number

    // Check if the input is empty or not a number
    // Note: isNaN() is used to check if the parsed number is not a valid number
    if (isNaN(number) || inputNumber === "") {
        // Display a warning message
        warning.innerHTML = 'Please input a number';
        // Highlight the input box with a red border
        document.getElementById('input-box').style.border = '2px solid red';

        // Reset the border color and hide the warning message after 3 seconds
        setTimeout(() => {
            document.getElementById('input-box').style.border = '2px solid green';
            warning.style.display = 'none';
        }, 3000);

        // Make sure the warning message is visible immediately
        warning.style.display = 'block';

        // Prevent further processing
        return false;
    }

    // Check if the number is even or odd
    // Corrected the modulus check to `number % 2 == 0` for even numbers
    if (number % 2 == 0) {
        result.innerHTML = `${number} is an even number`;
    } else {
        result.innerHTML = `${number} is an odd number`;
    }

    // Indicate that the form submission should not proceed
    return false;
}
