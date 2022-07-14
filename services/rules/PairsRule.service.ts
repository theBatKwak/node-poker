import { Card } from '../../models/Card'
import { Hand } from '../../models/Hand'
import { PokerRule, RuleResult } from '../Referee.service'
import { HighestCardRule } from './HighestCardRule.service'

export class PairsRule {
    public static apply(hands: Hand[], commonCards: Card[]): RuleResult {
        let bestHandThatHasPair: Hand | null = null
        let bestPairValue: number = 0
        hands.forEach((hand: Hand) => {
            if (this.isServedPair(hand)) {
                if (hand.getHighestCard().value > bestPairValue) {
                    bestHandThatHasPair = hand
                    bestPairValue = hand.getHighestCard().value
                }
            } else {
                hand.cards.forEach((card: Card) => {
                    const pairFound = commonCards.find((commonCard: Card) => commonCard.value === card.value)
                    if (pairFound && pairFound.value > bestPairValue) {
                        bestHandThatHasPair = hand
                        bestPairValue = pairFound.value
                    } else if (bestHandThatHasPair && pairFound && pairFound.value === bestPairValue) {
                        const highestCardWinner = HighestCardRule.apply([bestHandThatHasPair, hand])
                        if (highestCardWinner.winnerHand === hand) {
                            bestHandThatHasPair = hand
                            bestPairValue = pairFound.value
                        }
                    }
                })
            }
        })
        return {
            winnerHand:bestHandThatHasPair,
            value: bestPairValue
        }
    }
    private static isServedPair(hand: Hand): boolean {
        return hand.cards[0].value === hand.cards[1].value
    }
}