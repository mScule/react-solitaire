import useAppSelector from "../../hooks/useAppSelector";
import Card from "../Card";
import Draggable from "../Draggable";
import isLastIndexOf from "../../functions/isLastIndexOf";
import { Fragment } from "react";
import DraggableDropZone from "../DraggableDropZone";
import DraggableData from "../../types/DraggableData";
import useAppDispatch from "../../hooks/useAppDispatch";
import { moveCardsToTableauPile, revealDownFacingCard } from "../../store/game";
import CardSlot from "../CardSlot";
import CardOrigin from "../../types/CardOrigin";
import CardOriginTableau from "../../types/CardOriginTableau";
import isEmpty from "../../functions/isEmpty";

export default function Tableau() {
  const dispatch = useAppDispatch();
  const tableau = useAppSelector((state) => state.game.tableau);

  const handleDrop = (targetPileIndex: number, data: DraggableData) => {
    const origin = data as CardOrigin;

    dispatch(
      moveCardsToTableauPile({
        selection: origin,
        targetPileIndex,
      })
    );
  };

  const handleReveal = (from: number) => {
    dispatch(revealDownFacingCard({ from }));
  };

  return (
    <div className="flex flex-row gap-1">
      {tableau.map((pile, pileIndex) => (
        <div key={`pile-${pileIndex + 1}`} className="relative w-16">
          <div className="absolute top-0">
            <CardSlot type="tableau" />
          </div>
          {isEmpty(pile.down) && isEmpty(pile.up) && (
            <div className="absolute top-0">
              <DraggableDropZone onDrop={(data) => handleDrop(pileIndex, data)}>
                <div className="w-16 h-20" />
              </DraggableDropZone>
            </div>
          )}
          <div className="flex flex-col">
            {pile.down.map(({ rank, suit }, cardIndex) =>
              isEmpty(pile.up) && isLastIndexOf(pile.down, cardIndex) ? (
                <div
                  key={`${rank}-${suit}-down`}
                  onClick={() => handleReveal(pileIndex)}
                >
                  <Card rank={rank} suit={suit} face="down" />
                  <div className="-my-9" />
                </div>
              ) : (
                <Fragment key={`${rank}-${suit}-down`}>
                  <Card rank={rank} suit={suit} face="down" />
                  <div className="-my-9" />
                </Fragment>
              )
            )}
            {pile.up.map(({ rank, suit }, cardIndex) => {
              const data: CardOriginTableau = {
                location: "tableau",
                pileIndex,
                cardIndex,
              };

              return isLastIndexOf(pile.up, cardIndex) ? (
                <Draggable key={`${rank}-${suit}-up`} data={data}>
                  <DraggableDropZone
                    onDrop={(data) => handleDrop(pileIndex, data)}
                  >
                    <Card rank={rank} suit={suit} face="up" />
                  </DraggableDropZone>
                  <div className="-my-14" />
                </Draggable>
              ) : (
                <Draggable key={`${rank}-${suit}-up`} data={data}>
                  <Card rank={rank} suit={suit} face="up" />
                  <div className="-my-14" />
                </Draggable>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
