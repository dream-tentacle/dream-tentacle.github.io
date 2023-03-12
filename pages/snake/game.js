const gameBoard = document.getElementById("game-board");
let gameOver = false;

const main = () => {
    update();
    draw();
    if (gameOver) {
        
        clearInterval(gameLoop);
    }
}


let gameLoop = setInterval(main, 1000/SNAKE_SPEED);

let restartButton = document.getElementById("restart");
let upButton = document.getElementById("up");
let downButton = document.getElementById("down");
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");


restartButton.onclick = function(){
  originate();
  gameLoop = setInterval(main, 1000/SNAKE_SPEED);
}
upButton.onclick = function(){
  console.log("123");
  if(lastInputDirection.x!==0)inputDirection = { x: 0, y: -1 };
}
downButton.onclick = function(){
  if(lastInputDirection.x!==0)inputDirection = { x: 0, y: 1 };
}
leftButton.onclick = function(){
  if(lastInputDirection.y!==0)inputDirection = { x: -1, y: 0 };
}
rightButton.onclick = function(){
  if(lastInputDirection.y!==0)inputDirection = { x: 1, y: 0 };
}


const originate = () => {
  clearInterval(gameLoop);
  food = { x: 4, y: 16 };
  inputDirection = { x: 0, y: 1 };
  lastInputDirection = { x: 0, y: 1 };
  snakeBody = [
    {x:11, y:11},
    {x:11, y:10},
    {x:11, y:9}
  ];
  gameOver=false;
}


const update = () => {
    console.log("Updating");
    updateSnake();
    updateFood();
    gameOver = isGameOver();
}

const draw = () => {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

const isGameOver = () => {
    return snakeOutOfBounds() || snakeIntersectSelf();
}