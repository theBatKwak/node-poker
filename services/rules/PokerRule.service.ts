import { Card } from "../../models/Card";
import { Hand } from "../../models/Hand";
import { RuleResult } from "../Referee.service";

export type NewRuleResult = {
    winnerHand: Hand | null,
    reason: 'royal flush' | 'straight flush' | 'four of a kind' | 'full house' | 'flush' | 'straight' | 'three of a kind' | 'two pairs' | 'one pair' | 'high card' | '',
    value: number
}

const handsRanks = {
    'royal flush': 10,
    'straight flush': 9,
    'four of a kind': 8,
    'full house': 7,
    'flush': 6,
    'straight': 5,
    'three of a kind': 4,
    'two pairs': 3,
    'one pair': 2,
    'high card': 1,
    '': 0
}

export class PokerRule {
    public static apply(hands: Hand[], commonCards: Card[]): NewRuleResult {
        let bestHand: NewRuleResult = {
            winnerHand: null,
            reason: '',
            value: 0
        }
        hands.forEach((hand: Hand) => {
            const flatCards = hand.cards.concat(commonCards)
            flatCards.sort((a: Card, b: Card) => a.value - b.value)
            // Royal Flush & Straight Flush
            const isStraightFlush = this.isStraightFlush(flatCards)
            
            if (isStraightFlush && isStraightFlush !== true) {
                if (isStraightFlush.value === 14) {
                    bestHand = this.assignBetterHand(bestHand, {
                        winnerHand: hand,
                        reason: 'royal flush',
                        value: isStraightFlush.value
                    })
                } else {
                    bestHand = this.assignBetterHand(bestHand, {
                        winnerHand: hand,
                        reason: 'straight flush',
                        value: isStraightFlush.value
                    })
                }
                return
            }
            // Four of a Kind
            const isFourOfAKind = this.isFourOfAKind(flatCards)
            if (isFourOfAKind && isFourOfAKind !== true) {
                bestHand = this.assignBetterHand(bestHand, {
                    winnerHand: hand,
                    reason: 'four of a kind',
                    value: isFourOfAKind
                })
                return
            }
            // Full House
            const isFullHouse = this.isFullHouse(flatCards)
            if (isFullHouse && isFullHouse !== true) {
                bestHand = this.assignBetterHand(bestHand, {
                    winnerHand: hand,
                    reason: 'full house',
                    value: isFullHouse
                })
                return
            }
            // Flush
            const isFlush = this.isFlush(flatCards)
            if (isFlush && isFlush !== true) {
                bestHand = this.assignBetterHand(bestHand, {
                    winnerHand: hand,
                    reason: 'flush',
                    value: isFlush
                })
                return
            }
            // Straight
            const isStraight = this.isStraight(flatCards)
            if (isStraight && isStraight !== true) {
                bestHand = this.assignBetterHand(bestHand, {
                    winnerHand: hand,
                    reason: 'straight',
                    value: isStraight
                })
                return
            }
            // Three of a Kind
            const isThreeOfAKind = this.isThreeOfAKind(flatCards)
            if (isThreeOfAKind && isThreeOfAKind !== true) {
                bestHand = this.assignBetterHand(bestHand, {
                    winnerHand: hand,
                    reason: 'three of a kind',
                    value: isThreeOfAKind
                })
                return
            }
            // Two Pairs
            const isTwoPairs = this.isTwoPairs(flatCards)
            if (isTwoPairs && isTwoPairs !== true) {
                bestHand = this.assignBetterHand(bestHand, {
                    winnerHand: hand,
                    reason: 'two pairs',
                    value: isTwoPairs
                })
                return
            }
            // One Pair
            const isOnePair = this.isPair(flatCards)
            if (isOnePair && isOnePair !== true) {
                bestHand = this.assignBetterHand(bestHand, {
                    winnerHand: hand,
                    reason: 'one pair',
                    value: isOnePair
                })
                return
            }
            // High Card
            const handMaxValue = this.getHighCardValue(flatCards)
            bestHand = this.assignBetterHand(bestHand, {
                winnerHand: hand,
                reason: 'high card',
                value: handMaxValue
            })
        })
        return bestHand
    }
    private static assignBetterHand(bestHand: NewRuleResult, hand: NewRuleResult): NewRuleResult {
        if (handsRanks[bestHand.reason] < handsRanks[hand.reason]) {
            return hand
        } else if (handsRanks[bestHand.reason] === handsRanks[hand.reason]) {
            return bestHand.value > hand.value ? bestHand : hand
        } else {
            return bestHand
        }
    }
    private static isStraightFlush(cards: Card[]): {flush: string, value: number} | boolean {
        const isFlush = this.isFlush(cards)
        
        if(isFlush && typeof isFlush === 'number') {
            
            const straight = this.isStraight(cards)
            if (straight && typeof straight === 'number') {
                
                return {
                    flush: isFlush.toString(),
                    value: straight
                }
            }
        }
        return false
    }
    private static isStraight(cards: Card[]): number | boolean {
        for(let i = 0; i < cards.length -4; i++) {
            if (
                cards[i].value === cards[i + 1].value - 1 &&
                cards[i + 1].value === cards[i + 2].value - 1 &&
                cards[i + 2].value === cards[i + 3].value - 1 &&
                cards[i + 3].value === cards[i + 4].value - 1
                ) {
                return cards[i + 4].value
            }
        }
        return false
    }
    private static isFlush(cards: Card[]): number | boolean {
        const diamonds = cards.filter((card: Card) => card.suit === 'diamonds')
        if (diamonds.length >= 5) return diamonds[4].value // + ' diamonds'
        const spades = cards.filter((card: Card) => card.suit === 'spades')
        if (spades.length >= 5) return spades[4].value // + ' spades'
        const hearts = cards.filter((card: Card) => card.suit === 'hearts')
        if (hearts.length >= 5) return hearts[4].value // + ' hearts'
        const clubs = cards.filter((card: Card) => card.suit === 'clubs')
        if (clubs.length >= 5) return clubs[4].value // + ' clubs'
        return false
    }
    private static isFourOfAKind(cards: Card[]): number | boolean {
        for (let i = 0; i < cards.length - 3; i++) {
            if (cards[i].value === cards[i + 1].value && cards[i].value === cards[i + 2].value && cards[i].value === cards[i + 3].value) {
                return cards[i].value
            }
        }
        return false
    }
    private static isThreeOfAKind(cards: Card[]): number | boolean {
        for (let i = 0; i < cards.length - 2; i++) {
            if (cards[i].value === cards[i + 1].value && cards[i].value === cards[i + 2].value) {
                return cards[i].value
            }
        }
        return false
    }
    private static isPair(cards: Card[]): number | boolean {
        for (let i = 0; i < cards.length - 1; i++) {
            if (cards[i].value === cards[i + 1].value) {
                return cards[i].value
            }
        }
        return false
    }
    private static isFullHouse(cards: Card[]): number | boolean {
        const threeOfAKind = this.isThreeOfAKind(cards)
        if (threeOfAKind) {
            const remainingCards = cards.filter((card: Card) => card.value !== threeOfAKind)
            const pair = this.isPair(remainingCards)
            return pair ? pair : false
        }
        return false
    }
    private static isTwoPairs(cards: Card[]): number | boolean {
        const pair1 = this.isPair(cards)
        if (pair1) {
            const remainingCards = cards.filter((card: Card) => card.value !== pair1)
            const pair2 = this.isPair(remainingCards)
            if (pair2) {
                return pair1 > pair2 ? pair1 : pair2
            }
            return false
        }
        return false
    }
    private static getHighCardValue(cards: Card[]): number {
        return cards[cards.length - 1].value
    }
}