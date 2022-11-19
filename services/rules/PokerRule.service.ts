import { Card } from '../../models/Card'
import { FlushRule } from './FlushRule.service'
import { FourOfAKindRule } from './FourOfAKindRule.service'
import { FullHouseRule } from './FullHouseRule.service'
import { HighCardRule } from './HighCardRule.service'
import { OnePairRule } from './OnePairRule.service'
import { StraightRule } from './StraightRule.service'
import { ThreeOfAKindRule } from './ThreeOfAKindRule.service'
import { TwoPairsRule } from './TwoPairsRule.service'

export type PokerRuleResult = {
  value: number
  secondValue?: number
  sideKick?: number
  flush?: 'hearts' | 'spades' | 'diamonds' | 'clubs'
  reason: PokerRuleReason
}

export type PokerRuleReason =
  | 'high card'
  | 'one pair'
  | 'two pairs'
  | 'three of a kind'
  | 'straight'
  | 'flush'
  | 'full house'
  | 'four of a kind'
  | 'straight flush'
  | 'royal flush'
  | 'no rule'

export class PokerRule {
  private onePairRule: OnePairRule
  private twoPairsRule: TwoPairsRule
  private threeOfAKindRule: ThreeOfAKindRule
  private fourOfAKindRule: FourOfAKindRule
  private straightRule: StraightRule
  private flushRule: FlushRule
  private fullHouseRule: FullHouseRule
  private highCardRule: HighCardRule

  constructor() {
    this.onePairRule = new OnePairRule()
    this.twoPairsRule = new TwoPairsRule()
    this.threeOfAKindRule = new ThreeOfAKindRule()
    this.fourOfAKindRule = new FourOfAKindRule()
    this.straightRule = new StraightRule()
    this.flushRule = new FlushRule()
    this.fullHouseRule = new FullHouseRule()
    this.highCardRule = new HighCardRule()
  }

  public have(cards: Card[], commonCards: Card[]): PokerRuleResult {
    const flatCards = [...cards, ...commonCards].sort((a: Card, b: Card) => b.value - a.value)
    if (flatCards.length >= 5) {
      const isFlush = this.flushRule.is(flatCards)
      const isStraight = this.straightRule.is(flatCards)
      if (isFlush && isStraight) {
        if (isStraight.value === 14) {
          return {
            value: 14,
            reason: 'royal flush',
            flush: isFlush.flush
          }
        } else {
          return {
            value: isStraight.value,
            reason: 'straight flush',
            flush: isFlush.flush
          }
        }
      }
    }
    if (flatCards.length >= 4) {
      const isFourOfAKind = this.fourOfAKindRule.is(flatCards)
      if (isFourOfAKind) {
        const result: PokerRuleResult = {
          value: isFourOfAKind.value,
          reason: 'four of a kind'
        }
        if (isFourOfAKind.secondValue) result.secondValue = isFourOfAKind.secondValue
        return result
      }
    }
    if (flatCards.length >= 5) {
      const isFullHouse = this.fullHouseRule.is(flatCards)
      if (isFullHouse) {
        return {
          value: isFullHouse.value,
          secondValue: isFullHouse.secondValue,
          reason: 'full house'
        }
      }
      const isFlush = this.flushRule.is(flatCards)
      if (isFlush) {
        return {
          value: isFlush.value,
          secondValue: isFlush.secondValue,
          sideKick: isFlush.sideKick,
          reason: 'flush',
          flush: isFlush.flush
        }
      }
      const isStraight = this.straightRule.is(flatCards)
      if (isStraight) {
        return {
          value: isStraight.value,
          reason: 'straight'
        }
      }
    }
    if (flatCards.length >= 3) {
      const isThreeOfAKind = this.threeOfAKindRule.is(flatCards)
      if (isThreeOfAKind) {
        const result: PokerRuleResult = {
          value: isThreeOfAKind.value,
          reason: 'three of a kind'
        }
        if (isThreeOfAKind.secondValue) result.secondValue = isThreeOfAKind.secondValue
        if (isThreeOfAKind.sideKick) result.sideKick = isThreeOfAKind.sideKick
        return result
      }
    }
    if (flatCards.length >= 4) {
      const isTwoPairs = this.twoPairsRule.is(flatCards)
      if (isTwoPairs) {
        const result: PokerRuleResult = {
          value: isTwoPairs.value,
          secondValue: isTwoPairs.secondValue,
          reason: 'two pairs'
        }
        if (isTwoPairs.sideKick) result.sideKick = isTwoPairs.sideKick
        return result
      }
    }
    if (flatCards.length >= 2) {
      const isOnePair = this.onePairRule.is(flatCards)
      if (isOnePair) {
        const result: PokerRuleResult = {
          value: isOnePair.value,
          reason: 'one pair'
        }
        if (isOnePair.secondValue) result.secondValue = isOnePair.secondValue
        if (isOnePair.sideKick) result.sideKick = isOnePair.sideKick
        return result
      }
    }
    const highCard = this.highCardRule.is(flatCards)
    if (highCard) {
      const result: PokerRuleResult = {
        value: highCard.value,
        secondValue: highCard.secondValue,
        reason: 'high card'
      }
      if (highCard.sideKick) result.sideKick = highCard.sideKick
      return result
    }
    return { value: 0, reason: 'no rule' }
  }
}
