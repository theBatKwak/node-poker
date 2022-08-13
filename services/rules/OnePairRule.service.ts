import { IPokerRule, RuleResult } from '../../interfaces/IPokerRule'
import { Card } from '../../models/Card'

export class OnePairRule implements IPokerRule {
  public is(cards: Card[]): false | RuleResult {
    if (cards.length < 2) return false
    for (let i = 0; i < cards.length; i++) {
      if (i >= cards.length - 1) return false
      if (cards[i].value === cards[i + 1].value) {
        return { value: cards[i].value, flush: 'hearts' }
      }
    }
    return false
  }
}
