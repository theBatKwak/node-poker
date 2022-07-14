import { Card } from '../models/Card'
import { DeckGenerator } from '../services/deck/DeckGenerator.service'

describe('DeckGenerator', () => {
    it('should generate a 52 length deck', () => {
        const deck: Card[] = DeckGenerator.init()
        expect(deck.length).toBe(52)
    })
})