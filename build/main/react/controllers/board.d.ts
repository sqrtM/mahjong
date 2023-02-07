import '../../styles/board.module.css';
/**
 * MAIN BOARD.
 * (this must be anon for twig to recognize it)
 * We will probably make this the parent element for the front,
 * from which all the hands and the player UI are all children.
 *
 * We should add the player hand to the bottom of this,
 * refactor the twig file to represent that this is just a board,
 * so we can have like a login screen and all that fun stuff, à la
 * tenhou or something like that.
 *
 * @todo
 * 1.) force the playerhand component to be a child of this component.
 *
 * 2.) create "enemyhand" (weird name) components to represent the other players.
 *
 * 3.) create an API which allows us to communicate with the game, being sent through
 * each of the components. perhaps also give them an API key, so ONLY that hand can
 * communicate with the game.
 *
 * 4.) draw the rest of the owl.
 *
 *
 * @returns the game screen
 */
export default function (): JSX.Element;
