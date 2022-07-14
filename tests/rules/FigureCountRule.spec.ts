import { Card } from "../../models/Card"
import { Hand } from "../../models/Hand"
import { PokerRule } from "../../services/rules/PokerRule.service"

describe('FigureCountRule', () => {
    it('should recignize a royal flush', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', 'Q', 12),
            new Card('spades', '3', 3),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('clubs', 'A', 14),
            new Card('clubs', 'K', 13),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '6', 6),
        ])
        const result = PokerRule.apply([winnerHand, looserHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
        expect(result.reason).toBe('royal flush')
    })
    it('should recignize a straight flush', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', 'Q', 12),
            new Card('spades', '3', 3),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('clubs', '9', 9),
            new Card('clubs', 'K', 13),
        ])
        const looserHand = new Hand([
            new Card('spades', 'Q', 12),
            new Card('hearts', 'J', 11),
        ])
        const result = PokerRule.apply([winnerHand, looserHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
        expect(result.reason).toBe('straight flush')
    })
    it ('should recognize a four of a kind', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('spades', '3', 3),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('clubs', '3', 3),
            new Card('clubs', '3', 3),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '6', 6),
        ])
        const result = PokerRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
        expect(result.reason).toBe('four of a kind')
    })
    it ('should recognize a four of a full house', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('spades', '3', 3),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('clubs', '3', 3),
            new Card('clubs', 'J', 11),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '6', 6),
        ])
        const result = PokerRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
        expect(result.reason).toBe('full house')
    })
    it ('should recognize a flush', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('spades', '3', 3),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('clubs', '3', 3),
            new Card('clubs', 'Q', 12),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '6', 6),
        ])
        const result = PokerRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
        expect(result.reason).toBe('flush')
    })
    it('should regognize a straight', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', 'Q', 12),
            new Card('spades', '3', 3),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('hearts', '9', 9),
            new Card('diamonds', 'K', 13),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '6', 6),
        ])
        const result = PokerRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
        expect(result.reason).toBe('straight')
    })    
    it('should regognize a three of a kind', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('spades', '3', 3),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('hearts', '3', 3),
            new Card('diamonds', 'K', 13),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '6', 6),
        ])
        const result = PokerRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
        expect(result.reason).toBe('three of a kind')
    })
    it('should regognize two pairs with one on river', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('spades', '3', 3),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('hearts', 'J', 11),
            new Card('diamonds', 'K', 13),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '6', 6),
        ])
        const result = PokerRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
        expect(result.reason).toBe('two pairs')
    })
    it('should regognize two pairs in hand', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('spades', '4', 4),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('hearts', 'J', 11),
            new Card('diamonds', '7', 7),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '4', 4),
        ])
        const result = PokerRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
        expect(result.value).toBe(11)
        expect(result.reason).toBe('two pairs')
    })
    it('should regognize one served pair', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('spades', '4', 4),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('hearts', 'A', 14),
            new Card('diamonds', 'A', 14),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '4', 4),
        ])
        const result = PokerRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
        expect(result.value).toBe(14)
        expect(result.reason).toBe('one pair')
    })
    it('should regognize one pair', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('spades', '4', 4),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('hearts', 'J', 11),
            new Card('diamonds', 'A', 14),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '4', 4),
        ])
        const result = PokerRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
        expect(result.value).toBe(11)
        expect(result.reason).toBe('one pair')
    })
    it('should regognize high card', () => {
        const commonCards = [
            new Card('clubs', '10', 10),
            new Card('clubs', 'J', 11),
            new Card('clubs', '3', 3),
            new Card('spades', '4', 4),
            new Card('clubs', '7', 7)
        ]
        const winnerHand = new Hand([
            new Card('hearts', 'Q', 12),
            new Card('diamonds', 'A', 14),
        ])
        const looserHand = new Hand([
            new Card('spades', '2', 2),
            new Card('hearts', '6', 6),
        ])
        const result = PokerRule.apply([looserHand, winnerHand], commonCards)
        expect(result.winnerHand).toBe(winnerHand)
        expect(result.value).toBe(14)
        expect(result.reason).toBe('high card')
    })
})
