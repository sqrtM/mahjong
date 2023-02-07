<?php

namespace App\Entity;

use Suit;
use Value;

class MahjongDeck
{
    public function initDeck(): array
    {
        // i'm not sure why we have to start with one in the chamber here, but it makes
        // the program happy, so whatever I guess.
        $new_deck = [];

        // init all numbers.
        for ($i = Value::One->value; $i <= Value::Nine->value; $i++) {
            // four copies of each.
            for ($j = 0; $j < 4; $j++) {
                array_push(
                    $new_deck,
                    new MahjongTile(
                            Suit::Characters,
                        Value::tryFrom($i),
                        ($j === 3 && $i === 5),
                        !($j === 3 && $i === 5) ? Suit::Characters->value . Value::tryFrom($i)->value : Suit::Characters->value . Value::tryFrom($i)->value . 'r'
                    )
                );
            }
            for ($j = 0; $j < 4; $j++) {
                array_push(
                    $new_deck,
                    new MahjongTile(
                            Suit::Pins,
                        Value::tryFrom($i),
                        ($j == 3 && $i == 5),
                        !($j === 3 && $i === 5) ? Suit::Pins->value . Value::tryFrom($i)->value : Suit::Pins->value . Value::tryFrom($i)->value . 'r'
                    )
                );
            }
            for ($j = 0; $j < 4; $j++) {
                array_push(
                    $new_deck,
                    new MahjongTile(
                            Suit::Bamboo,
                        Value::tryFrom($i),
                        ($j == 3 && $i == 5),
                        !($j === 3 && $i === 5) ? Suit::Bamboo->value . Value::tryFrom($i)->value : Suit::Bamboo->value . Value::tryFrom($i)->value . 'r'
                    )
                );
            }
        }
        // init the winds
        for ($i = Value::East->value; $i <= Value::South->value; $i++) {
            // four copies of each.
            for ($j = 0; $j < 4; $j++) {
                array_push(
                    $new_deck,
                    new MahjongTile(
                            Suit::Winds,
                        Value::tryFrom($i),
                        ($j == 3 && $i == 5),
                        Suit::Winds->value . Value::tryFrom($i)->value
                    )
                );
            }
        }
        // init the dragons
        for ($i = Value::Red->value; $i <= Value::White->value; $i++) {
            // four copies of each.
            for ($j = 0; $j < 4; $j++) {
                array_push(
                    $new_deck,
                    new MahjongTile(
                            Suit::Dragons,
                        Value::tryFrom($i),
                        ($j == 3 && $i == 5),
                        Suit::Dragons->value . Value::tryFrom($i)->value
                    )
                );
            }
        }
        shuffle($new_deck);
        return $new_deck;
    }
}