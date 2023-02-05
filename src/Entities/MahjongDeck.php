<?php 


// THIS IS WHERE THE CRASH IS COMING FROM. 
// FIX THIS FIRST BEFORE LAUNCHING SERVER. 
class MahjongDeck 
{
    private array $deck = new SplFixedArray(136);

    public function initDeck(): array
    {
        // init all numbers.
        for ($i = 1; $i <= 9; $i++) {
            // four copies of each.
            for ($j = 0; $j < 4; $j++) {
                $this->deck[$i] = new MahjongTile(Suit::Bamboo, Value::tryFrom($i));
                $this->deck[$i] = new MahjongTile(Suit::Pins, Value::tryFrom($i));
                $this->deck[$i] = new MahjongTile(Suit::Characters, Value::tryFrom($i));
            }
        }
        // init the dragons
        for ($i = 10; $i <= 12; $i++) {
            // four copies of each.
            for ($j = 0; $j < 4; $j++) {
                $this->deck[$i] = new MahjongTile(Suit::Dragons, Value::tryFrom($i));
            }
        }

        return $this->deck;
    }

}