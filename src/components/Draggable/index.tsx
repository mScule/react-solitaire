import { ReactNode, DragEvent, useState } from "react";
import clsx from "clsx";

import hideDragEventGhostImage from "../../functions/hideDragEventGhostImage";

import DraggableData from "../../types/DraggableData";
import Nullable from "../../types/Nullable";
import Point2D from "../../types/Point2D";

type Props = {
  data: DraggableData;
  children: ReactNode;
};

export default function Draggable({ data, children }: Props) {
  const [position, setPosition] = useState<Nullable<Point2D>>(null);

  const transferDataAsJson = (e: DragEvent) => {
    e.dataTransfer.setData("json", JSON.stringify(data));
  }

  const handleDragStartCapture = (e: DragEvent) => {
    hideDragEventGhostImage(e);
    transferDataAsJson(e);
  }
  const handleDragCapture = (e: DragEvent) =>
    setPosition({ x: e.clientX, y: e.clientY });
  const handleDragEnd = () => setPosition(null);

  return (
    <>
      <div
        draggable="true"
        className={clsx(
          "relative cursor-grab active:cursor-grabbing",
          position && "active:opacity-0"
        )}
        onDragStartCapture={handleDragStartCapture}
        onDragCapture={handleDragCapture}
        onDragEnd={handleDragEnd}
      >
        {children}
      </div>

      {position && (
        <div
          className="fixed cursor-grabbing z-10 pointer-events-none"
          style={{ top: position.y, left: position.x }}
        >
          {children}
        </div>
      )}
    </>
  );
}
