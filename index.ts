import { GameController } from "./controllers/GameController"
import { MetaGameController } from "./controllers/MetaGameController"

// console.log(deck.cards)

const startTS = Date.now()
const metaGameController = new MetaGameController(100, 4)
console.log(metaGameController.run())
const endTS = Date.now()
const total = endTS - startTS
console.log(`Total time: ${total}ms`);
