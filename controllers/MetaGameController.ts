import { GameController } from './GameController'
import { TurnResult } from '../services/Referee.service'
import { IMetaGameController } from '../interfaces/IMetaGameController'
import { AIController } from './AIController'
import { AIService } from '../services/AI/AI.service'

export class MetaGameController implements IMetaGameController {
  constructor(readonly AI: AIController) {}
  public playNGames(count: number = 1): void {
    for (let i = 0; i <= count; i++) {
      new GameController(2, this.AI).playGame()
    }
  }
}
