import { ScoreService } from '../../services/Score.service'
import { Card } from '../../models/Card'
import { PokerRule } from '../../services/rules/PokerRule.service'

describe('FlushScore', () => {
  it('should return a correct flush score with 2 digits best card', () => {
    const userCards = [new Card('diamonds', 'A', 14), new Card('diamonds', 'A', 14)]
    const commonCards = [
      new Card('clubs', 'A', 14),
      new Card('diamonds', 'K', 13),
      new Card('diamonds', '2', 2),
      new Card('clubs', '7', 7),
      new Card('diamonds', '6', 6)
    ]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    expect(score).toBe(61414141313)
  })
  it('should return a correct flush score with 1 digits best card', () => {
    const userCards = [new Card('diamonds', '2', 2), new Card('diamonds', '2', 2)]
    const commonCards = [
      new Card('clubs', 'A', 14),
      new Card('diamonds', '3', 3),
      new Card('diamonds', 'K', 13),
      new Card('clubs', 'Q', 12),
      new Card('diamonds', '6', 6)
    ]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    expect(score).toBe(60202020303)
  })
})
