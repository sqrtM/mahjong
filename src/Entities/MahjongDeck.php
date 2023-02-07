<?php

namespace App\Entity;

use Dragon;
use Suit;
use Value;
use Wind;

class MahjongDeck
{
    public function initDeck(): array
    {

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
        for ($i = Wind::East->value; $i <= Wind::South->value; $i++) {
            // four copies of each.
            for ($j = 0; $j < 4; $j++) {
                array_push(
                    $new_deck,
                    new MahjongTile(
                            Suit::Winds,
                        Wind::tryFrom($i),
                        ($j == 3 && $i == 5),
                            Suit::Winds->value . Wind::tryFrom($i)->value
                    )
                );
            }
        }
        // init the dragons
        for ($i = Dragon::Red->value; $i <= Dragon::White->value; $i++) {
            // four copies of each.
            for ($j = 0; $j < 4; $j++) {
                array_push(
                    $new_deck,
                    new MahjongTile(
                            Suit::Dragons,
                        Dragon::tryFrom($i),
                        ($j == 3 && $i == 5),
                            Suit::Dragons->value . Dragon::tryFrom($i)->value
                    )
                );
            }
        }
        shuffle($new_deck);
        return $new_deck;
    }
}