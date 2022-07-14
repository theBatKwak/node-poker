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
    public getHighestCard(): Card {
        return this.cards.sort((a, b) => b.value - a.value)[0]
    }
    public getSecondHighestCard(): Card {
        return this.cards.sort((a, b) => b.value - a.value)[1]
    }
}
