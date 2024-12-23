const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const heartsContainer = document.getElementById('hearts-container');

// Add event listener for "Yes" button
yesButton.addEventListener('click', () => {
    createHeart();
    alert("I knew it! Love you too! ❤️");
});

// Create hearts when "Yes" is clicked
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove heart after 5 seconds
}

// Make "No" button move far away dynamically
noButton.addEventListener('mouseenter', () => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const randomX = Math.random() * (containerWidth - 100); // Random X within window bounds
    const randomY = Math.random() * (containerHeight - 50); // Random Y within window bounds

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
