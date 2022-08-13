import { Card } from '../../models/Card'
import { TwoPairsRule } from '../../services/rules/TwoPairsRule.service'

describe('TwoPairsRule', () => {
  it('should return false if less than 4 cards are provided', () => {
    const twoPairsRule = new TwoPairsRule()
    const cards = [new Card('clubs', '10', 10), new Card('hearts', '10', 10), new Card('diamonds', '10', 10)]
    const result = twoPairsRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false if 4 cards without 2 pairs are provided', () => {
    const twoPairsRule = new TwoPairsRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('hearts', '8', 8)
    ]
    const result = twoPairsRule.is(cards)
    expect(result).toBe(false)
    //expect(result).toStrictEqual({ value: 10, secondValue: 8, flush: 'hearts' })
  })
  it('should return 2 pairs with 4 cards provided with 2 pairs', () => {
    const twoPairsRule = new TwoPairsRule()
    const cards = [
      new Card('clubs', '8', 8),
      new Card('hearts', '8', 8),
      new Card('diamonds', '10', 10),
      new Card('hearts', '10', 10)
    ].sort((a: Card, b: Card) => b.value - a.value)
    const result = twoPairsRule.is(cards)
    expect(result).toStrictEqual({ value: 10, secondValue: 8, flush: 'hearts' })
  })
  it('should return false if 5 cards without 2 pairs are provided', () => {
    const twoPairsRule = new TwoPairsRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('hearts', '8', 8),
      new Card('spades', '6', 6)
    ]
    const result = twoPairsRule.is(cards)
    expect(result).toBe(false)
    //expect(result).toStrictEqual({ value: 10, secondValue: 8, flush: 'hearts' })
  })
  it('should return 2 pairs with 5 cards provided with 2 pairs', () => {
    const twoPairsRule = new TwoPairsRule()
    const cards = [
      new Card('clubs', '8', 8),
      new Card('hearts', '8', 8),
      new Card('diamonds', '10', 10),
      new Card('hearts', '10', 10),
      new Card('spades', '6', 6)
    ].sort((a: Card, b: Card) => b.value - a.value)
    const result = twoPairsRule.is(cards)
    expect(result).toStrictEqual({ value: 10, secondValue: 8, flush: 'hearts' })
  })
  it('should return false if 6 cards without 2 pairs are provided', () => {
    const twoPairsRule = new TwoPairsRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('hearts', '10', 10),
      new Card('diamonds', '10', 10),
      new Card('hearts', '8', 8),
      new Card('spades', '6', 6),
      new Card('spades', '3', 3)
    ].sort((a: Card, b: Card) => b.value - a.value)
    const result = twoPairsRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return 2 pairs with 7 cards provided with 2 pairs', () => {
    const twoPairsRule = new TwoPairsRule()
    const cards = [
      new Card('clubs', '8', 8),
      new Card('hearts', '8', 8),
      new Card('diamonds', '10', 10),
      new Card('hearts', '10', 10),
      new Card('spades', '6', 6),
      new Card('spades', '6', 6),
      new Card('spades', 'A', 14)
    ].sort((a: Card, b: Card) => b.value - a.value)
    const result = twoPairsRule.is(cards)
    expect(result).toStrictEqual({ value: 10, secondValue: 8, flush: 'hearts' })
  })
  it('should return 2 pairs with 7 cards provided with 2 pairs', () => {
    const twoPairsRule = new TwoPairsRule()
    const cards = [
      new Card('clubs', '8', 8),
      new Card('hearts', '8', 8),
      new Card('diamonds', '10', 10),
      new Card('hearts', '10', 10),
      new Card('spades', '6', 6),
      new Card('spades', '6', 6),
      new Card('spades', 'A', 14)
    ].sort((a: Card, b: Card) => b.value - a.value)
    const result = twoPairsRule.is(cards)
    expect(result).toStrictEqual({ value: 10, secondValue: 8, flush: 'hearts' })
  })
})
