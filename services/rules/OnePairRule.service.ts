import { IPokerRule, RuleResult } from '../../interfaces/IPokerRule'
import { Card } from '../../models/Card'

export class OnePairRule implements IPokerRule {
  public is(cards: Card[]): false | RuleResult {
    if (cards.length < 2) return false
    for (let i = 0; i < cards.length; i++) {
      if (i >= cards.length - 1) return false
      if (cards[i].value === cards[i + 1].value) {
        const result: RuleResult = { value: cards[i].value, flush: 'hearts' }
        const leftCards = cards.filter((card) => card.value !== result.value).sort((a, b) => b.value - a.value)
        if (leftCards.length === 1) result.secondValue = leftCards[0].value
        if (leftCards.length > 1) {
          result.secondValue = leftCards[0].value
          result.sideKick = leftCards[1].value
        }
        return result
      }
    }
    return false
  }
}
