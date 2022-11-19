import { IPokerRule, RuleResult } from '../../interfaces/IPokerRule'
import { Card } from '../../models/Card'

export class HighCardRule implements IPokerRule {
  public is(cards: Card[]): false | RuleResult {
    if (cards.length < 1) return false
    const result: RuleResult = { value: cards[0].value, secondValue: cards[1].value, flush: cards[0].suit }
    if (cards.length > 2) {
      result.sideKick = cards[2].value
    }
    return result
  }
}
