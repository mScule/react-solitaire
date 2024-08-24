import { Fragment } from "react/jsx-runtime";
import isEmpty from "../../functions/isEmpty";
import useAppSelector from "../../hooks/useAppSelector";
import Draggable from "../Draggable";
import Card from "../Card";
import lastOf from "../../functions/lastOf";
import CardOriginTalon from "../../types/CardOriginTalon";

export default function TalonPile() {
  const talonPile = useAppSelector((state) => state.game.talon);

  const data: CardOriginTalon = {
    location: "talon",
  };

  return isEmpty(talonPile) ? (
    <Fragment />
  ) : (
    <Draggable data={data}>
      <Card {...lastOf(talonPile)} face="up" />
    </Draggable>
  );
}
