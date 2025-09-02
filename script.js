// Function to add and remove a CSS class for animation
function toggleAnimation(elementId) {
    const element = document.getElementById(elementId);
    element.classList.toggle('animate');
}

// Event listener for button click
document.getElementById('animateButton').addEventListener('click', function() {
    toggleAnimation('box');
});

// Function to handle card flip
function flipCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.toggle('flipped');
}

// Adding event listeners for card interactions
const card = document.getElementById('card');
card.addEventListener('mouseenter', () => flipCard('card'));
card.addEventListener('mouseleave', () => flipCard('card'));
