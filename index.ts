import { GameController } from "./controllers/GameController"
import { MetaGameController } from "./controllers/MetaGameController"

// console.log(deck.cards)

const gameController = new GameController(4)
gameController.generateFullCommonCards()
console.log(gameController.generateGameResults())

const metaGameController = new MetaGameController(100, 4)
console.log(metaGameController.run())