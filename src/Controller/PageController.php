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
   * The problem we're having is that we cannot seem
   * to keep the data we're generating consistent.
   * There are two options : 
   * Send it all to the users (a bit dangerous, but easier)
   * Or set up a database to hold the data so it's not local
   * 
   * I think we'll end up with the db approach. It's fast enough and once it's called,
   * it would allow the users to return to the game after refreshing or something. 
   * 
   * SO:
   * @todo set up a postgres db. Get all the env stuff running.
   * The table should be something like :
   * ROOM ID | DECK* | TURN | EAST HAND | NORTH HAND | WEST HAND | SOUTH HAND | EAST DISCARD | NORTH DISCARD | WEST DISCARD | SOUTH DISCARD | EAST SCORE | NORTH SCORE | WEST SCORE | SOUTH SCORE 
   * 
   * * We MUST find a way to serialize this shit. This is being sent a huge raw JSON and there's really no reason to do that.
   * We should allow the user to actually do all the calculations. Maybe, instead of the server giving a fuck about the cards,
   * The server just sends a string of characters which coorespond to the ASCII char for each tile ? Or even just a number, then
   * the number aligns with an enum in the front end. That would keep everything very light. We could then hold a postgres array
   * à la (10, 15, 24, 68, 111, 2, 43, ...) which we could just instantly decode via an enum.
   */
class PageController extends AbstractController
{

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
        $playerHand = [];

        for ($i = 0; $i < 13; $i++) {
            array_push($playerHand, array_shift($gameDeck));
        }

        $pg_string = "";
        foreach($gameDeck as $value) {
            $pg_string = $pg_string . $value->tileId();
        }

        pg_prepare($con, "init_table", 
        "INSERT INTO MAHJONG_TABLES 
        (deck,player_turn,east_hand, NORTH_HAND, WEST_HAND,SOUTH_HAND, EAST_DISCARD, NORTH_DISCARD, WEST_DISCARD,SOUTH_DISCARD, EAST_SCORE, NORTH_SCORE, WEST_SCORE, SOUTH_SCORE) 
        VALUES 
        ($1, 'e', 'b4p2', 'b4p2', 'b4p2', 'b4p2', 'b4p2', 
        'b4p2', 'b4p2', 'b4p2', '200', '200', '200', '200')"
        );
        pg_send_execute($con, "init_table", [$pg_string]) or die('Query failed: ' . pg_last_error());

        pg_close($con);
        unset($con);
        unset($con_login);

        return $this->render('base.html.twig', ["hand" => $playerHand, "cardDrawn" => array_shift(MahjongTable::$gameDeck)]);
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

    /*

        $con_login = $this->init_env();

        $con = pg_connect("host={$con_login->host()} dbname={$con_login->name()} user={$con_login->user()} password={$con_login->pass()}")
            or die("Could not connect to server\n");

        $query = 'SELECT * FROM licks ORDER BY date';
        $results = pg_query($con, $query) or die('Query failed: ' . pg_last_error());

        $table = pg_fetch_all($results);
        pg_close($con);
        unset($con);
        unset($con_login);

    */
}