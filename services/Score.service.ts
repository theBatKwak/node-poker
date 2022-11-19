import { Card } from '../models/Card'
import { PokerRuleResult } from './rules/PokerRule.service'

export class ScoreService {
  public static getScore(ruleResult: PokerRuleResult, userCards: Card[], commonCards: Card[]): number {
    let value = '0'
    switch (ruleResult.reason) {
      case 'royal flush':
        return 81400000000
      case 'straight flush':
        value = this.getStringFromValue(ruleResult.value)
        return parseInt(8 + value + '00000000')
      case 'four of a kind':
        value = this.getStringFromValue(ruleResult.value)
        const secondValue = ruleResult.secondValue ? this.getStringFromValue(ruleResult.secondValue) : '00'
        return parseInt(7 + value + secondValue + '000000')
    }
    return 0
  }
  private static getStringFromValue(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }
}
