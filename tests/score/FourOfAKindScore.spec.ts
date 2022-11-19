import { ScoreService } from '../../services/Score.service'
import { Card } from '../../models/Card'
import { PokerRule } from '../../services/rules/PokerRule.service'

describe('StraightFlushScore', () => {
  it('should return a correct four of a kind score', () => {
    const userCards = [new Card('diamonds', 'A', 14), new Card('hearts', 'A', 14)]
    const commonCards = [
      new Card('clubs', 'A', 14),
      new Card('spades', 'A', 14),
      new Card('spades', 'K', 13),
      new Card('clubs', '7', 7),
      new Card('clubs', '6', 6)
    ]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    expect(score).toBe(81400000000)
  })
})
