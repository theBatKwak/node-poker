import { AIService } from '../services/AI/AI.service'
import { Card } from './Card'
import { Hand } from './Hand'

export type PlayerStatus = 'active' | 'folded' | 'all-in' | 'out'

export type PlayerMove = 'fold' | 'raise'

type NewType = PlayerMove

export class Player {
  public name: String
  public hand: Hand
  public status: PlayerStatus
  constructor(name: String, hand: Hand) {
    this.name = name
    this.hand = hand
    this.status = 'active'
  }
  public play(commonCards: Card[]): PlayerMove {
    // do something
    const move = AIService.play(commonCards, this.hand)
    console.log(this.name, move)

    if (move === 'fold') {
      this.status = 'folded'
    }
    return move
  }
  public isActive(): boolean {
    return this.status === 'active'
  }
}
