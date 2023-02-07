export type Tile = {
    suit: Suit;
    value: Value;
    tileId: string;
    isRed: boolean;
    isHonor: boolean;
    isTerminal: boolean;
    isSimple: boolean;
};
export declare enum Suit {
    Characters = "characters",
    Pins = "pins",
    Bamboo = "bamboo",
    Winds = "winds",
    Dragons = "dragons"
}
export declare enum Value {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    East = 10,
    West = 11,
    North = 12,
    South = 13,
    Red = 14,
    Green = 15,
    White = 16
}
export declare enum Wind {
    East = 1,
    North = 2,
    West = 3,
    South = 4
}
export declare enum Dragon {
    Red = 1,
    Green = 2,
    White = 3
}
