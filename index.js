const canvas = document.getElementById('game-area');
const ctx = canvas.getContext('2d');

let x = 100;
let y = 100;
let radius = 50;

let downPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;

// Game loop
function drawGame() {
    // We could use either requestAnimationFrame()
    // or setInterval to call the draw function in a loop
    // a.k.a, create our game loop (refreshing our game
    // 60 times a second)). The comp screen by default
    // refreshed 60 times a sec (60Hz frequency)
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    drawGreenBlob();
}

function inputs() {
    if(downPressed) {
        y += 10;
    } else if(upPressed) {
        y -= 10;
    } else if(leftPressed) {
        x -= 10;
    } else if(rightPressed) {
        x += 10;
    }
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

document.body.addEventListener('keydown', keyDown);

document.body.addEventListener('keyup', keyUp);

function keyDown(event) {
    // Down
    if(event.keyCode == 40) {
        downPressed = true;
    } else if(event.keyCode == 38) {
        upPressed = true;
    } else if(event.keyCode == 37) {
        leftPressed = true;
    } else if(event.keyCode == 39) {
        rightPressed = true;
    }
}

function keyUp(event) {
    // Up
    if(event.keyCode == 40) {
        downPressed = false;
    } else if(event.keyCode == 38) {
        upPressed = false;
    } else if(event.keyCode == 37) {
        leftPressed = false;
    } else if(event.keyCode == 39) {
        rightPressed = false;
    }
}

drawGame(); // Using setInterval, instead of calling 
// drawGame() here we'd do, setInterval(drawGame, 1000/60)