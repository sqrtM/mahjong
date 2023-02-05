<?php

class MahjongDeck
{
    private array $deck = [];
    private int $index = 0;

    public function initDeck(): array
    {
        $new_deck = [];

        // init all numbers.
        for ($i = 1; $i <= 9; $i++) {
            // four copies of each.
            for ($j = 0; $j < 4; $j++) {
                array_push(
                    $new_deck,
                    new MahjongTile(
                            Suit::Bamboo,
                        Value::tryFrom($i),
                        ($j == 3 && $i == 5)
                    )
                );
                array_push(
                    $new_deck,
                    new MahjongTile(
                            Suit::Pins,
                        Value::tryFrom($i),
                        ($j == 3 && $i == 5)
                    )
                );
                array_push(
                    $new_deck,
                    new MahjongTile(
                            Suit::Characters,
                        Value::tryFrom($i),
                        ($j == 3 && $i == 5)
                    )
                );
            }
        }
        // init the dragons
        for ($i = 10; $i <= 12; $i++) {
            // four copies of each.
            for ($j = 0; $j < 4; $j++) {
                array_push(
                    $new_deck,
                    new MahjongTile(
                            Suit::Dragons,
                        Value::tryFrom($i),
                        ($j == 3 && $i == 5)
                    )
                );
            }
        }
        // init the winds
        for ($i = 13; $i <= 16; $i++) {
            // four copies of each.
            for ($j = 0; $j < 4; $j++) {
                array_push(
                    $new_deck,
                    new MahjongTile(
                            Suit::Winds,
                        Value::tryFrom($i),
                        ($j == 3 && $i == 5)
                    )
                );
            }
        }

        shuffle($new_deck);
        $this->deck = $new_deck;
        return $new_deck;
    }

    public function getDeck(): array
    {
        return $this->deck;
    }
    public function setDeck(array $deck): void
    {
        $this->deck = $deck;
    }
    public function getAndIncrementIndex(): int
    {
        $returnValue = $this->index;
        $this->index++;
        return $returnValue;
    }
    public function incrementIndex(): void
    {
        $this->index++;
    }

}