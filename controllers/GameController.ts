import { Player } from "../models/Player"
import { Card } from "../models/Card"
import { Deck } from "../models/Deck"
import { Hand } from "../models/Hand"
import { TurnResult } from "../services/Referee.service"
import { Referee } from "../services/Referee.service"

export type GameState = "pre-flop" | "flop" | "turn" | "river" | "showdown"

export class GameController {
    private players: Player[] = []
    private commonCards: Card[] = []
    private deck: Deck = new Deck()
    public gameState: string = "pre-flop"
    constructor(nPlayers: number = 2) {
        this.deck.shuffle()
        if (nPlayers < 2) {
            throw new Error("There must be at least 2 players")
        }
        for(let i = 0; i < nPlayers; i++) {
            this.players.push(new Player(`player ${i}`, new Hand([this.deck.draw(), this.deck.draw()])))
        }
    }
    public generateFullCommonCards(): void {
        this.commonCards = [...this.deck.getFlop(), ...this.deck.getTurn(), ...this.deck.getRiver()]
    }
    public generateGameResults(): TurnResult {
        const referee = new Referee(this.players, this.commonCards)
        return referee.getWinnerHand()
    }
}