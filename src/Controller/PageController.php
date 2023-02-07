<?php

namespace App\Controller;

use App\Entities\DatabaseConnectionCredentials;
use App\Entity\MahjongDeck;
use App\Entity\MahjongTable;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
        $eastPlayerHand = [];

        $eastPlayerHandString = "";
        $northPlayerHandString = "";
        $westPlayerHandString = "";
        $southPlayerHandString = "";
        for ($i = 0; $i < 13; $i++) {
            array_push($eastPlayerHand, array_shift($gameDeck));
            $eastPlayerHandString .= array_shift($gameDeck)->tileId();
            $northPlayerHandString .= array_shift($gameDeck)->tileId();
            $westPlayerHandString .= array_shift($gameDeck)->tileId();
            $southPlayerHandString .= array_shift($gameDeck)->tileId();
        }

        $gameDeckString = "";
        foreach ($gameDeck as $value) {
            $gameDeckString .= $value->tileId();
        }

        pg_prepare(
            $con,
            "init_table",
            "INSERT INTO MAHJONG_TABLES 
        (DECK, PLAYER_TURN, 
        EAST_HAND, NORTH_HAND, WEST_HAND, SOUTH_HAND,  
        EAST_SCORE, NORTH_SCORE, WEST_SCORE, SOUTH_SCORE) 
        VALUES 
        ($1, 'e', 
        $2, $3, $4, $5, 
        25000, 25000, 25000, 25000)"
        );
        pg_send_execute(
            $con,
            "init_table",
            [$gameDeckString, $eastPlayerHandString, $northPlayerHandString, $westPlayerHandString, $southPlayerHandString]
        )
            or die('Query failed: ' . pg_last_error());

        pg_close($con);
        unset($con);
        unset($con_login);

        return $this->render('base.html.twig', ["hand" => $eastPlayerHand]);
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