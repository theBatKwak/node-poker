import { Card } from '../models/Card'
import { Hand } from '../models/Hand'
import { Player } from '../models/Player'
import { HighestCardRule } from './rules/HighestCardRule.service'
import { PairsRule } from './rules/PairsRule.service'

export interface TurnResult {
    winner: Player | undefined
    reason: string
}

export interface RuleResult {
    winnerHand: Hand | null
    value: string | number
}

export interface PokerRule {
    apply: (hands: Hand[], commonCards?: Card[]) => RuleResult
}

export class Referee {
    public players: Player[]
    public commonCards: Card[]
    constructor(players: Player[], commonCards: Card[]) {
        if (players.length < 2) {
            throw new Error('There must be at least 2 players')
        }
        if (commonCards.length < 5) {
            throw new Error('There must be at least 5 common cards')
        }
        this.players = players
        this.commonCards = commonCards
    }
    public getWinnerHand(): TurnResult {
        const hands: Hand[] = this.players.map((player: Player) => player.hand)
        const pairsWinnerHand: RuleResult = PairsRule.apply(hands, this.commonCards)
        if (pairsWinnerHand && pairsWinnerHand.winnerHand) {
            return {
                winner: this.getWinnerPlayerFromHand(pairsWinnerHand.winnerHand),
                reason: 'Pair of ' + pairsWinnerHand.value
            }
        }
        const highestCardWinner: RuleResult = HighestCardRule.apply(hands)
        if (highestCardWinner.winnerHand) {
            return {
                winner: this.getWinnerPlayerFromHand(highestCardWinner.winnerHand),
                reason: 'Highest card : ' + highestCardWinner.value
            }
        }
        return {
            winner: undefined,
            reason: 'No one won'
        }
    }
    private getWinnerPlayerFromHand(hand: Hand): Player | undefined {
        return this.players.find((player: Player) => player.hand === hand)
    }
}