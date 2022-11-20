import { Card } from '../models/Card'
import { PokerRuleResult } from './rules/PokerRule.service'

export class ScoreService {
  public static getScore(ruleResult: PokerRuleResult, userCards: Card[], commonCards: Card[]): number {
    let value = this.getStringFromValue(ruleResult.value)
    let secondValue = ruleResult.secondValue ? this.getStringFromValue(ruleResult.secondValue) : '00'
    let sideKick = ruleResult.sideKick ? this.getStringFromValue(ruleResult.sideKick) : '00'
    switch (ruleResult.reason) {
      case 'royal flush':
        return 81400000000
      case 'straight flush':
        return parseInt(8 + value + '00000000')
      case 'four of a kind':
        return parseInt(7 + value + secondValue + '000000')
      case 'full house':
        return parseInt(6 + value + value + value + secondValue + secondValue)
      case 'flush':
        return parseInt(5 + value + secondValue + sideKick + '0000')
      case 'straight':
        return parseInt(4 + value + '00000000')
      case 'three of a kind':
        return parseInt(3 + value + value + value + secondValue + sideKick)
      case 'two pairs':
        return parseInt(2 + value + value + secondValue + secondValue + sideKick)
      case 'one pair':
        return parseInt(1 + value + value + secondValue + sideKick + '00')
      case 'high card':
        return parseInt(0 + value + secondValue + sideKick + '0000')
    }
    return 0
  }
  private static getStringFromValue(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }
}
