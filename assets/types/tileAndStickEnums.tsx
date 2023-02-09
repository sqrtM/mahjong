import { Dragon, Value, Wind } from './tileType';

export enum UprightTile {
  oneOfCharacters = 'a',
  twoOfCharacters = 's',
  threeOfCharacters = 'd',
  fourOfCharacters = 'f',
  fiveOfCharacters = 'g',
  sixOfCharacters = 'h',
  sevenOfCharacters = 'j',
  eightOfCharacters = 'k',
  nineOfCharacters = 'l',

  oneOfPins = 'q',
  twoOfPins = 'w',
  threeOfPins = 'e',
  fourOfPins = 'r',
  fiveOfPins = 't',
  sixOfPins = 'y',
  sevenOfPins = 'u',
  eightOfPins = 'i',
  nineOfPins = 'o',

  oneOfBamboo = 'z',
  twoOfBamboo = 'x',
  threeOfBamboo = 'c',
  fourOfBamboo = 'v',
  fiveOfBamboo = 'b',
  sixOfBamboo = 'n',
  sevenOfBamboo = 'm',
  eightOfBamboo = ',',
  nineOfBamboo = '.',

  eastTile = '1',
  northTile = '4',
  westTile = '3',
  southTile = '2',

  redDragon = '7',
  greenDragon = '6',
  whiteDragon = '5',
}

export enum SidewaysTile {
  oneOfCharacters = 'A',
  twoOfCharacters = 'S',
  threeOfCharacters = 'D',
  fourOfCharacters = 'F',
  fiveOfCharacters = 'G',
  sixOfCharacters = 'H',
  sevenOfCharacters = 'J',
  eightOfCharacters = 'K',
  nineOfCharacters = 'L',

  oneOfPins = 'Q',
  twoOfPins = 'W',
  threeOfPins = 'E',
  fourOfPins = 'R',
  fiveOfPins = 'T',
  sixOfPins = 'Y',
  sevenOfPins = 'U',
  eightOfPins = 'I',
  nineOfPins = 'O',

  oneOfBamboo = 'Z',
  twoOfBamboo = 'X',
  threeOfBamboo = 'C',
  fourOfBamboo = 'V',
  fiveOfBamboo = 'B',
  sixOfBamboo = 'N',
  sevenOfBamboo = 'M',
  eightOfBamboo = '<',
  nineOfBamboo = '>',

  eastTile = '!',
  northTile = '$',
  westTile = '#',
  southTile = '"',

  redDragon = "'",
  greenDragon = '&',
  whiteDragon = '%',
}

export enum TenbouStick {
  oneHundred = '8',
  oneThousand = '9',
  fiveThousand = '0',
  tenThousand = '-',
}

export function getUprightTileStringFromId(id: string): UprightTile {
  let idArr = id.split('');
  let returnValue: UprightTile = UprightTile.eastTile
  switch (idArr[0]) {
    case 'b': case 'B': {
      switch (idArr[1]) {
        case Value.One.toString(): {
          returnValue = UprightTile.oneOfBamboo
          break
        }
        case Value.Two.toString(): {
          returnValue = UprightTile.twoOfBamboo
          break
        }
        case Value.Three.toString(): {
          returnValue = UprightTile.threeOfBamboo
          break
        }
        case Value.Four.toString(): {
          returnValue = UprightTile.fourOfBamboo
          break
        }
        case Value.Five.toString(): {
          returnValue = UprightTile.fiveOfBamboo
          break
        }
        case Value.Six.toString(): {
          returnValue = UprightTile.sixOfBamboo
          break
        }
        case Value.Seven.toString(): {
          returnValue = UprightTile.sevenOfBamboo
          break
        }
        case Value.Eight.toString(): {
          returnValue = UprightTile.eightOfBamboo
          break
        }
        case Value.Nine.toString(): {
          returnValue = UprightTile.nineOfBamboo
          break
        }
      }
      break
    }
    case 'c': case 'C': {
      switch (idArr[1]) {
        case Value.One.toString(): {
          returnValue = UprightTile.oneOfCharacters
          break
        }
        case Value.Two.toString(): {
          returnValue = UprightTile.twoOfCharacters
          break
        }
        case Value.Three.toString(): {
          returnValue = UprightTile.threeOfCharacters
          break
        }
        case Value.Four.toString(): {
          returnValue = UprightTile.fourOfCharacters
          break
        }
        case Value.Five.toString(): {
          returnValue = UprightTile.fiveOfCharacters
          break
        }
        case Value.Six.toString(): {
          returnValue = UprightTile.sixOfCharacters
          break
        }
        case Value.Seven.toString(): {
          returnValue = UprightTile.sevenOfCharacters
          break
        }
        case Value.Eight.toString(): {
          returnValue = UprightTile.eightOfCharacters
          break
        }
        case Value.Nine.toString(): {
          returnValue = UprightTile.nineOfCharacters
          break
        }
      }
      break
    }
    case 'p': case 'P': {
      switch (idArr[1]) {
        case Value.One.toString(): {
          returnValue = UprightTile.oneOfPins
          break
        }
        case Value.Two.toString(): {
          returnValue = UprightTile.twoOfPins
          break
        }
        case Value.Three.toString(): {
          returnValue = UprightTile.threeOfPins
          break
        }
        case Value.Four.toString(): {
          returnValue = UprightTile.fourOfPins
          break
        }
        case Value.Five.toString(): {
          returnValue = UprightTile.fiveOfPins
          break
        }
        case Value.Six.toString(): {
          returnValue = UprightTile.sixOfPins
          break
        }
        case Value.Seven.toString(): {
          returnValue = UprightTile.sevenOfPins
          break
        }
        case Value.Eight.toString(): {
          returnValue = UprightTile.eightOfPins
          break
        }
        case Value.Nine.toString(): {
          returnValue = UprightTile.nineOfPins
          break
        }
      }
      break
    }
    case 'w': {
      switch (idArr[1]) {
        case Wind.East.toString(): {
          returnValue = UprightTile.eastTile
          break
        }
        case Wind.North.toString(): {
          returnValue = UprightTile.northTile
          break
        }
        case Wind.West.toString(): {
          returnValue = UprightTile.westTile
          break
        }
        case Wind.South.toString(): {
          returnValue = UprightTile.southTile
          break
        }
      }
      break
    }
    case 'd':
      {
        switch (idArr[1]) {
          case Dragon.Green.toString(): {
            returnValue = UprightTile.greenDragon
            break
          }
          case Dragon.Red.toString(): {
            returnValue = UprightTile.redDragon
            break
          }
          case Dragon.White.toString(): {
            returnValue = UprightTile.whiteDragon
            break
          }
        }
      }
      break
  }
  return returnValue
}
