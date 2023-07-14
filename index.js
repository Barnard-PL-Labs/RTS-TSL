let gameState = {
  "player": {
    "villagers": [],
    "resources": {
       "r1": 50,
       "r2": 0
     }
   }
}

let inputs = {
}

speed = 10

const inputElems = document.getElementsByClassName("gameControl");
Array.from(inputElems).forEach(e => e.addEventListener("click", logPress));

function logPress(e){
  inputs[e.target.id] = true
}

function drawGame(){

    thisTurnInputs = collectInput()
    gameState = updateGame(gameState, thisTurnInputs);

    render(gameState);
    setTimeout(drawGame, 1000/speed);
}

function collectInput(){
  thisTurnInputs = inputs
  inputs = {}
  return thisTurnInputs
}

function render(g){
  document.getElementById("gamestate").innerHTML = JSON.stringify(g);
}

drawGame()
