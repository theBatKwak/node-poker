import { IPokerRule, RuleResult } from '../../interfaces/IPokerRule'
import { Card } from '../../models/Card'

export class HighCardRule implements IPokerRule {
  public is(cards: Card[]): false | RuleResult {
    if (cards.length < 1) return false
    return { value: cards[0].value, secondValue: cards[1].value, flush: cards[0].suit }
  }
}
