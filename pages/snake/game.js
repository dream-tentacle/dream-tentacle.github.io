const gameBoard = document.getElementById("game-board");
let gameOver = false;

const main = () => {
    update();
    draw();
    if (gameOver) {
        let gain = (snakeBody.length-2);
        if(gain<=10){
          alert("你的分数: "+gain+"\n你输了！菜就多练练！");
        } else if(gain<=20){
          alert("你的分数: "+gain+"\n你输了！也就那样吧。");
        } else if(gain<=40){
          alert("你的分数: "+gain+"\n你输了！但还不错！")
        } else if(gain<=60){
          alert("你的分数: "+gain+"\n你输了！虽败犹荣。");
        } else if(gain<=100){
          alert("你的分数: "+gain+"\n终于结束了！你太厉害了！");
        } else if(gain<=140){
          alert("你的分数: "+gain+"\n天呐！你就是薯条之神！");
        } else{
          alert("你的分数: "+gain+"\n嘿！！你确定你没有作弊？？！")
        }
        clearInterval(gameLoop);
    }
}


let gameLoop = setInterval(main, 1000/SNAKE_SPEED);

let restartButton = document.getElementById("restart");

let count = 0;
let gugugu = false;

restartButton.onclick = function(){
  if(snakeBody.length == 2)count++;
  else count = 0;
  if(count === 5 && gugugu===false){
    alert("咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕! 恭喜解锁彩蛋!");
    gugugu = true;
  }
  originate();
  gameLoop = setInterval(main, 1000/SNAKE_SPEED);
}


const originate = () => {
  clearInterval(gameLoop);
  food = { x: 4, y: 16 };
  inputDirection = { x: 0, y: 1 };
  lastInputDirection = { x: 0, y: 1 };
  snakeBody = [
    {x:11, y:11},
    {x:11, y:10}
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