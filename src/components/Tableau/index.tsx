import { Fragment } from "react/jsx-runtime";
import useAppSelector from "../../hooks/useAppSelector";
import Card from "../Card";

export default function Tableau() {
  const tableau = useAppSelector((state) => state.game.tableau);

  return (
    <div className="flex flex-row gap-1">
      {tableau.map((pile, index) => (
        <div key={`pile-${index + 1}`} className="flex flex-col">
          {pile.down.map(({ rank, suit }) => (
            <Fragment key={`${rank}-${suit}-down`}>
              <Card rank={rank} suit={suit} face="down" />
              <div className="-my-9" />
            </Fragment>
          ))}
          {pile.up.map(({ rank, suit }) => (
            <Fragment key={`${rank}-${suit}-up`}>
              <Card rank={rank} suit={suit} face="up" />
              <div className="-my-7" />
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
