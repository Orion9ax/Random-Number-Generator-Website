function generateRandomNumber() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max) || min > max) {
        document.getElementById('result').innerText = 'Invalid Range!';
    } else {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById('result').innerText = randomNumber;
    }
}

