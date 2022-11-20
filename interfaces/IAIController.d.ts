import { AIService } from '../services/AI/AI.service'
import { PlayerMove } from '../models/Player'
import { Card } from '../models/Card'

export interface IAIController {
  AIService: AIService
  getMove: (commonCards: Card[], playerCards: Card[]) => PlayerMove
}
