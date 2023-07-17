//System controlled variables
let currentState = 0;
let currentState1 = 0;
export function updateGame(gameState, inputs) {
    if (inputs["button1"]) {
        gameState = newVill(gameState);
    }
    if (inputs["button2"]) {
        gameState = setVillToCollect(gameState);
    }
    gameState = updateRes(gameState);
    return gameState;
}
function setVillToCollect(g) {
    for (let i = 0; i < g["player"]["villagers"].length; i++) {
        if (g["player"]["villagers"][i]["state"] === "idle") {
            g["player"]["villagers"][i]["state"] = "collecting";
            break;
        }
    }
    return g;
}
function updateRes(g) {
    g["player"]["resources"]["r1"] += g["player"]["villagers"].filter(v => v["state"] === "collecting").length;
    return g;
}
function newVill(g) {
    if (g["player"]["resources"]["r1"] >= 50) {
        let vill = {
            "id": g["player"]["villagers"].length,
            "state": "idle"
        };
        g["player"]["resources"]["r1"] -= 50;
        g["player"]["villagers"].push(vill);
    }
    else {
        //add an error message field to player?
        g = g;
    }
    return g;
}
