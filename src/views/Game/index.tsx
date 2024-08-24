import { useEffect } from "react";

import useAppDispatch from "../../hooks/useAppDispatch";
import { dealCards } from "../../store/game";

import Foundations from "../../components/Foundations";
import TalonPile from "../../components/TalonPile";
import StockPile from "../../components/StockPile";
import Tableau from "../../components/Tableau";

function Game() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dealCards());
  }, []);

  return (
    <div className="w-full flex justify-center p-5">
      <div className="w-full max-w-[35rem]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row justify-between">
            <Foundations />
            <div className="flex flex-row gap-2">
              <TalonPile />
              <StockPile />
            </div>
          </div>
          <div className="flex justify-center">
            <Tableau />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
