import { AIService } from './services/AI/AI.service'
import { AIController } from './controllers/AIController'
import { MetaGameController } from './controllers/MetaGameController'

const aiController: AIController = new AIController(new AIService())
const metaGameController: MetaGameController = new MetaGameController(aiController)
metaGameController.playNGames()

console.log('✅')
