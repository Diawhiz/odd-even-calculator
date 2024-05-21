// Get references to the HTML elements by their IDs
const warning = document.getElementById('warning');
const guessedNumber = document.getElementById('guessed-number');
const guessResult = document.getElementById('guess-result');

// Function to handle the guessing logic
function guessed() {
    // Generate a random number between 0 and 20
    const randomNumber = Math.round(Math.random() * 20);

    // Get the value from the input box and parse it as an integer
    const numberGuess = document.getElementById('input-box').value;
    const guess = parseInt(numberGuess);

    // Check if the input is empty
    if (numberGuess.length === 0) {
        // Display a warning message
        warning.innerHTML = 'Please enter a number to guess';
        // Highlight the input box and submit button with a red border
        document.getElementById('input-box').style.border = '1px solid red';
        document.getElementById('submit').style.border = '1px solid red';

        // Reset the border color and hide the warning message after 3 seconds
        setTimeout(() => {
            document.getElementById('input-box').style.border = '';
            document.getElementById('submit').style.border = '';
            warning.style.display = 'none';
        }, 3000);

        // Make sure the warning message is visible immediately
        warning.style.display = 'block';

        // Prevent further processing
        return false;
    }

    // Check if the guessed number is outside the valid range (0-20)
    if (guess < 0 || guess > 20) {
        // Display a warning message
        warning.innerHTML = 'You can only guess between 0 and 20';
        // Make sure the warning message is visible
        warning.style.display = 'block';
        // Prevent further processing
        return false;
    }

    // Hide the warning message if input is valid
    warning.style.display = 'none';

    // Check if the guessed number matches the random number
    if (guess === randomNumber) {
        // Display the random number
        guessedNumber.innerHTML = randomNumber;
        // Show success message
        guessResult.innerHTML = `${guess} - You guessed right!`;
    } else {
        // Display the random number
        guessedNumber.innerHTML = randomNumber;
        // Show failure message
        guessResult.innerHTML = `${guess} - You guessed wrong!`;
    }

    // Indicate that the form submission should not proceed
    return false;
}
