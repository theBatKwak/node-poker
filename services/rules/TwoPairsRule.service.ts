import { IPokerRule, RuleResult } from '../../interfaces/IPokerRule'
import { Card } from '../../models/Card'
import { OnePairRule } from './OnePairRule.service'

export class TwoPairsRule implements IPokerRule {
  public is(cards: Card[]): false | RuleResult {
    if (cards.length < 4) return false
    const onePairRule = new OnePairRule()
    const firstPair = onePairRule.is(cards)
    if (!firstPair) return false
    cards = cards.filter((card) => card.value !== firstPair.value)
    const secondPair = onePairRule.is(cards)
    if (!secondPair) return false
    const leftCards = cards.filter((card) => card.value !== secondPair.value).sort((a, b) => b.value - a.value)
    const result: RuleResult = { value: firstPair.value, secondValue: secondPair.value, flush: 'hearts' }
    if (leftCards.length > 0) {
      result.sideKick = leftCards[0].value
    }
    return result
  }
}
