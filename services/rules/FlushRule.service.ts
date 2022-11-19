import { IPokerRule, RuleResult } from '../../interfaces/IPokerRule'
import { Card } from '../../models/Card'

export class FlushRule implements IPokerRule {
  public is(cards: Card[]): false | RuleResult {
    if (cards.length < 5) return false
    const diamonds = cards.filter((card: Card) => card.suit === 'diamonds')
    if (diamonds.length >= 5) return this.getFlushResult(diamonds)
    const spades = cards.filter((card: Card) => card.suit === 'spades')
    if (spades.length >= 5) return this.getFlushResult(spades)
    const hearts = cards.filter((card: Card) => card.suit === 'hearts')
    if (hearts.length >= 5) return this.getFlushResult(hearts)
    const clubs = cards.filter((card: Card) => card.suit === 'clubs')
    if (clubs.length >= 5) return this.getFlushResult(clubs)
    return false
  }
  private getFlushResult(cards: Card[]): RuleResult {
    cards = cards.sort((a: Card, b: Card) => b.value - a.value)
    return {
      flush: cards[0].suit,
      value: cards[0].value,
      secondValue: cards[1].value,
      sideKick: cards[2].value
    }
  }
}
