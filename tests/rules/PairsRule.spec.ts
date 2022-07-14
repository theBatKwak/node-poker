import { Card } from '../../models/Card'
import { Hand } from '../../models/Hand'
import { PairsRule } from '../../services/rules/PairsRule.service'

describe('PairsRule', () => {
    it('should return hand that has a pair', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('clubs', '4', 4),
            new Card('diamonds', 'J', 11),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '6', 6),
        ])
        const result = PairsRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
    })
    it('should return null if no hands have a pair', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('clubs', '4', 4),
            new Card('diamonds', 'Q', 12),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '6', 6),
        ])
        const result = PairsRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(null)
    })
    it('should return the highest pair if two pairs are available', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('clubs', '4', 4),
            new Card('diamonds', 'J', 11),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '7', 7),
        ])
        const result = PairsRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
    })
    it('should return hand with highest card if the pairs are equal', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('clubs', '9', 9),
            new Card('diamonds', 'J', 11),
        ])
        const looserHand = new Hand([
            new Card('hearts', 'J', 11),
            new Card('hearts', '7', 7),
        ])
        const result = PairsRule.apply([winnerHand, looserHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
    })
    it('should return a pair when served', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('clubs', '5', 5),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('clubs', 'K', 13),
            new Card('diamonds', 'K', 13),
        ])
        const looserHand = new Hand([
            new Card('hearts', 'Q', 12),
            new Card('hearts', 'Q', 12),
        ])
        const result = PairsRule.apply([winnerHand, looserHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
    })
})