import { Card } from "../../models/Card";

export class DeckGenerator {
    public static init(): Card[] {
        const cards: Card[] = []
        cards.push(new Card('hearts', '2', 2))
        cards.push(new Card('hearts', '3', 3))
        cards.push(new Card('hearts', '4', 4))
        cards.push(new Card('hearts', '5', 5))
        cards.push(new Card('hearts', '6', 6))
        cards.push(new Card('hearts', '7', 7))
        cards.push(new Card('hearts', '8', 8))
        cards.push(new Card('hearts', '9', 9))
        cards.push(new Card('hearts', '10', 10))
        cards.push(new Card('hearts', 'J', 11))
        cards.push(new Card('hearts', 'Q', 12))
        cards.push(new Card('hearts', 'K', 13))
        cards.push(new Card('hearts', 'A', 14))
        cards.push(new Card('diamonds', '2', 2))
        cards.push(new Card('diamonds', '3', 3))
        cards.push(new Card('diamonds', '4', 4))
        cards.push(new Card('diamonds', '5', 5))
        cards.push(new Card('diamonds', '6', 6))
        cards.push(new Card('diamonds', '7', 7))
        cards.push(new Card('diamonds', '8', 8))
        cards.push(new Card('diamonds', '9', 9))
        cards.push(new Card('diamonds', '10', 10))
        cards.push(new Card('diamonds', 'J', 11))
        cards.push(new Card('diamonds', 'Q', 12))
        cards.push(new Card('diamonds', 'K', 13))
        cards.push(new Card('diamonds', 'A', 14))
        cards.push(new Card('spades', '2', 2))
        cards.push(new Card('spades', '3', 3))
        cards.push(new Card('spades', '4', 4))
        cards.push(new Card('spades', '5', 5))
        cards.push(new Card('spades', '6', 6))
        cards.push(new Card('spades', '7', 7))
        cards.push(new Card('spades', '8', 8))
        cards.push(new Card('spades', '9', 9))
        cards.push(new Card('spades', '10', 10))
        cards.push(new Card('spades', 'J', 11))
        cards.push(new Card('spades', 'Q', 12))
        cards.push(new Card('spades', 'K', 13))
        cards.push(new Card('spades', 'A', 14))
        cards.push(new Card('clubs', '2', 2))
        cards.push(new Card('clubs', '3', 3))
        cards.push(new Card('clubs', '4', 4))
        cards.push(new Card('clubs', '5', 5))
        cards.push(new Card('clubs', '6', 6))
        cards.push(new Card('clubs', '7', 7))
        cards.push(new Card('clubs', '8', 8))
        cards.push(new Card('clubs', '9', 9))
        cards.push(new Card('clubs', '10', 10))
        cards.push(new Card('clubs', 'J', 11))
        cards.push(new Card('clubs', 'Q', 12))
        cards.push(new Card('clubs', 'K', 13))
        cards.push(new Card('clubs', 'A', 14))
        return cards
    }
}