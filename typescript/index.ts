import {render} from "./render.js";
import {updateGame} from "./system.js";
import {defaultGameState} from "./consts.js";

let inputs = {
}

let speed = 10
let gameState = defaultGameState

const inputElems = document.getElementsByClassName("gameControl");
Array.from(inputElems).forEach(e => e.addEventListener("click", logPress));

function logPress(e){
  inputs[e.target.id] = true
}

function drawGame(){

    let thisTurnInputs = collectInput()
    gameState = updateGame(gameState, thisTurnInputs);

    render(gameState);
    setTimeout(drawGame, 1000/speed);
}

function collectInput(){
  let thisTurnInputs = inputs
  inputs = {}
  return thisTurnInputs
}

drawGame()
