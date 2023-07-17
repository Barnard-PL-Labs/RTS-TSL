function newVillTemplate(id: number) {
  return { 
    "id": id,
    "state": "idle",
  }
}

enum ResourceTypes{
  Food,
  Wood,
}

export const defaultGameState = {
  "player": {
    "villagers": [],
    "resources": {
       "r1": 50,
       "r2": 0
     }
   }
}

