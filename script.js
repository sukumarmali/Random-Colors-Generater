// Get the necessary elements once
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const body = document.body;

// Function to generate random color
function randomColor() {
    const hexValues = "0123456789ABCDEF";
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }

    body.style.backgroundColor = color; // Set background color of body
    console.log(color);
    return color;
}

// Variables to store interval and status
let colorInter = null;
let isColorGenerating = false;

// Function to start generating colors
function startColorGeneration() {
    if (!isColorGenerating) {
        colorInter = setInterval(randomColor, 1000);
        isColorGenerating = true;
    }
}

// Function to stop generating colors
function stopColorGeneration() {
    if (isColorGenerating) {
        clearInterval(colorInter);
        isColorGenerating = false;
    }
}

// Add event listeners to buttons
startButton.addEventListener('click', startColorGeneration);
stopButton.addEventListener('click', stopColorGeneration);
