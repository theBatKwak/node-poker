import { Deck } from "./models/Deck";

const deck:Deck = new Deck()
deck.shuffle()

console.log(deck.cards)
console.log(deck.draw())
console.log(deck.draw())
console.log(deck.draw())
console.log(deck.draw())
console.log(deck.cards.length)
