import { Card } from '../../models/Card'
import { FourOfAKindRule } from '../../services/rules/FourOfAKindRule.service'

describe('FourOfAKindRule', () => {
  it('should return false if less than 4 cards are provided', () => {
    const fourOfAKindRule = new FourOfAKindRule()
    const cards = [new Card('clubs', '10', 10), new Card('clubs', 'J', 11), new Card('clubs', '3', 3)]
    const result = fourOfAKindRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false if no cards are provided', () => {
    const fourOfAKindRule = new FourOfAKindRule()
    const result = fourOfAKindRule.is([])
    expect(result).toBe(false)
  })
  it('should return a four of a kind with 4 cards provided', () => {
    const fourOfAKindRule = new FourOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10)
    ]
    const result = fourOfAKindRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts' })
  })
  it('should return a four of a kind with 5 cards provided', () => {
    const fourOfAKindRule = new FourOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('diamonds', '7', 7)
    ]
    const result = fourOfAKindRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts', secondValue: 7 })
  })
  it('should return a four of a kind with 6 cards provided', () => {
    const fourOfAKindRule = new FourOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8)
    ]
    const result = fourOfAKindRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts', secondValue: 8 })
  })
  it('should return a four of a kind with 7 cards provided', () => {
    const fourOfAKindRule = new FourOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8),
      new Card('diamonds', '9', 9)
    ]
    const result = fourOfAKindRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts', secondValue: 9 })
  })
  it('should return false with 4 cards provided and no four of a kind', () => {
    const fourOfAKindRule = new FourOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', 'J', 11),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10)
    ]
    const result = fourOfAKindRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false with 5 cards provided and no four of a kind', () => {
    const fourOfAKindRule = new FourOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', 'J', 11),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('diamonds', '7', 7)
    ]
    const result = fourOfAKindRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false with 6 cards provided and no four of a kind', () => {
    const fourOfAKindRule = new FourOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', 'J', 11),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8)
    ]
    const result = fourOfAKindRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false with 7 cards provided and no four of a kind', () => {
    const fourOfAKindRule = new FourOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', 'J', 11),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8),
      new Card('diamonds', '9', 9)
    ]
    const result = fourOfAKindRule.is(cards)
    expect(result).toBe(false)
  })
})
