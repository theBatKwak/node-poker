import { ScoreService } from '../../services/Score.service'
import { Card } from '../../models/Card'
import { PokerRule } from '../../services/rules/PokerRule.service'

describe('ThreeOfAKindScore', () => {
  it('should return a correct three of a kind score with 2 digits best card', () => {
    const userCards = [new Card('hearts', 'A', 14), new Card('diamonds', 'A', 14)]
    const commonCards = [
      new Card('clubs', 'A', 14),
      new Card('diamonds', 'K', 13),
      new Card('diamonds', 'J', 11),
      new Card('clubs', '7', 7),
      new Card('diamonds', '6', 6)
    ]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    expect(score).toBe(31414141311)
  })
  it('should return a correct three of a kind score with 1 digit best card', () => {
    const userCards = [new Card('hearts', '8', 8), new Card('diamonds', '8', 8)]
    const commonCards = [
      new Card('clubs', '5', 5),
      new Card('diamonds', '8', 8),
      new Card('diamonds', '7', 7),
      new Card('clubs', 'Q', 12),
      new Card('diamonds', '6', 6)
    ]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    expect(score).toBe(30808081207)
  })
})
