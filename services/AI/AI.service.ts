import { Card } from '../../models/Card'
import { Hand } from '../../models/Hand'
import { PlayerMove } from '../../models/Player'

export class AIService {
  constructor() {}
  public static play(commonCards: Card[], playerHand: Hand): PlayerMove {
    // do something
    const move = Math.random()
    return move > 0.9 ? 'fold' : 'raise'
  }
}
