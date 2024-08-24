import clsx from "clsx";

import rankToString from "../../functions/rankToString";
import suitToColor from "../../functions/suitToColor";
import range from "../../functions/range";

import CardType from "../../types/Card";
import Face from "../../types/Face";
import Color from "../../types/Color";
import SuitIcon from "../SuitIcon";

type Props = CardType & {
  face: Face;
};

export default function Card({ suit, rank, face }: Props) {
  const color: Color = suitToColor(suit);

  return (
    <div className="h-20 flex justify-between flex-col w-16 p-0.5 bg-white border border-gray-200 rounded drop-shadow-lg">
      {face === "up" && (
        <div className="p-0.5">
          <div className="w-full flex flex-row justify-between">
            <span
              className={clsx(
                "font-bold -mt-1",
                color === "black" && "text-gray-700",
                color === "red" && "text-red-400"
              )}
            >
              {rankToString(rank)}
            </span>
            <SuitIcon
              suit={suit}
              className={clsx(
                "font-bold",
                color === "black" && "text-gray-700",
                color === "red" && "text-red-400"
              )}
            />
          </div>
          <div className="flex flex-row justify-center">
            <SuitIcon
              suit={suit}
              className={clsx(
                "font-bold text-3xl",
                color === "black" && "text-gray-700",
                color === "red" && "text-red-400"
              )}
            />
          </div>
          <div className="flex flex-row w-full justify-between rotate-180">
            <span
              className={clsx(
                "font-bold -mt-1",
                color === "black" && "text-gray-700",
                color === "red" && "text-red-400"
              )}
            >
              {rankToString(rank)}
            </span>
            <SuitIcon
              suit={suit}
              className={clsx(
                "font-bold",
                color === "black" && "text-gray-700",
                color === "red" && "text-red-400"
              )}
            />
          </div>
        </div>
      )}
      {face === "down" && (
        <div className="bg-gradient-to-t from-red-400 to-red-600 w-full h-full rounded-sm flex flex-col p-0.5 justify-between transition-transform">
          <div className="border border-white h-full w-full rounded-sm overflow-hidden rotate">
            <div className="flex flex-col justify-center items-center  w-full h-full rotate-45">
              {range(12).map((row) => (
                <div key={row} className="flex flex-row border-white">
                  {range(12).map((col) => (
                    <div
                      key={col}
                      className="w-3 h-3 border-[0.5px] border-white"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
