import { Card } from '../models/Card'
import { Deck } from '../models/Deck'
import { Hand } from '../models/Hand'
import { Player } from '../models/Player'
import { AIService } from '../services/AI/AI.service'

type GameState = 'pre-flop' | 'flop' | 'turn' | 'river' | 'showdown' | 'finished'

export class NewGameController {
  private activePlayers: Player[]
  private foldedPlayers: Player[]
  private deck: Deck
  private commonCards: Card[] = []
  private ai: AIService
  private gameState: GameState = 'pre-flop'
  constructor(nPlayers: number = 2) {
    this.deck = new Deck()
    this.deck.shuffle()
    this.foldedPlayers = []
    this.activePlayers = []
    this.ai = new AIService()
    for (let i = 0; i < nPlayers; i++) {
      this.activePlayers.push(new Player(`player ${i}`, new Hand([this.deck.draw(), this.deck.draw()]), this.ai))
    }
  }
  public playGame(): void {
    while (this.activePlayers.length > 1 && this.gameState !== 'finished') {
      this.playRound()
      this.generateNextRound()
    }
    this.finishGame()
  }
  private playRound(): void {
    this.activePlayers.forEach((player) => {
      const move = player.play(this.commonCards)
      if (move === 'fold') {
        this.foldedPlayers.push(player)
        this.activePlayers = this.activePlayers.filter((p) => p !== player)
      }
    })
  }
  private generateNextRound(): void {
    switch (this.gameState) {
      case 'pre-flop':
        console.log('⏱ FLOP')
        this.commonCards = [...this.deck.getFlop()]
        this.printCommonCards()
        this.gameState = 'flop'
        break
      case 'flop':
        console.log('⏱ TURN')
        this.commonCards = [...this.commonCards, ...this.deck.getTurn()]
        this.printCommonCards()
        this.gameState = 'turn'
        break
      case 'turn':
        console.log('⏱ RIVER')
        this.commonCards = [...this.commonCards, ...this.deck.getRiver()]
        this.printCommonCards()
        this.gameState = 'river'
        break
      case 'river':
        console.log('⏱ SHOWDOWN')
        this.gameState = 'showdown'
        break
      case 'showdown':
        console.log('⏱ FINISHED')
        this.gameState = 'finished'
        break
    }
  }
  private finishGame(): void {
    this.gameState = 'finished'
    console.log('Game finished')
    console.log(this.activePlayers[0].hand.cards)
  }
  private printCommonCards(): void {
    this.commonCards.forEach((card) => {
      card.print()
    })
  }
}
