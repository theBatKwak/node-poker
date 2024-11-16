import { IAIController } from '../interfaces/IAIController'
import { AIService } from '../services/AI/AI.service'
import { PlayerMove } from '../models/Player'
import { Card } from '../models/Card'
import { ScoreService } from '../services/Score.service'
import { PokerRule, PokerRuleResult } from '../services/rules/PokerRule.service'

export class AIController implements IAIController {
  constructor(readonly AIService: AIService) {}
  public getMove(commonCards: Card[], playerCards: Card[]): PlayerMove {
    const currentResult: PokerRuleResult = new PokerRule().have(playerCards, commonCards)
    const cardsScore = ScoreService.getScore(currentResult, playerCards, commonCards)
    console.log(cardsScore)
    return 'raise'
  }
}
