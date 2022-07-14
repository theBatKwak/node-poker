import { Card } from "../models/Card"
import { Hand } from "../models/Hand"

describe('Hand', () => {
    it('should create a hand', () => {
        const hand = new Hand([new Card('hearts', '2', 2), new Card('hearts', '2', 2)])
        expect(hand.cards.length).toBe(2)
    })
    it('should throw an error when hand is not created with 2 cards', () => {
        expect(() => new Hand([new Card('hearts', '2', 2)])).toThrowError('Hand must have 2 cards')
    })
    it('should get the score of the hand', () => {
        const hand = new Hand([new Card('hearts', '2', 2), new Card('spades', '2', 2)])
        expect(hand.getScore()).toBe(4)
    })
})