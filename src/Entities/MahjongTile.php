<?php

class MahjongTile implements JsonSerializable
{
    private Suit $suit;
    private Value $value;
    //dont worry about reds yet
    private bool $isRed = false;

    private bool $isHonor = false;
    private bool $isTerminal = false;
    private bool $isSimple = false;

    public function __construct(Suit $suit, Value $value, bool $isRed)
    {
        $this->suit = $suit;
        $this->value = $value;
        $this->isRed = $isRed;

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
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
        return (object) get_object_vars($this);
    }
}