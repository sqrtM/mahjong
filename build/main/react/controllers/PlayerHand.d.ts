import '../../styles/PlayerHand.module.css';
import { Tile } from '../../../build/main/types/tileType';
interface IHand {
    hand: Tile[];
    cardDrawn: any;
}
export default function (props: IHand): JSX.Element;
export {};
