import { ScoreService } from '../../services/Score.service'
import { Card } from '../../models/Card'
import { PokerRule } from '../../services/rules/PokerRule.service'

describe('StraightFlushScore', () => {
  it('should return a correct four of a kind score with 2 digits best card', () => {
    const userCards = [new Card('diamonds', 'A', 14), new Card('hearts', 'A', 14)]
    const commonCards = [
      new Card('clubs', 'A', 14),
      new Card('spades', 'A', 14),
      new Card('spades', 'K', 13),
      new Card('clubs', '7', 7),
      new Card('diamonds', '6', 6)
    ]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    console.log(result)
    expect(score).toBe(71413000000)
  })
  it('should return a correct four of a kind score with 1 digits best card', () => {
    const userCards = [new Card('diamonds', '2', 2), new Card('hearts', '2', 2)]
    const commonCards = [
      new Card('clubs', 'A', 14),
      new Card('spades', 'A', 14),
      new Card('spades', '2', 2),
      new Card('clubs', '2', 2),
      new Card('diamonds', '6', 6)
    ]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    console.log(result)
    expect(score).toBe(70214000000)
  })
})
