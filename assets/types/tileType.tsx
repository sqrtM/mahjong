export type Tile = {
  suit: Suit
  value: Value
  isRed: boolean
  isHonor: boolean
  isTerminal: boolean
  isSimple: boolean
}

export enum Suit {
  Characters = 'characters',
  Pins = 'pins',
  Bamboo = 'bamboo',
  Winds = 'winds',
  Dragons = 'dragons',
}

export enum Value {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,

  Red = 10,
  Green = 11,
  White = 12,

  East = 13,
  West = 14,
  North = 15,
  South = 16,
}
