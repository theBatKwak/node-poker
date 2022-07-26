import { GameController } from './controllers/GameController'
import { MetaGameController } from './controllers/MetaGameController'
import { StatsService } from './services/stats/Stats.service'

// console.log(deck.cards)

const startTS = Date.now()
const metaGameController = new MetaGameController(10000, 8)
const results = metaGameController.run()
const endTS = Date.now()
const total = endTS - startTS
console.log(`Total time: ${total}ms`)
console.log(StatsService.byReason(results, 'percent'))

console.log('✅')
