import { AIService } from '../services/AI/AI.service'
import { Card } from './Card'
import { Hand } from './Hand'

export type PlayerStatus = 'active' | 'folded' | 'all-in' | 'out'

export type PlayerMove = 'fold' | 'raise'
export class Player {
  public name: String
  public hand: Hand
  public status: PlayerStatus
  private ai: AIService
  constructor(name: String, hand: Hand, ai: AIService) {
    this.name = name
    this.hand = hand
    this.status = 'active'
    this.ai = ai
    this.printPayerHand()
  }
  public play(commonCards: Card[]): PlayerMove {
    // do something
    const move = this.ai.play(commonCards, this.hand)
    if (move === 'fold') {
      this.status = 'folded'
    }
    return move
  }
  public isActive(): boolean {
    return this.status === 'active'
  }
  public printPayerHand(): void {
    console.log(this.name)
    this.hand.cards.forEach((card) => {
      card.print()
    })
  }
  // console.log(`${this.name} : ${this.hand.cards.forEach((c) => c.print())}`!!!)
}
