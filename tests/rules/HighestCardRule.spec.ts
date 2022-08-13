import { Card } from '../../models/Card'
import { HighCardRule } from '../../services/rules/HighCardRule.service'

describe('HighestCardRule', () => {
  it('should return false if no cards are provided', () => {
    const highCardRule = new HighCardRule()
    const result = highCardRule.is([])
    expect(result).toBe(false)
  })
  it('should return the highest card', () => {
    const highCardRule = new HighCardRule()
    const cards = [new Card('clubs', '2', 2), new Card('hearts', '10', 10), new Card('diamonds', '7', 7)].sort(
      (a: Card, b: Card) => b.value - a.value
    )
    const result = highCardRule.is(cards)
    expect(result).toStrictEqual({ value: 10, flush: 'hearts', secondValue: 7 })
  })
})
