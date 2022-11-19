import { IPokerRule, RuleResult } from '../../interfaces/IPokerRule'
import { Card } from '../../models/Card'

export class FourOfAKindRule implements IPokerRule {
  public is(cards: Card[]): false | RuleResult {
    if (cards.length < 4) return false
    for (let i = 0; i < cards.length; i++) {
      if (i >= cards.length - 3) return false
      if (
        cards[i].value === cards[i + 1].value &&
        cards[i].value === cards[i + 2].value &&
        cards[i].value === cards[i + 3].value
      ) {
        const result: RuleResult = {
          value: cards[i].value,
          flush: 'hearts'
        }
        if (cards.length > 4) {
          const leftCards = cards.filter((card) => card.value !== result.value).sort((a, b) => b.value - a.value)
          result.secondValue = leftCards[0].value
        }
        return result
      }
    }
    return false
  }
}
