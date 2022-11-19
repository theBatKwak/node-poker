import { ScoreService } from '../../services/Score.service'
import { Card } from '../../models/Card'
import { PokerRule } from '../../services/rules/PokerRule.service'

describe('FullHouseScore', () => {
  it('should return a correct full house score with 2 digits best card', () => {
    const userCards = [new Card('diamonds', 'A', 14), new Card('hearts', 'A', 14)]
    const commonCards = [
      new Card('clubs', 'A', 14),
      new Card('spades', 'K', 13),
      new Card('spades', 'K', 13),
      new Card('clubs', '7', 7),
      new Card('diamonds', '6', 6)
    ]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    expect(score).toBe(61414141313)
  })
  it('should return a correct full house score with 1 digits best card', () => {
    const userCards = [new Card('diamonds', '2', 2), new Card('hearts', '2', 2)]
    const commonCards = [
      new Card('clubs', 'A', 14),
      new Card('spades', '3', 3),
      new Card('spades', '3', 3),
      new Card('clubs', '2', 2),
      new Card('diamonds', '6', 6)
    ]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    expect(score).toBe(60202020303)
  })
})
