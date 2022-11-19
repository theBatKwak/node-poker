export class Card {
  public suit: 'hearts' | 'diamonds' | 'spades' | 'clubs'
  public figure: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'
  public value: number
  constructor(
    suit: 'hearts' | 'diamonds' | 'spades' | 'clubs',
    figure: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A',
    value: number
  ) {
    this.suit = suit
    this.figure = figure
    this.value = value
  }
  public print(): void {
    switch (this.suit) {
      case 'hearts':
        console.log(this.figure + ' ♥️')
        break
      case 'diamonds':
        console.log(this.figure + ' ♦️')
        break
      case 'spades':
        console.log(this.figure + ' ♠️')
        break
      case 'clubs':
        console.log(this.figure + ' ♣️')
        break
    }
  }
}
