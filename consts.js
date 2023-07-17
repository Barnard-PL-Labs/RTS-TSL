function newVillTemplate(id) {
    return {
        "id": id,
        "state": "idle",
    };
}
var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes[ResourceTypes["Food"] = 0] = "Food";
    ResourceTypes[ResourceTypes["Wood"] = 1] = "Wood";
})(ResourceTypes || (ResourceTypes = {}));
export const defaultGameState = {
    "player": {
        "villagers": [],
        "resources": {
            "r1": 50,
            "r2": 0
        }
    }
};
