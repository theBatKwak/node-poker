import { ScoreService } from '../../services/Score.service'
import { Card } from '../../models/Card'
import { PokerRule } from '../../services/rules/PokerRule.service'

describe('TwoPairsScore', () => {
  it('should return a correct two pairs score with 2 digits best card', () => {
    const userCards = [new Card('hearts', 'A', 14), new Card('diamonds', 'K', 13)]
    const commonCards: Card[] = []
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    expect(score).toBe(1413000000)
  })
  it('should return a correct two pairs score with 1 digit best card', () => {
    const userCards = [new Card('hearts', '8', 8), new Card('diamonds', '7', 7)]
    const commonCards = [new Card('diamonds', '6', 6)]
    const result = new PokerRule().have(userCards, commonCards)
    const score = ScoreService.getScore(result, userCards, commonCards)
    expect(score).toBe(807060000)
  })
})
