const canvas = document.getElementById('game-area');
const ctx = canvas.getContext('2d');

// Game loop
function drawGame() {
    clearScreen();
}


function clearScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

drawGame();