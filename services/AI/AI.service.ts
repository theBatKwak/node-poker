import { Card } from '../../models/Card'
import { Hand } from '../../models/Hand'
import { PlayerMove } from '../../models/Player'
import { PokerRule } from '../rules/PokerRule.service'
import { ScoreService } from '../Score.service'

export class AIService {
  private pokerRule: PokerRule = new PokerRule()
  constructor() {
    console.log('Instanciated')
  }
  public play(commonCards: Card[], playerHand: Hand): PlayerMove {
    const has = this.pokerRule.have(playerHand.cards, commonCards)
    console.log('I Have : ', has.reason, '; Score : ', ScoreService.getScore(has, playerHand.cards, commonCards))
    return 'raise'
    // const move = Math.random()
    // return move > 0.9 ? 'fold' : 'raise'
  }
}
