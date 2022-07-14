import { Card } from "../models/Card"

describe('Card', () => {
    it('should create a card', () => {
        const card = new Card('hearts', '2', 2)
        expect(card.suit).toBe('hearts')
        expect(card.figure).toBe('2')
        expect(card.value).toBe(2)
    })
})