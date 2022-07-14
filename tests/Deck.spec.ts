import { Card } from '../models/Card'
import { Deck } from '../models/Deck'

describe('Deck', () => {
    it('should create a deck', () => {
        const deck: Deck = new Deck()
        expect(deck.cards.length).toBe(52)
    })
    it ('should shuffle the deck', () => {
        const deck: Deck = new Deck()
        deck.shuffle()
        expect(deck.cards.length).toBe(52)
    })
    it ('should draw a card', () => {
        const deck: Deck = new Deck()
        deck.shuffle()
        const card: Card = deck.draw()
        expect(card).toBeDefined()
        expect(deck.cards.length).toBe(51)
    })
    it('should draw correct card', () => {
        const deck: Deck = new Deck()
        deck.shuffle()
        const nextCard: Card = deck.cards[0]
        const card: Card = deck.draw()
        expect(card).toEqual(nextCard)
    })
    it ('should throw an error when deck is empty', () => {
        const deck: Deck = new Deck()
        deck.shuffle()
        for (let i = 0; i < 52; i++) {
            deck.draw()
        }
        expect(() => deck.draw()).toThrowError('Deck is empty')
    })
})