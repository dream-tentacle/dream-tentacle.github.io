let inputDirection = { x: 0, y: 1 };
let lastInputDirection = { x: 0, y: 1 };




window.addEventListener('keydown', event => {
    if ((event.key === "ArrowUp" || event.key === "w" )&& lastInputDirection.x !== 0) {
        inputDirection = { x: 0, y: -1 };
    } else if ((event.key === "ArrowDown" || event.key === "s" ) && lastInputDirection.x !== 0) {
        inputDirection = { x: 0, y: 1 };
    } else if ((event.key === "ArrowLeft" || event.key === "a" ) && lastInputDirection.y !== 0) {
        inputDirection = { x: -1, y: 0 };
    } else if ((event.key === "ArrowRight" || event.key === "d" ) && lastInputDirection.y !== 0) {
        inputDirection = { x: 1, y: 0 };
    }

})
let upButton = document.getElementById("up");
let downButton = document.getElementById("down");
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");


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


const getInputDirection = () => {
    lastInputDirection = inputDirection;
    return inputDirection;
}