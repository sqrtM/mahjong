import { Value } from './tileType'

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

export const uprightTileArray = [
  UprightTile.oneOfCharacters,
  UprightTile.twoOfCharacters,
  UprightTile.threeOfCharacters,
  UprightTile.fourOfCharacters,
  UprightTile.fiveOfCharacters,
  UprightTile.sixOfCharacters,
  UprightTile.sevenOfCharacters,
  UprightTile.eightOfCharacters,
  UprightTile.nineOfCharacters,

  UprightTile.oneOfPins,
  UprightTile.twoOfPins,
  UprightTile.threeOfPins,
  UprightTile.fourOfPins,
  UprightTile.fiveOfPins,
  UprightTile.sixOfPins,
  UprightTile.sevenOfPins,
  UprightTile.eightOfPins,
  UprightTile.nineOfPins,

  UprightTile.oneOfBamboo,
  UprightTile.twoOfBamboo,
  UprightTile.threeOfBamboo,
  UprightTile.fourOfBamboo,
  UprightTile.fiveOfBamboo,
  UprightTile.sixOfBamboo,
  UprightTile.sevenOfBamboo,
  UprightTile.eightOfBamboo,
  UprightTile.nineOfBamboo,

  UprightTile.eastTile,
  UprightTile.northTile,
  UprightTile.westTile,
  UprightTile.southTile,

  UprightTile.redDragon,
  UprightTile.greenDragon,
  UprightTile.whiteDragon,
]

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
  // quick check to see if the card is a dragon or not. 
  // points to a flaw in my design, but hopefully this
  // will allow everything to serialize relatively
  // cleanly.
  if (idArr.length > 2 && !isNaN(idArr[idArr.length - 1] as any)) {
    idArr[1] = idArr[1] + idArr[2]
    idArr.pop()
  }
  let returnValue: UprightTile = UprightTile.eastTile
  switch (idArr[0]) {
    case 'b': {
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
          returnValue = idArr.length > 2 ? UprightTile.fiveOfBamboo : UprightTile.fiveOfBamboo
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
    case 'c': {
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
          returnValue = idArr.length > 2 ? UprightTile.fiveOfCharacters : UprightTile.fiveOfCharacters
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
    case 'p': {
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
          returnValue = idArr.length > 2 ? UprightTile.fiveOfPins : UprightTile.fiveOfPins
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
        case Value.East.toString(): {
          returnValue = UprightTile.eastTile
          break
        }
        case Value.North.toString(): {
          returnValue = UprightTile.northTile
          break
        }
        case Value.West.toString(): {
          returnValue = UprightTile.westTile
          break
        }
        case Value.South.toString(): {
          returnValue = UprightTile.southTile
          break
        }
      }
      break
    }
    case 'd':
      {
        switch (idArr[1]) {
          case Value.Green.toString(): {
            returnValue = UprightTile.greenDragon
            break
          }
          case Value.Red.toString(): {
            returnValue = UprightTile.redDragon
            break
          }
          case Value.White.toString(): {
            returnValue = UprightTile.whiteDragon
            break
          }
        }
      }
      break
  }
  return returnValue
}
