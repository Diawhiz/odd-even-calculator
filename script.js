var warning = document.getElementById('warning');
var result = document.getElementById('result');

function oddEven() {
    const inputNumber = document.getElementById('input-box').value;
    const number = parseInt(inputNumber);

    if (number == 0 || !number) {
        warning.innerHTML = 'please input a number';
        document.getElementById('input-box').style.border = '2px solid red';

        setTimeout(() => {
            document.getElementById('input-box').style.border = '2px solid green';
            document.getElementById('warning').style.display = 'none';
        }, 3000);
        return false;
    }

    if (number % 20 == 0) {
        result.innerHTML = `${number} is even number`;
        return false;
    } else {
        result.innerHTML = `${number} is odd number`;
        return false;
    }
}