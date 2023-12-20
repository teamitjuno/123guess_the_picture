let attempts = 3;
const hiddenImageNumber = {{ hidden_image_number }};
const hiddenImageUrl = "{{ hidden_image.image.url if hidden_image else '' }}";

function makeGuess(squareNumber, imageUrl) {
    if (attempts > 0) {
        if (squareNumber === hiddenImageNumber) {
            // User guessed the correct square
            let square = document.getElementById('square-' + squareNumber);
            square.style.backgroundImage = `url('${hiddenImageUrl}')`;
            square.style.backgroundSize = 'cover';
            square.style.cursor = 'pointer';
            square.onclick = function() {
                enlargeImage(hiddenImageUrl);
            };
            alert('You guessed correctly!');
            attempts = 0; // Stop further guesses after a correct guess
        } else {
            // User guessed the wrong square
            document.getElementById('square-' + squareNumber).style.backgroundColor = 'red';
            attempts--;
            updateAttemptsDisplay();
        }
    } else {
        alert('No more attempts left!');
    }
}

function enlargeImage(imageUrl) {
    window.open(imageUrl, '_blank').focus();
}

function updateAttemptsDisplay() {
    document.getElementById('attempts').textContent = attempts;
}
