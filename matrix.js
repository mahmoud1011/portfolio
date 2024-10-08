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
const matrixChars = 'ᚴᛦᚬᚱᛒᚭᚽᛒᚼᛋᛏᛙᛚᚿ'.split('');

function drawMatrix() {
    // Set the background to semi-transparent black to create the trailing effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text color and font
    ctx.fillStyle = '#00ffff'; // Matrix green
    ctx.font = `${fontSize}px monospace`;

    // Loop over each column
    for (let i = 0; i < columns; i++) {
        // Randomly pick a character from the matrixChars array
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];

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
