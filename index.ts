import { GameController } from "./controllers/GameController"

// console.log(deck.cards)

const gameController = new GameController(4)
gameController.generateFullCommonCards()
console.log(gameController.generateGameResults())
