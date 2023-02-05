<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class PageController extends AbstractController
{
    private \MahjongDeck $mahjongDeck;
    private array $discardPile = []; // array of type MahjongTile
    private array $playerHand = []; // array of type MahjongTile
    private \MahjongTile $cardDrawn;

    function __construct()
    {
        $this->mahjongDeck = new \MahjongDeck;
    }

    #[Route('/', name: 'renderGameScreen', methods: ['GET'])]
    public function renderGameScreen(): Response
    {
        $gameDeck = $this->mahjongDeck->initDeck();

        for ($i = 0; $i < 13; $i++) {
            array_push($this->playerHand, ($gameDeck[$i]));
            $this->mahjongDeck->incrementIndex();
        }
        $this->cardDrawn = $this->mahjongDeck->getDeck()[$this->mahjongDeck->getAndIncrementIndex()];
        return $this->render('base.html.twig', ["hand" => $this->playerHand, "cardDrawn" => $this->cardDrawn]);
    }

    ////// THIS DOES NOT WORK YET.
    #[Route('/api/discard', name: 'discard', methods: ['POST'])]
    public function discardTile(Request $request): Response
    {
        array_push($this->discardPile, $request->getContent());
        $this->playerHand = \array_diff($this->playerHand, [$request->getContent()]);
        //$this->cardDrawn = $this->mahjongDeck->getDeck()[0];
        return $this->json($this->mahjongDeck->getDeck());
    }
}