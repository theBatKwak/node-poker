import { Card } from "../models/Card";

export type RuleResult = {
    value: number
    flush: string
}

export interface IPokerRule {
    is: (cards: Card[], commonCards: Card[]) => false | RuleResult
}
