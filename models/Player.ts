import { Hand } from './Hand'

export type PlayerStatus = 'active' | 'folded' | 'all-in' | 'out'

export class Player {
    public name: String
    public hand: Hand
    public status: PlayerStatus
    constructor(name: String, hand: Hand) {
        this.name = name
        this.hand = hand
        this.status = 'active'
    }
}