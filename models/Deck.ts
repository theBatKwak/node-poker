import { DeckGenerator } from "../services/deck/DeckGenerator.service"
import { Card } from "./Card"

export class Deck {
    public cards: Card[]
    constructor() {
        this.cards = DeckGenerator.init()
    }
    public shuffle(): void {
        this.cards = this.cards.sort(() => Math.random() - 0.5)
    }
    public draw(): Card {
        if (this.cards.length === 0) {
            throw new Error('Deck is empty')
        }
        const card = this.cards.shift()
        if (card) {
            return card
        } else {
            throw new Error('Deck is empty')
        }
    }
    public getFlop(): Card[] {
        this.draw()
        return [this.draw(), this.draw(), this.draw()]
    }
    public getTurn(): Card[] {
        this.draw()
        return [this.draw()]
    }
    public getRiver(): Card[] {
        this.draw()
        return [this.draw()]
    }
}