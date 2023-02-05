import { Suit, Tile, Value } from './tileType'

export enum uprightTile {
  oneOfCharacters = 'a',
  twoOfCharacters = 's',
  threeOfCharacters = 'd',
  fourOfCharacters = 'f',
  fiveOfCharacters = 'g',
  sixOfCharacters = 'h',
  sevenOfCharacters = 'j',
  eightOfCharacters = 'k',
  nineOfCharacters = 'l',

  oneOfBamboo = 'z',
  twoOfBamboo = 'x',
  threeOfBamboo = 'c',
  fourOfBamboo = 'v',
  fiveOfBamboo = 'b',
  sixOfBamboo = 'n',
  sevenOfBamboo = 'm',
  eightOfBamboo = ',',
  nineOfBamboo = '.',

  oneOfPins = 'q',
  twoOfPins = 'w',
  threeOfPins = 'e',
  fourOfPins = 'r',
  fiveOfPins = 't',
  sixOfPins = 'y',
  sevenOfPins = 'u',
  eightOfPins = 'i',
  nineOfPins = 'o',

  northTile = '4',
  southTile = '2',
  eastTile = '1',
  westTile = '3',

  whiteDragon = '5',
  greenDragon = '6',
  redDragon = '7',
}

export enum sidewaysTile {
  oneOfCharacters = 'A',
  twoOfCharacters = 'S',
  threeOfCharacters = 'D',
  fourOfCharacters = 'F',
  fiveOfCharacters = 'G',
  sixOfCharacters = 'H',
  sevenOfCharacters = 'J',
  eightOfCharacters = 'K',
  nineOfCharacters = 'L',

  oneOfBamboo = 'Z',
  twoOfBamboo = 'X',
  threeOfBamboo = 'C',
  fourOfBamboo = 'V',
  fiveOfBamboo = 'B',
  sixOfBamboo = 'N',
  sevenOfBamboo = 'M',
  eightOfBamboo = '<',
  nineOfBamboo = '>',

  oneOfPins = 'Q',
  twoOfPins = 'W',
  threeOfPins = 'E',
  fourOfPins = 'R',
  fiveOfPins = 'T',
  sixOfPins = 'Y',
  sevenOfPins = 'U',
  eightOfPins = 'I',
  nineOfPins = 'O',

  northTile = '$',
  southTile = '"',
  eastTile = '!',
  westTile = '#',

  whiteDragon = '%',
  greenDragon = '&',
  redDragon = "'",
}

export enum tenbouStick {
  oneHundred = '8',
  oneThousand = '9',
  fiveThousand = '0',
  tenThousand = '-',
}

export function getUprightTileString(tile: Tile): uprightTile {
  let returnValue: uprightTile = uprightTile.eastTile
  switch (tile.suit) {
    case Suit.Bamboo: {
      switch (tile.value) {
        case Value.One: {
          returnValue = uprightTile.oneOfBamboo
          break
        }
        case Value.Two: {
          returnValue = uprightTile.twoOfBamboo
          break
        }
        case Value.Three: {
          returnValue = uprightTile.threeOfBamboo
          break
        }
        case Value.Four: {
          returnValue = uprightTile.fourOfBamboo
          break
        }
        case Value.Five: {
          returnValue = uprightTile.fiveOfBamboo
          break
        }
        case Value.Six: {
          returnValue = uprightTile.sixOfBamboo
          break
        }
        case Value.Seven: {
          returnValue = uprightTile.sevenOfBamboo
          break
        }
        case Value.Eight: {
          returnValue = uprightTile.eightOfBamboo
          break
        }
        case Value.Nine: {
          returnValue = uprightTile.nineOfBamboo
          break
        }
      }
      break
    }
    case Suit.Characters: {
      switch (tile.value) {
        case Value.One: {
          returnValue = uprightTile.oneOfCharacters
          break
        }
        case Value.Two: {
          returnValue = uprightTile.twoOfCharacters
          break
        }
        case Value.Three: {
          returnValue = uprightTile.threeOfCharacters
          break
        }
        case Value.Four: {
          returnValue = uprightTile.fourOfCharacters
          break
        }
        case Value.Five: {
          returnValue = uprightTile.fiveOfCharacters
          break
        }
        case Value.Six: {
          returnValue = uprightTile.sixOfCharacters
          break
        }
        case Value.Seven: {
          returnValue = uprightTile.sevenOfCharacters
          break
        }
        case Value.Eight: {
          returnValue = uprightTile.eightOfCharacters
          break
        }
        case Value.Nine: {
          returnValue = uprightTile.nineOfCharacters
          break
        }
      }
      break
    }
    case Suit.Pins: {
      switch (tile.value) {
        case Value.One: {
          returnValue = uprightTile.oneOfPins
          break
        }
        case Value.Two: {
          returnValue = uprightTile.twoOfPins
          break
        }
        case Value.Three: {
          returnValue = uprightTile.threeOfPins
          break
        }
        case Value.Four: {
          returnValue = uprightTile.fourOfPins
          break
        }
        case Value.Five: {
          returnValue = uprightTile.fiveOfPins
          break
        }
        case Value.Six: {
          returnValue = uprightTile.sixOfPins
          break
        }
        case Value.Seven: {
          returnValue = uprightTile.sevenOfPins
          break
        }
        case Value.Eight: {
          returnValue = uprightTile.eightOfPins
          break
        }
        case Value.Nine: {
          returnValue = uprightTile.nineOfPins
          break
        }
      }
      break
    }
    case Suit.Winds: {
      switch (tile.value) {
        case Value.East: {
          returnValue = uprightTile.eastTile
          break
        }
        case Value.North: {
          returnValue = uprightTile.northTile
          break
        }
        case Value.West: {
          returnValue = uprightTile.westTile
          break
        }
        case Value.South: {
          returnValue = uprightTile.southTile
          break
        }
      }
      break
    }
    case Suit.Dragons:
      {
        switch (tile.value) {
          case Value.Green: {
            returnValue = uprightTile.greenDragon
            break
          }
          case Value.Red: {
            returnValue = uprightTile.redDragon
            break
          }
          case Value.White: {
            returnValue = uprightTile.whiteDragon
            break
          }
        }
      }
      break
  }
  return returnValue
}
