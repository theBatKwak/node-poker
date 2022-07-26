import { Player, PlayerMove } from '../models/Player'
import { Card } from '../models/Card'
import { Deck } from '../models/Deck'
import { Hand } from '../models/Hand'
import { TurnResult } from '../services/Referee.service'
import { Referee } from '../services/Referee.service'

export type GameState = 'pre-flop' | 'flop' | 'turn' | 'river' | 'showdown' | 'finished'

export class GameController {
  private players: Player[] = []
  private foldedPlayers: Player[] = []
  private earlyWinner: Player | null = null
  private commonCards: Card[] = []
  private deck: Deck = new Deck()
  public gameState: string = 'pre-flop'
  constructor(nPlayers: number = 2) {
    this.deck.shuffle()
    if (nPlayers < 2) {
      throw new Error('There must be at least 2 players')
    }
    for (let i = 0; i < nPlayers; i++) {
      this.players.push(new Player(`player ${i}`, new Hand([this.deck.draw(), this.deck.draw()])))
    }
  }
  public generateFullCommonCards(): void {
    this.commonCards = [...this.deck.getFlop(), ...this.deck.getTurn(), ...this.deck.getRiver()]
  }
  public generateGameResults(): TurnResult {
    if (this.gameState === 'showdown') {
      console.log('🃏 Final hands are counting')

      const referee = new Referee(this.players, this.commonCards)
      return referee.getGameResults()
    } else {
      // if (!this.earlyWinner) throw new Error('No winner found')
      return {
        winner: this.earlyWinner ? this.earlyWinner : this.players[0],
        reason: 'hidden',
        value: 0,
        loosers: this.foldedPlayers
      }
    }
  }
  public playGame(): TurnResult {
    // pre-flop
    this.playRound()
    // flop
    this.gameState = 'flop'
    console.log('flop')
    this.commonCards = [...this.deck.getFlop()]
    this.playRound()
    if (this.gameState === 'finished') return this.generateGameResults()
    // turn
    this.gameState = 'turn'
    console.log('turn')
    this.commonCards = [...this.commonCards, ...this.deck.getTurn()]
    this.playRound()
    if (this.gameState === 'finished') return this.generateGameResults()
    // river
    this.gameState = 'river'
    console.log('river')
    this.commonCards = [...this.commonCards, ...this.deck.getRiver()]
    this.playRound()
    if (this.gameState === 'finished') return this.generateGameResults()
    // showdown
    this.gameState = 'showdown'
    console.log('showdown')
    return this.generateGameResults()
  }
  private playRound(): void {
    this.players.forEach((player: Player) => {
      if (this.players.length === 1) {
        this.earlyWinner = player
        this.endGame()
        return
      }
      const result: PlayerMove = player.play(this.commonCards)
      if (result === 'fold') {
        this.foldedPlayers.push(player)
        if (this.players.length === 2) {
          this.endGame()
          return
        }
      }
      this.players = this.players.filter((p: Player) => p.isActive())
    })
  }
  private endGame(): void {
    // do something
    console.log('STOP')
    this.gameState = 'finished'
  }
}
