import { Card } from '../models/Card'

export type RuleResult = {
  value: number
  secondValue?: number
  sideKick?: number
  flush: 'hearts' | 'spades' | 'clubs' | 'diamonds'
}

export interface IPokerRule {
  is: (cards: Card[], commonCards: Card[]) => false | RuleResult
}
