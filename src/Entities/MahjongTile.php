<?php 

class MahjongTile
{
    private Suit $suit;
    private Value $value;
    //dont worry about reds yet
    private bool $isRed = false;

    private bool $isHonor = false;
    private bool $isTerminal = false;
    private bool $isSimple = false;

    public function __construct(Suit $suit, Value $value) 
    {
        $this->suit = $suit;
        $this->value = $value;

        if ($suit == Suit::Dragons || Suit::Winds) {
            $this->isHonor = true;
        } else {
            $this->value == Value::One || Value::Nine ? $this->isTerminal = true : $this->isSimple = true;
        }
    }
}

