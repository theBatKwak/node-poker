import { Card } from '../../models/Card'
import { FlushRule } from '../../services/rules/FlushRule.service'

describe('FlushRule', () => {
    it('should return false if less than 5 cards are provided', () => {
        const straightRule = new FlushRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11)
        ]
        const commonCards = [
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5)
        ]
        const result = straightRule.is([cards[0], cards[1]], [cards[2], cards[3]])
        expect(result).toBe(false)
    }) 
    it('should return a correct flush when 5 cards with flush is provided', () => {
        const straightRule = new FlushRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'A', 14)
        ]
        const commonCards = [
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5),
            new Card('clubs', 'J', 11)
        ]
        const result = straightRule.is(cards, commonCards)
        expect(result).toStrictEqual({ value: 14, flush: 'clubs' })
    })
    it('should return false when 5 cards with no flush cards is provided', () => {
        const straightRule = new FlushRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11)
        ]
        const commonCards = [
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5),
            new Card('hearts', 'A', 14)
        ]
        const result = straightRule.is(cards, commonCards)
        expect(result).toBe(false)
    })
    it('should return a correct flush when 6 cards with flush is provided', () => {
        const straightRule = new FlushRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'Q', 12)
        ]
        const commonCards = [
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5),
            new Card('clubs', 'J', 11),
            new Card('hearts', 'J', 11)
        ]
        const result = straightRule.is(cards, commonCards)
        expect(result).toStrictEqual({ value: 12, flush: 'clubs' })
    })
    it('should return false when 6 cards with no flush cards is provided', () => {
        const straightRule = new FlushRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11)
        ]
        const commonCards = [
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5),
            new Card('hearts', 'A', 14),
            new Card('hearts', '2', 2)
        ]
        const result = straightRule.is(cards, commonCards)
        expect(result).toBe(false)
    })
    it('should return a correct flush when 7 cards with flush is provided', () => {
        const straightRule = new FlushRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'Q', 12)
        ]
        const commonCards = [
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5),
            new Card('clubs', 'J', 11),
            new Card('clubs', 'A', 14),
            new Card('hearts', 'J', 11)
        ]
        const result = straightRule.is(cards, commonCards)
        expect(result).toStrictEqual({ value: 14, flush: 'clubs' })
    })
    it('should return false when 7 cards with no flush cards is provided', () => {
        const straightRule = new FlushRule()
        const cards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11)
        ]
        const commonCards = [
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5),
            new Card('hearts', 'A', 14),
            new Card('spades', 'A', 14),
            new Card('hearts', '2', 2)
        ]
        const result = straightRule.is(cards, commonCards)
        expect(result).toBe(false)
    })
})