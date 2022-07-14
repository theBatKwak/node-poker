import { Card } from '../models/Card'
import { Hand } from '../models/Hand'
import { Player } from '../models/Player'
import { HighestCardRule } from './rules/HighestCardRule.service'
import { PairsRule } from './rules/PairsRule.service'
import { NewRuleResult, PokerRule } from './rules/PokerRule.service'

export interface TurnResult {
    winner: Player | undefined
    loosers: Player[]
    reason: string,
    value: number
}

export interface RuleResult {
    winnerHand: Hand | null
    value: string | number
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
        const turnResult: NewRuleResult = PokerRule.apply(hands, this.commonCards)
        if (turnResult.winnerHand && turnResult.value) {
            return {
                winner: this.getWinnerPlayerFromHand(turnResult.winnerHand),
                reason: turnResult.reason,
                value: turnResult.value,
                loosers: this.getLoosersPlayersFromWinnerHand(turnResult.winnerHand),
            }
        } else {
            throw new Error('No winner found')
        }
    }
    private getWinnerPlayerFromHand(hand: Hand): Player | undefined {
        return this.players.find((player: Player) => player.hand === hand)
    }
    private getLoosersPlayersFromWinnerHand(winnerHand: Hand): Player[] {
        return this.players.filter((player: Player) => player.hand !== winnerHand)
    }
}