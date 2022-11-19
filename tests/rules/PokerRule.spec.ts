import { Card } from '../../models/Card'
import { PokerRule } from '../../services/rules/PokerRule.service'

describe('PokerRule', () => {
  it('should detect a royal flush', () => {
    const pokerRule = new PokerRule()
    const cards = [new Card('clubs', 'A', 14), new Card('clubs', 'K', 13)]
    const commonCards = [new Card('clubs', '10', 10), new Card('clubs', 'J', 11), new Card('clubs', 'Q', 12)]
    const result = pokerRule.have(cards, commonCards)
    expect(result).toStrictEqual({ value: 14, reason: 'royal flush', flush: 'clubs' })
  })
  it('should detect a straight flush', () => {
    const pokerRule = new PokerRule()
    const cards = [new Card('clubs', '10', 10), new Card('clubs', 'J', 11)]
    const commonCards = [new Card('clubs', '9', 9), new Card('clubs', '8', 8), new Card('clubs', 'Q', 12)]
    const result = pokerRule.have(cards, commonCards)
    expect(result).toStrictEqual({ value: 12, reason: 'straight flush', flush: 'clubs' })
  })
  it('should detect a four of a kind', () => {
    const pokerRule = new PokerRule()
    const cards = [new Card('clubs', '10', 10), new Card('clubs', 'J', 11)]
    const commonCards = [new Card('hearts', '10', 10), new Card('spades', '10', 10), new Card('diamonds', '10', 10)]
    const result = pokerRule.have(cards, commonCards)
    expect(result).toStrictEqual({ value: 10, reason: 'four of a kind', secondValue: 11 })
  })
  it('should detect a full house', () => {
    const pokerRule = new PokerRule()
    const cards = [new Card('clubs', '10', 10), new Card('clubs', 'J', 11)]
    const commonCards = [new Card('hearts', '10', 10), new Card('spades', 'J', 11), new Card('diamonds', '10', 10)]
    const result = pokerRule.have(cards, commonCards)
    expect(result).toStrictEqual({ value: 10, secondValue: 11, reason: 'full house' })
  })
  it('should detect a flush', () => {
    const pokerRule = new PokerRule()
    const cards = [new Card('clubs', 'A', 14), new Card('clubs', 'J', 11)]
    const commonCards = [new Card('clubs', '3', 3), new Card('clubs', '2', 2), new Card('clubs', '10', 10)]
    const result = pokerRule.have(cards, commonCards)
    expect(result).toStrictEqual({ value: 14, reason: 'flush', flush: 'clubs', secondValue: 11, sideKick: 10 })
  })
  it('should detect a straight', () => {
    const pokerRule = new PokerRule()
    const cards = [new Card('clubs', 'Q', 12), new Card('clubs', 'J', 11)]
    const commonCards = [new Card('diamonds', '8', 8), new Card('clubs', '9', 9), new Card('clubs', '10', 10)]
    const result = pokerRule.have(cards, commonCards)
    expect(result).toStrictEqual({ value: 12, reason: 'straight' })
  })
  it('should detect a three of a kind', () => {
    const pokerRule = new PokerRule()
    const cards = [new Card('clubs', 'Q', 12), new Card('hearts', 'J', 11)]
    const commonCards = [new Card('spades', 'Q', 12), new Card('diamonds', 'Q', 12), new Card('clubs', '10', 10)]
    const result = pokerRule.have(cards, commonCards)
    expect(result).toStrictEqual({ value: 12, reason: 'three of a kind' })
  })
  it('should detect two pairs', () => {
    const pokerRule = new PokerRule()
    const cards = [new Card('clubs', 'Q', 12), new Card('hearts', 'J', 11)]
    const commonCards = [new Card('spades', 'Q', 12), new Card('diamonds', 'J', 11), new Card('clubs', '10', 10)]
    const result = pokerRule.have(cards, commonCards)
    expect(result).toStrictEqual({ value: 12, secondValue: 11, reason: 'two pairs' })
  })
  it('should detect a pair', () => {
    const pokerRule = new PokerRule()
    const cards = [new Card('clubs', 'Q', 12), new Card('hearts', 'J', 11)]
    const commonCards = [new Card('spades', 'Q', 12), new Card('diamonds', '10', 10), new Card('clubs', '9', 9)]
    const result = pokerRule.have(cards, commonCards)
    expect(result).toStrictEqual({ value: 12, reason: 'one pair' })
  })
  it('should detect a high card', () => {
    const pokerRule = new PokerRule()
    const cards = [new Card('clubs', 'Q', 12), new Card('hearts', 'J', 11)]
    const commonCards = [new Card('spades', '9', 9), new Card('diamonds', '10', 10), new Card('clubs', '7', 7)]
    const result = pokerRule.have(cards, commonCards)
    expect(result).toStrictEqual({ value: 12, reason: 'high card', secondValue: 11 })
  })
})
