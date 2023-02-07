import '../../styles/PlayerHand.module.css';
import { Tile } from '../../types/tileType';
interface IHand {
    hand: Tile[];
    cardDrawn: Tile;
}
export default function (props: IHand): JSX.Element;
export {};
