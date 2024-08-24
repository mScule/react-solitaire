import isEmpty from "../../functions/isEmpty";
import lastOf from "../../functions/lastOf";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import { moveCardToFoundationPile } from "../../store/game";
import CardOrigin from "../../types/CardOrigin";
import DraggableData from "../../types/DraggableData";
import Suit from "../../types/Suit";
import Card from "../Card";
import CardSlot from "../CardSlot";
import Draggable from "../Draggable";
import DraggableDropZone from "../DraggableDropZone";

export default function Foundations() {
  const dispatch = useAppDispatch();
  const foundations = useAppSelector((state) => state.game.foundations);

  const handleDrop = (targetSuit: Suit, data: DraggableData) => {
    const origin = data as CardOrigin;

    dispatch(
      moveCardToFoundationPile({
        selection: origin,
        targetSuit,
      })
    );
  };

  return (
    <div className="flex flex-row gap-1">
      {Object.entries(foundations).map(([suit, cards]) => {
        return (
          <div key={`foundation-${suit}`} className="relative w-16">
            <div className="absolute top-0">
              <CardSlot type={suit as Suit} />
            </div>
            {isEmpty(cards) ? (
              <div className="absolute top-0">
                <DraggableDropZone
                  onDrop={(data) => handleDrop(suit as Suit, data)}
                >
                  <div className="w-16 h-20" />
                </DraggableDropZone>
              </div>
            ) : (
              <Draggable data={{ location: "foundations", suit }}>
                <DraggableDropZone
                  onDrop={(data) => handleDrop(suit as Suit, data)}
                >
                  <Card {...lastOf(cards)} face="up" />
                </DraggableDropZone>
              </Draggable>
            )}
          </div>
        );
      })}
    </div>
  );
}
