import { ReactNode } from "react";

import { TbRefresh as StockIcon } from "react-icons/tb";

import Suit from "../../types/Suit";

import match from "../../functions/match";
import SuitIcon from "../SuitIcon";

type Props = {
  type: Suit | "stock" | "tableau";
  children?: ReactNode;
};

export default function CardSlot({ children, type }: Props) {
  return (
    <div className="relative h-20 flex justify-center items-center flex-col w-16 p-0.5 border-2 border-emerald-950 rounded drop-shadow-lg">
      {children && (
        <div className="absolute top-0 left-0 right-0">{children}</div>
      )}
      {!children &&
        match(type, {
          tableau: <span className="text-emerald-950 text-3xl font-bold">K</span>,
          clubs: (
            <SuitIcon className="text-emerald-950 text-3xl font-bold" suit={"clubs"} />
          ),
          diamonds: (
            <SuitIcon
              className="text-emerald-950 text-3xl font-bold"
              suit={"diamonds"}
            />
          ),
          hearts: (
            <SuitIcon className="text-emerald-950 text-3xl font-bold" suit={"hearts"} />
          ),
          spades: (
            <SuitIcon className="text-emerald-950 text-3xl font-bold" suit={"spades"} />
          ),
          _: <StockIcon className="text-emerald-950 text-3xl font-bold" />,
        })}
    </div>
  );
}
