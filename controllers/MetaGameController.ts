import { GameController } from './GameController'
import { TurnResult } from '../services/Referee.service'

export class MetaGameController {
  private nGames: number
  private nPlayers: number
  constructor(nGames: number, nPlayers: number) {
    this.nGames = nGames
    this.nPlayers = nPlayers
  }
  public run(): TurnResult[] {
    const gamesResults: TurnResult[] = []
    for (let i = 0; i < this.nGames; i++) {
      console.log(`Game ${i}`)
      const game = new GameController(this.nPlayers)
      gamesResults.push(game.playGame())
    }
    return gamesResults
  }
}
