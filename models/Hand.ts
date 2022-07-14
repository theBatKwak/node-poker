import { Card } from "./Card"

export class Hand {
    cards: Card[]
    constructor(cards: Card[]) {
        if (cards.length !== 2) {
            throw new Error('Hand must have 2 cards')
        }
        this.cards = cards
    }
    public getScore(): number {
        return this.cards.reduce((acc, card) => acc + card.value, 0)
    }
}
