import { TurnResult } from "../Referee.service"
export type StatsByReason = {
    'high card': number,
    'one pair': number,
    'two pairs': number,
    'three of a kind': number,
    'straight': number,
    'flush': number,
    'full house': number,
    'four of a kind': number,
    'straight flush': number,
    'royal flush': number
}
export class StatsService {
    public static byReason(turnResults: TurnResult[], format: 'percent' | 'absolute' = 'percent'): StatsByReason {
        const result: StatsByReason = {
            'high card': 0,
            'one pair': 0,
            'two pairs': 0,
            'three of a kind': 0,
            'straight': 0,
            'flush': 0,
            'full house': 0,
            'four of a kind': 0,
            'straight flush': 0,
            'royal flush': 0
        }
        turnResults.forEach((turnResult: TurnResult) => {
            result[turnResult.reason]++
        })
        if (format === 'percent') {
            Object.keys(result).forEach((reason: string) => {
                // @ts-ignore
                result[reason] = (result[reason] / turnResults.length) * 100
            })}
        return result
    }
}