const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

// Array to hold the y-coordinate of the falling characters
const drops = Array(columns).fill(1);

// Characters to display (you can use any characters or symbols)
const matrixChars = 'ᚴᛦᚬᚱᛒᚭᚽᛒᚾᚢᚼᛋᛙᛏᛙᛚᚿ'.split('');

// Function to create a gradient for the matrix characters
function createTextGradient() {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#ff00ff');  // Cyan
    gradient.addColorStop(0.5, '#009bff'); // Blue
    gradient.addColorStop(1, '#ff00ff'); // Magenta
    return gradient;
}

function drawMatrix() {
    // Set the background to semi-transparent black to create the trailing effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text font
    ctx.font = `${fontSize}px monospace`;

    // Loop over each column
    for (let i = 0; i < columns; i++) {
        // Randomly pick a character from the matrixChars array
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];

        // Create gradient text color
        ctx.fillStyle = createTextGradient();

        // Draw the character at the current position (x, y)
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Randomly reset the drop (this creates the falling effect)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move the character down
        drops[i]++;
    }
}

// Continuously update the canvas to create the animation
setInterval(drawMatrix, 50);

// Adjust the canvas size dynamically if the window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
