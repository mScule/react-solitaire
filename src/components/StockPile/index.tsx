import useAppSelector from "../../hooks/useAppSelector";
import Card from "../Card";
import CardSlot from "../CardSlot";

export default function StockPile() {
  const stock = useAppSelector((state) => state.game.stock);

  return (
    <CardSlot type="stock">
      {stock.length > 0 && <Card suit="spades" rank={1} face="down" />}
    </CardSlot>
  );
}
