import { Card } from '../models/Card'
import { PokerRuleResult } from './rules/PokerRule.service'

export class ScoreService {
  public static getScore(ruleResult: PokerRuleResult, userCards: Card[], commonCards: Card[]): number {
    let value = '0'
    let secondValue = '00'
    let sideKick = '00'
    switch (ruleResult.reason) {
      case 'royal flush':
        return 81400000000
      case 'straight flush':
        value = this.getStringFromValue(ruleResult.value)
        return parseInt(8 + value + '00000000')
      case 'four of a kind':
        value = this.getStringFromValue(ruleResult.value)
        secondValue = ruleResult.secondValue ? this.getStringFromValue(ruleResult.secondValue) : '00'
        return parseInt(7 + value + secondValue + '000000')
      case 'full house':
        value = this.getStringFromValue(ruleResult.value)
        secondValue = ruleResult.secondValue ? this.getStringFromValue(ruleResult.secondValue) : '00'
        return parseInt(6 + value + value + value + secondValue + secondValue)
      case 'flush':
        value = this.getStringFromValue(ruleResult.value)
        secondValue = ruleResult.secondValue ? this.getStringFromValue(ruleResult.secondValue) : '00'
        sideKick = ruleResult.sideKick ? this.getStringFromValue(ruleResult.sideKick) : '00'
        return parseInt(5 + value + secondValue + sideKick + '0000')
    }
    return 0
  }
  private static getStringFromValue(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }
}
