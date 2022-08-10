import { Card } from '../../models/Card'
import { StraightRule } from '../../services/rules/StraightRule.service'

describe('StraightRule', () => {
    it('should return false if less than 5 cards are provided', () => {
        const straightRule = new StraightRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5)
        ]
        const result = straightRule.is([cards[0], cards[1]], [cards[2], cards[3]])
        expect(result).toBe(false)
    })
    it('should return false if no cards are provided', () => {
        const straightRule = new StraightRule()
        const result = straightRule.is([], [])
        expect(result).toBe(false)
    })
    it('should return a straight with 5 cards provided', () => {
        const straightRule = new StraightRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11)
        ]
        const commonCards = [
            new Card('clubs', '9', 9),
            new Card('diamonds', 'Q', 12),
            new Card('clubs', '8', 8)
        ]
        const result = straightRule.is(cards, commonCards)
        expect(result).toStrictEqual({ value: 12, flush: 'diamonds' })
    })
    it('should return a straight with 6 cards provided', () => {
        const straightRule = new StraightRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11)
        ]
        const commonCards = [
            new Card('clubs', '9', 9),
            new Card('diamonds', 'Q', 12),
            new Card('clubs', '8', 8),
            new Card('clubs', '7', 7)
        ]
        const result = straightRule.is(cards, commonCards)
        expect(result).toStrictEqual({ value: 12, flush: 'diamonds' })
    })
    it('should return a straight with 7 cards provided', () => {
        const straightRule = new StraightRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11)
        ]
        const commonCards = [
            new Card('clubs', '9', 9),
            new Card('diamonds', 'Q', 12),
            new Card('clubs', '8', 8),
            new Card('clubs', '7', 7),
            new Card('clubs', '6', 6)
        ]
        const result = straightRule.is(cards, commonCards)
        expect(result).toStrictEqual({ value: 12, flush: 'diamonds' })
    })
    it('should return false when 5 cards deck with no straight is provided', () => {
        const straightRule = new StraightRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11)
        ]
        const commonCards = [
            new Card('clubs', '9', 9),
            new Card('diamonds', 'K', 13),
            new Card('clubs', '8', 8)
        ]
        const result = straightRule.is(cards, commonCards)
        expect(result).toBe(false)
    })
    it('should return false when 6 cards deck with no straight is provided', () => {
        const straightRule = new StraightRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11)
        ]
        const commonCards = [
            new Card('clubs', '9', 9),
            new Card('diamonds', 'K', 13),
            new Card('clubs', '8', 8),
            new Card('clubs', '2', 2)
        ]
        const result = straightRule.is(cards, commonCards)
        expect(result).toBe(false)
    })
    it('should return false when  cards deck with no straight is provided', () => {
        const straightRule = new StraightRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11)
        ]
        const commonCards = [
            new Card('clubs', '9', 9),
            new Card('diamonds', 'K', 13),
            new Card('clubs', '8', 8),
            new Card('clubs', '2', 2),
            new Card('clubs', 'A', 14)
        ]
        const result = straightRule.is(cards, commonCards)
        expect(result).toBe(false)
    })
})