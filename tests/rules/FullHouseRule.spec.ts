import { Card } from '../../models/Card'
import { FullHouseRule } from '../../services/rules/FullHouseRule.service'

describe('FullHouseRule', () => {
  it('should return false if less than 5 cards are provided', () => {
    const fullHouseRule = new FullHouseRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('hearts', '10', 10),
      new Card('clubs', '10', 10),
      new Card('hearts', '10', 10)
    ]
    const result = fullHouseRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false if no cards are provided', () => {
    const fullHouseRule = new FullHouseRule()
    const result = fullHouseRule.is([])
    expect(result).toBe(false)
  })
  it('should return full house with 5 cards provided with full house', () => {
    const fullHouseRule = new FullHouseRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('hearts', '8', 8),
      new Card('clubs', '8', 8)
    ]
    const result = fullHouseRule.is(cards)
    expect(result).toStrictEqual({ value: 10, secondValue: 8, flush: 'hearts' })
  })
  it('should return false with 5 cards provided with no full house', () => {
    const fullHouseRule = new FullHouseRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('hearts', '8', 8),
      new Card('clubs', '9', 9)
    ]
    const result = fullHouseRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return full house with 6 cards provided with full house', () => {
    const fullHouseRule = new FullHouseRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('hearts', '8', 8),
      new Card('clubs', '8', 8),
      new Card('spades', '8', 8)
    ]
    const result = fullHouseRule.is(cards)
    expect(result).toStrictEqual({ value: 10, secondValue: 8, flush: 'hearts' })
  })
  it('should return false with 6 cards provided with no full house', () => {
    const fullHouseRule = new FullHouseRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('hearts', '8', 8),
      new Card('clubs', '9', 9),
      new Card('clubs', '7', 7)
    ]
    const result = fullHouseRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return full house with 7 cards provided with full house', () => {
    const fullHouseRule = new FullHouseRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('hearts', '8', 8),
      new Card('clubs', '8', 8),
      new Card('clubs', '7', 7),
      new Card('clubs', '7', 7)
    ]
    const result = fullHouseRule.is(cards)
    expect(result).toStrictEqual({ value: 10, secondValue: 8, flush: 'hearts' })
  })
  it('should return false with 7 cards provided with no full house', () => {
    const fullHouseRule = new FullHouseRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('hearts', '8', 8),
      new Card('clubs', '9', 9),
      new Card('clubs', '7', 7),
      new Card('clubs', '6', 6)
    ]
    const result = fullHouseRule.is(cards)
    expect(result).toBe(false)
  })
})
