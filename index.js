const canvas = document.getElementById('game-area');
const ctx = canvas.getContext('2d');

let x = 100;
let y = 100;
let radius = 50;

// Game loop
function drawGame() {
    console.log("draw");
    // We could use either requestAnimationFrame()
    // or setInterval to call the draw function in a loop
    // a.k.a, create our game loop (refreshing our game
    // 60 times a second)). The comp screen by default
    // refreshed 60 times a sec (60Hz frequency)
    requestAnimationFrame(drawGame);
    clearScreen();
    drawGreenBlob();
}

function drawGreenBlob() {
    ctx.fillStyle = 'green';
    ctx.beginPath();
    // Position (x, y) of (100, 100), radius of 50
    // 0 is the start angle and (Math.PI * 2) is the end angle
    ctx.arc(x, y, radius, 0, Math.PI * 2); 
    ctx.fill();
}

function clearScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

drawGame(); // Using setInterval, instead of calling 
// drawGame() here we'd do, setInterval(drawGame, 1000/60)