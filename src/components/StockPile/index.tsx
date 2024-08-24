import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";

import { moveCardFromStockToTalonPile } from "../../store/game";

import isEmpty from "../../functions/isEmpty";

import Card from "../Card";
import CardSlot from "../CardSlot";

export default function StockPile() {
  const dispatch = useAppDispatch();
  const stock = useAppSelector((state) => state.game.stock);

  const getCards = () => dispatch(moveCardFromStockToTalonPile());

  return (
    <div className="relative w-16">
      <div className="absolute top-0">
        <CardSlot type="stock" />
      </div>
      {isEmpty(stock) ? (
        <div className="absolute w-16 h-20 cursor-pointer" onClick={getCards} />
      ) : (
        <div className="cursor-pointer" onClick={getCards}>
          <Card suit="spades" rank={1} face="down" />
        </div>
      )}
    </div>
  );
}
