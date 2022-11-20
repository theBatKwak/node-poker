import { IAIController } from '../interfaces/IAIController'
import { AIService } from '../services/AI/AI.service'
import { PlayerMove } from '../models/Player'
import { Card } from '../models/Card'

export class AIController implements IAIController {
  constructor(readonly AIService: AIService) {}
  public getMove(commonCards: Card[], playerCards: Card[]): PlayerMove {
    return 'raise'
  }
}
