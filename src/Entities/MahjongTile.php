<?php

namespace App\Entity;
use JsonSerializable;
use Suit;
use Value;


class MahjongTile implements JsonSerializable
{
    private Suit $suit;
    private Value $value;
    private string $tileId;
    private bool $isRed = false;
    private bool $isHonor = false;
    private bool $isTerminal = false;
    private bool $isSimple = false;

    public function __construct(Suit $suit, Value $value, bool $isRed, string $tileId)
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

    public function tileId() {
        return $this->tileId;
    }

    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
        return (object) get_object_vars($this);
    }
}