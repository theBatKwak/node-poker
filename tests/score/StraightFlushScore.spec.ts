import { ScoreService } from '../../services/Score.service'
import { Card } from '../../models/Card'
import { PokerRule } from '../../services/rules/PokerRule.service'

describe('StraightFlushScore', () => {
  it('should return correct royal straight flush score', () => {
    const userCards = [new Card('clubs', '10', 10), new Card('clubs', 'J', 11)]
    const commonCards = [
      new Card('clubs', 'A', 14),
      new Card('clubs', 'Q', 12),
      new Card('clubs', 'K', 13),
      new Card('clubs', '7', 7),
      new Card('clubs', '6', 6)
    ]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    expect(score).toBe(81400000000)
  })
  it('shoould return correct straight flush score with 2 digits high value', () => {
    const userCards = [new Card('clubs', '10', 10), new Card('clubs', 'J', 11)]
    const commonCards = [
      new Card('clubs', '2', 2),
      new Card('clubs', 'Q', 12),
      new Card('clubs', '3', 3),
      new Card('clubs', '9', 9),
      new Card('clubs', '8', 8)
    ]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    expect(score).toBe(81200000000)
  })
  it('shoould return correct straight flush score with 1 digit high value', () => {
    const userCards = [new Card('clubs', '8', 8), new Card('clubs', '6', 6)]
    const commonCards = [
      new Card('clubs', '5', 5),
      new Card('diamonds', 'Q', 12),
      new Card('clubs', '10', 10),
      new Card('clubs', '9', 9),
      new Card('clubs', '7', 7)
    ]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    expect(score).toBe(81000000000)
  })
})
