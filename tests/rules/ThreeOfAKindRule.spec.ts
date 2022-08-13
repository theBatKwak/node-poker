import { Card } from '../../models/Card'
import { ThreeOfAKindRule } from '../../services/rules/ThreeOfAKindRule.service'

describe('ThreeOfAKindRule', () => {
  it('should return false if less than 3 cards are provided', () => {
    const threeOfAKindRule = new ThreeOfAKindRule()
    const cards = [new Card('clubs', '10', 10), new Card('hearts', '10', 10)]
    const result = threeOfAKindRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false if no cards are provided', () => {
    const threeOfAKindRule = new ThreeOfAKindRule()
    const result = threeOfAKindRule.is([])
    expect(result).toBe(false)
  })
  it('should return a three of a kind with 3 cards provided', () => {
    const threeOfAKindRule = new ThreeOfAKindRule()
    const cards = [new Card('clubs', '10', 10), new Card('spades', '10', 10), new Card('hearts', '10', 10)]
    const result = threeOfAKindRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts' })
  })
  it('should return a three of a kind with 4 cards provided', () => {
    const threeOfAKindRule = new ThreeOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '9', 9)
    ]
    const result = threeOfAKindRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts' })
  })
  it('should return a three of a kind with 5 cards provided', () => {
    const threeOfAKindRule = new ThreeOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '7', 7)
    ]
    const result = threeOfAKindRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts' })
  })
  it('should return a three of a kind with 6 cards provided', () => {
    const threeOfAKindRule = new ThreeOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8)
    ]
    const result = threeOfAKindRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts' })
  })
  it('should return a three of a kind with 7 cards provided', () => {
    const threeOfAKindRule = new ThreeOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8),
      new Card('diamonds', '9', 9)
    ]
    const result = threeOfAKindRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts' })
  })
  it('should return false with 3 cards provided and no three of a kind', () => {
    const threeOfAKindRule = new ThreeOfAKindRule()
    const cards = [new Card('clubs', '10', 10), new Card('spades', 'J', 11), new Card('hearts', '10', 10)]
    const result = threeOfAKindRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false with 4 cards provided and no three of a kind', () => {
    const threeOfAKindRule = new ThreeOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', 'J', 11),
      new Card('hearts', '10', 10),
      new Card('diamonds', '9', 9)
    ]
    const result = threeOfAKindRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false with 5 cards provided and no three of a kind', () => {
    const threeOfAKindRule = new ThreeOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', 'J', 11),
      new Card('hearts', '10', 10),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '7', 7)
    ]
    const result = threeOfAKindRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false with 6 cards provided and no three of a kind', () => {
    const threeOfAKindRule = new ThreeOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', 'J', 11),
      new Card('hearts', '10', 10),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8)
    ]
    const result = threeOfAKindRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false with 7 cards provided and no three of a kind', () => {
    const threeOfAKindRule = new ThreeOfAKindRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', 'J', 11),
      new Card('hearts', '10', 10),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8),
      new Card('diamonds', '9', 9)
    ]
    const result = threeOfAKindRule.is(cards)
    expect(result).toBe(false)
  })
})
