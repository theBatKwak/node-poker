import { IPokerRule, RuleResult } from '../../interfaces/IPokerRule'
import { Card } from '../../models/Card'
import { OnePairRule } from './OnePairRule.service'
import { ThreeOfAKindRule } from './ThreeOfAKindRule.service'

export class FullHouseRule implements IPokerRule {
  public is(cards: Card[]): false | RuleResult {
    if (cards.length < 5) return false
    const threeOfAKindRule = new ThreeOfAKindRule()
    const threeOfAKind = threeOfAKindRule.is(cards)
    if (!threeOfAKind) return false
    cards = cards.filter((card: Card) => {
      return card.value !== threeOfAKind.value
    })
    const onePairRule = new OnePairRule()
    const onePair = onePairRule.is(cards)
    if (!onePair) return false
    return { value: threeOfAKind.value, secondValue: onePair.value, flush: 'hearts' }
  }
}
