<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class PageController extends AbstractController
{
    #[Route('/', name: 'hello', methods: ['GET'])]
    public function hello(): Response
    {
        return $this->render('base.html.twig');
    }
}