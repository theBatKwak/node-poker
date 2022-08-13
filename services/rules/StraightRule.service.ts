import { IPokerRule, RuleResult } from '../../interfaces/IPokerRule'
import { Card } from '../../models/Card'

/**
 * Straight rule class.
 * Returns true id any of the cards in the hand is a straight.
 */
export class StraightRule implements IPokerRule {
  public is(cards: Card[]): false | RuleResult {
    if (cards.length < 5) return false
    for (let i = 0; i < cards.length; i++) {
      if (i >= cards.length - 4) return false
      if (
        cards[i].value === cards[i + 1].value + 1 &&
        cards[i + 1].value === cards[i + 2].value + 1 &&
        cards[i + 2].value === cards[i + 3].value + 1 &&
        cards[i + 3].value === cards[i + 4].value + 1
      ) {
        return { value: cards[i].value, flush: cards[i].suit }
      }
    }
    return false
  }
}
