import { Card } from "../../models/Card"
import { Hand } from "../../models/Hand"
import { HighestCardRule } from "../../services/rules/HighestCardRule.service"

describe('HighestCardRule', () => {
    it('should return the hand with highest card', () => {
        const winnerHand = new Hand([new Card('hearts', '5', 5), new Card('spades', '3', 3)])
        const looserHand = new Hand([new Card('hearts', '2', 2), new Card('spades', '3', 3)])
        const result = HighestCardRule.apply([winnerHand, looserHand])
        expect(result.winnerHand).toBe(winnerHand)
    })
    it('should return the hand with the second highest card when first ones are equals', () => {
        const winnerHand = new Hand([new Card('hearts', '5', 5), new Card('spades', '4', 4)])
        const looserHand = new Hand([new Card('hearts', '5', 5), new Card('spades', '3', 3)])
        const result = HighestCardRule.apply([winnerHand, looserHand])
        expect(result.winnerHand).toBe(winnerHand)
    })
})
