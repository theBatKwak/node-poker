import { Hand } from "../../models/Hand";
import { PokerRule, RuleResult } from "../Referee.service";

export class HighestCardRule {
    public static apply(hands: Hand[]): RuleResult {
        let bestHand: Hand = hands[0]
        hands.forEach((hand: Hand) => {
            if (hand.getHighestCard().value > bestHand.getHighestCard().value) {
                bestHand = hand
            } else if (hand.getHighestCard().value === bestHand.getHighestCard().value) {
                if (hand.getSecondHighestCard().value > bestHand.getSecondHighestCard().value) {
                    bestHand = hand
                }
            }
        })
        return {
            winnerHand: bestHand,
            value: bestHand.getHighestCard().value
        }
    }
}