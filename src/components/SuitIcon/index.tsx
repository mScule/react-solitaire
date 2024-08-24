import match from "../../functions/match";
import Suit from "../../types/Suit";

import {
  GiSpades as SpadeIcon,
  GiClubs as ClubIcon,
  GiHearts as HeartIcon,
  GiDiamonds as DiamondIcon,
} from "react-icons/gi";

type Props = {
  suit: Suit;
  className?: string;
};

export default function SuitIcon({ suit, className }: Props) {
  return match(suit, {
    spades: <SpadeIcon className={className} />,
    clubs: <ClubIcon className={className} />,
    hearts: <HeartIcon className={className} />,
    _: <DiamondIcon className={className} />,
  });
}
