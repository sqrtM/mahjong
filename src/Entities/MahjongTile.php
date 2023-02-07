<?php

namespace App\Entity;

use Dragon;
use JsonSerializable;
use Suit;
use Value;
use Wind;

/**
 * Do we care about suit and value? Honor, Terminal, Simple, Red? 
 * If we have the tileId, we can just reverse engineer all of that
 * without necessarily having to hold entire objects in memory and 
 * construct them with the huge MahjongDeck loops. This should probably
 * remain a class in and of itself, but I think it may become a lot
 * smaller and have less properties since it's looking like the API 
 * is not going to be passing JSON data back and forth the way it is now.
 * 
 * (PS: maybe it will! we should keep everything for now, but i wouldnt
 * be suprised if this stuff gets deprecated like instantly.)
 */
class MahjongTile implements JsonSerializable
{
    private Suit $suit;
    private Value|Wind|Dragon $value;
    private string $tileId;
    private bool $isRed = false;
    private bool $isHonor = false;
    private bool $isTerminal = false;
    private bool $isSimple = false;

    public function __construct(Suit $suit, Value|Wind|Dragon $value, bool $isRed, string $tileId)
    {
        $this->suit = $suit;
        $this->value = $value;
        $this->isRed = $isRed;
        $this->tileId = $tileId;

        if ($suit == Suit::Dragons || $suit == Suit::Winds) {
            $this->isHonor = true;
        } else {
            if ($value == Value::One || $value == Value::Nine) {
                $this->isTerminal = true;
            } else {
                $this->isSimple = true;
            }
        }
    }

    public function tileId()
    {
        return $this->tileId;
    }

    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
        return (object) get_object_vars($this);
    }
}