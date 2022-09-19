const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const x = canvas.width/2;
const y = canvas.height-30;
const dx = 2;
const dy = -2;


const calcRowCount = 4;
const calcColumnCount = 4;
const buttonWidth = 100;
const buttonHeight = 100;
const buttonPadding = 1;
const buttonOffsetTop = 10;
const buttonOffsetLeft = 30;

const buttons = [];
for(let c=0; c < calcColumnCount; c++){
    buttons[c]=[];
    for(let r=0; r < calcRowCount; r++)
        buttons[c][r] = {x: 0, y:0};
}



/* function drawCalc(){
    for(let c=0; c < calcColumnCount; c++)
        for(let r = 0; r < calcRowCount; r++){
            const buttonX = c * (buttonWidth + buttonPadding) + buttonOffsetLeft;
            const buttonY = r * (buttonHeight + buttonPadding) + buttonOffsetTop;
            buttons[c][r].x = buttonX;
            buttons[c][r].y = buttonY;
            ctx.beginPath();
            ctx.rect(buttonX, buttonY, buttonWidth, buttonHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();

        }

function draw(){
    drawCalc();
    
} */

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}

setInterval(draw,10);