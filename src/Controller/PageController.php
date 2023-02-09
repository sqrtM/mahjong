<?php

namespace App\Controller;

use App\Entities\DatabaseConnectionCredentials;
use App\Entity\MahjongDeck;
use App\Entity\MahjongTable;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * for when we are drawing tiles:
 * DONEDONEDONE 1.) refactor the tileId strings to where a capital char = red.
 * i.e., C5 = red char5, but c5 = char5.
 * 
 * DONEDONEDONE2.) use the substring function from postgres https://w3resource.com/PostgreSQL/substring-function.php
 * to extract the first 2 characters from the deck. then, you will always get exactly one tile
 * without needing to do any weird fancy (expensive!) manip. 
 * 
 * 3.) create a new column in the mahjong_tables table called "dora" with the last 8 tiles (16 chars)
 * from the deck on init. 
 */
class PageController extends AbstractController
{

    private function guidv4($data = null) {
        // Generate 16 bytes (128 bits) of random data or use the data passed into the function.
        $data = $data ?? random_bytes(16);
        assert(strlen($data) == 16);
    
        // Set version to 0100
        $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
        // Set bits 6-7 to 10
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80);
    
        // Output the 36 character UUID.
        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }

    private function init_env(): DatabaseConnectionCredentials
    {
        return new DatabaseConnectionCredentials(
            $this->getParameter('app.dbhost'),
            $this->getParameter('app.dbuser'),
            $this->getParameter('app.dbpass'),
            $this->getParameter('app.dbname'),
        );
    }

    #[Route('/', name: 'renderGameScreen', methods: ['GET'])]
    public function renderGameScreen(): Response
    {

        $con_login = $this->init_env();

        $con = pg_connect("host={$con_login->host()} dbname={$con_login->name()} user={$con_login->user()} password={$con_login->pass()}")
            or die("Could not connect to server\n");

        $mahjongDeck = new MahjongDeck;
        $gameDeck = $mahjongDeck->initDeck();

        $eastPlayerHandString = "";
        $northPlayerHandString = "";
        $westPlayerHandString = "";
        $southPlayerHandString = "";
        for ($i = 0; $i < 13; $i++) {
            $eastPlayerHandString .= array_shift($gameDeck)->tileId();
            $northPlayerHandString .= array_shift($gameDeck)->tileId();
            $westPlayerHandString .= array_shift($gameDeck)->tileId();
            $southPlayerHandString .= array_shift($gameDeck)->tileId();
        }

        $gameDeckString = "";
        foreach ($gameDeck as $value) {
            $gameDeckString .= $value->tileId();
        }

        $roomId = $this->guidv4();

        pg_prepare(
            $con,
            "init_table",
            "INSERT INTO MAHJONG_TABLES 
        (ROOM_ID, DECK, PLAYER_TURN, 
        EAST_HAND, NORTH_HAND, WEST_HAND, SOUTH_HAND,  
        EAST_SCORE, NORTH_SCORE, WEST_SCORE, SOUTH_SCORE) 
        VALUES 
        ($6, $1, 'e', 
        $2, $3, $4, $5, 
        25000, 25000, 25000, 25000)"
        );
        pg_send_execute(
            $con,
            "init_table",
            [$gameDeckString, $eastPlayerHandString, $northPlayerHandString, $westPlayerHandString, $southPlayerHandString, $roomId]
        )
            or die('Query failed: ' . pg_last_error());

        pg_close($con);
        unset($con);
        unset($con_login);

        return $this->render('base.html.twig', ["room_id" => $roomId]);
    }

    #[Route('/api/getHand', name: 'getHand', methods: ['POST'])]
    public function getHand(Request $request): Response
    {
        $incomingPlayerPosition = json_decode($request->getContent())->{'playerPosition'}; // player wind
        $incomingRoomId = json_decode($request->getContent())->{'roomId'};
        $con_login = $this->init_env();

        $con = pg_connect("host={$con_login->host()} dbname={$con_login->name()} user={$con_login->user()} password={$con_login->pass()}")
            or die("Could not connect to server\n");

        $query = "SELECT {$incomingPlayerPosition} FROM mahjong_tables WHERE room_id = '{$incomingRoomId}';";

        // this ugly ass lambda just splits the string result into a neat array of tiles.
        return $this->json(str_split(pg_fetch_all(pg_query($con, $query))[0][$incomingPlayerPosition], 2));
    }

    // works for east
    #[Route('/api/drawTile', name: 'drawTile', methods: ['POST'])]
    public function drawTile(Request $request): Response
    {
        $incomingPlayerPosition = json_decode($request->getContent())->{'playerPosition'}; // player wind
        $incomingRoomId = json_decode($request->getContent())->{'roomId'};
        $con_login = $this->init_env();

        $con = pg_connect("host={$con_login->host()} dbname={$con_login->name()} user={$con_login->user()} password={$con_login->pass()}")
            or die("Could not connect to server\n");

        $query = "SELECT substring(deck, 1, 2) FROM mahjong_tables WHERE room_id = {$incomingRoomId}";
        $nextTileId = pg_fetch_all(pg_query($con, $query))[0]["substring"] or die('Query failed: ' . pg_last_error());

        pg_prepare($con, "grab_card", 
        "SELECT deck, east_hand, 
            trim(LEADING '{$nextTileId}' FROM deck) 
            FROM mahjong_tables WHERE room_id = {$incomingRoomId};");
        pg_prepare($con, "draw_card", 
        "UPDATE mahjong_tables SET east_hand = concat(east_hand, '{$nextTileId}')
            WHERE room_id = {$incomingRoomId}");
        pg_execute($con, "grab_card", []);
        pg_execute($con, "draw_card", []);

        return $this->json($nextTileId);

    }

    ////// THIS DOES NOT WORK YET.
    #[Route('/api/discard', name: 'discard', methods: ['POST'])]
    public function discardTile(Request $request): Response
    {
        return $this->json(MahjongTable::$gameDeck);
        /*
        array_push($this->discardPile, $request->getContent());
        $this->playerHand = \array_diff($this->playerHand, [$request->getContent()]);
        $this->cardDrawn = array_shift($this->gameDeck);
        return $this->json($this->cardDrawn);
        */
    }
}