<?php 

namespace App\Entity;
use JsonSerializable;

class MahjongTable
{
    public static array $gameDeck = [];
    public static array $discardPile = []; // array of type MahjongTile
    public static array $playerHand = []; // array of type MahjongTile
    public static MahjongTile $cardDrawn;
}