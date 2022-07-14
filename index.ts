import { Card } from './models/Card'
import { Deck } from './models/Deck'
import { Hand } from './models/Hand'
import { Player } from './models/Player'
import { Referee, TurnResult } from './services/Referee.service'

const deck:Deck = new Deck()
deck.shuffle()

// console.log(deck.cards)

const player1:Player = new Player('player1', new Hand([deck.draw(), deck.draw()]))
const player2:Player = new Player('player2', new Hand([deck.draw(), deck.draw()]))

const commonCards:Card[] = [...deck.getFlop(), ...deck.getTurn(), ...deck.getRiver()]
console.log(commonCards)

const referee: Referee = new Referee([player1, player2], commonCards)
const turnResult: TurnResult = referee.getWinnerHand()

console.log(deck.cards.length, player1.hand, player2.hand)
console.log(turnResult.winner?.name, ' wins with ', turnResult.reason)

