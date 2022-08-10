import { IPokerRule, RuleResult } from "../../interfaces/IPokerRule";
import { Card } from "../../models/Card";

/**
 * Straight rule class.
 * Returns true id any of the cards in the hand is a straight.
 */
export class StraightRule implements IPokerRule {
    public is(cards: Card[], commonCards: Card[]): false | RuleResult {
        const flatCards = [...cards, ...commonCards]
        if (flatCards.length < 5) {
            return false
        }
        flatCards.sort((a: Card, b: Card) => b.value - a.value)
        for(let i = 0; i < flatCards.length; i++) {
            if (i >= flatCards.length - 4) return false
            if (
                flatCards[i].value === flatCards[i + 1].value + 1 &&
                flatCards[i + 1].value === flatCards[i + 2].value + 1 &&
                flatCards[i + 2].value === flatCards[i + 3].value + 1 &&
                flatCards[i + 3].value === flatCards[i + 4].value + 1
                ) {
                return {value: flatCards[i].value, flush: flatCards[i].suit}
            }
        }
        return false
    }
}