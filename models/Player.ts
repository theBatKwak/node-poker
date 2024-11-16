import { AIService } from '../services/AI/AI.service'
import { Card } from './Card'
import { Hand } from './Hand'
import { AIController } from '../controllers/AIController'

export type PlayerStatus = 'active' | 'folded' | 'all-in' | 'out'

export type PlayerMove = 'fold' | 'raise'
export class Player {
  public name: String
  public hand: Hand
  public status: PlayerStatus
  constructor(name: String, hand: Hand, readonly ai: AIController) {
    this.name = name
    this.hand = hand
    this.status = 'active'
    this.printPayerHand()
  }
  public play(commonCards: Card[]): PlayerMove {
    const move = this.ai.getMove(commonCards, this.hand.cards)
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
}
