import { Card } from '../../models/Card'
import { OnePairRule } from '../../services/rules/OnePairRule.service'

describe('OnePairRule', () => {
  it('should return false if less than 2 cards are provided', () => {
    const onePairRule = new OnePairRule()
    const cards = [new Card('clubs', '10', 10)]
    const result = onePairRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false if no cards are provided', () => {
    const onePairRule = new OnePairRule()
    const result = onePairRule.is([])
    expect(result).toBe(false)
  })
  it('should return one pair with 2 cards provided', () => {
    const onePairRule = new OnePairRule()
    const cards = [new Card('clubs', '10', 10), new Card('spades', '10', 10)]
    const result = onePairRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts' })
  })
  it('should return one pair with 3 cards provided', () => {
    const onePairRule = new OnePairRule()
    const cards = [new Card('clubs', '10', 10), new Card('spades', '8', 8), new Card('hearts', '10', 10)].sort(
      (a: Card, b: Card) => b.value - a.value
    )
    const result = onePairRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts', secondValue: 8 })
  })
  it('should return one pair with 4 cards provided', () => {
    const onePairRule = new OnePairRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', '8', 8),
      new Card('hearts', '10', 10),
      new Card('diamonds', '9', 9)
    ].sort((a: Card, b: Card) => b.value - a.value)
    const result = onePairRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts', secondValue: 9, sideKick: 8 })
  })
  it('should return one pair with 5 cards provided', () => {
    const onePairRule = new OnePairRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', '8', 8),
      new Card('hearts', '10', 10),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '7', 7)
    ].sort((a: Card, b: Card) => b.value - a.value)
    const result = onePairRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts', secondValue: 9, sideKick: 8 })
  })
  it('should return one pair with 6 cards provided', () => {
    const onePairRule = new OnePairRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', '10', 10),
      new Card('hearts', '2', 2),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8)
    ].sort((a: Card, b: Card) => b.value - a.value)
    const result = onePairRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts', secondValue: 9, sideKick: 8 })
  })
  it('should return one pair with 7 cards provided', () => {
    const onePairRule = new OnePairRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', '2', 2),
      new Card('hearts', '10', 10),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8),
      new Card('diamonds', '3', 3)
    ].sort((a: Card, b: Card) => b.value - a.value)
    const result = onePairRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts', secondValue: 9, sideKick: 8 })
  })
  it('should return false with 2 cards provided and no pair', () => {
    const onePairRule = new OnePairRule()
    const cards = [new Card('clubs', '10', 10), new Card('spades', 'J', 11)].sort(
      (a: Card, b: Card) => b.value - a.value
    )
    const result = onePairRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false with 3 cards provided and no pair', () => {
    const onePairRule = new OnePairRule()
    const cards = [new Card('clubs', '10', 10), new Card('spades', 'J', 11), new Card('hearts', '2', 2)]
    const result = onePairRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false with 4 cards provided and no pair', () => {
    const onePairRule = new OnePairRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', 'J', 11),
      new Card('hearts', '2', 2),
      new Card('diamonds', '9', 9)
    ]
    const result = onePairRule.is(cards)
    expect(result).toBe(false)
  })

  it('should return false with 5 cards provided and no pair', () => {
    const onePairRule = new OnePairRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', 'J', 11),
      new Card('hearts', '2', 2),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '7', 7)
    ]
    const result = onePairRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false with 6 cards provided and no one pair', () => {
    const onePairRule = new OnePairRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', 'J', 11),
      new Card('hearts', '2', 2),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8)
    ]
    const result = onePairRule.is(cards)
    expect(result).toBe(false)
  })
  it('should return false with 7 cards provided and no one pair', () => {
    const onePairRule = new OnePairRule()
    const cards = [
      new Card('clubs', '10', 10),
      new Card('spades', 'J', 11),
      new Card('hearts', '2', 2),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8),
      new Card('diamonds', '3', 3)
    ]
    const result = onePairRule.is(cards)
    expect(result).toBe(false)
  })
})
