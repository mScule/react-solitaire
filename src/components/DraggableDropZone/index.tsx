import { DragEvent, ReactNode, useState } from "react";
import DraggableData from "../../types/DraggableData";
import clsx from "clsx";

type Props = {
  onDrop: (data: DraggableData) => void;
  children: ReactNode;
};

export default function DraggableDropZone({ onDrop, children }: Props) {
  const [isOnTop, setIsOnTop] = useState(false);

  const handleDragEnter = () => setIsOnTop(true);
  const handleDragLeave = () => setIsOnTop(false);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsOnTop(false);
    onDrop(JSON.parse(e.dataTransfer.getData("json")));
  };

  return (
    <div
      className={clsx(isOnTop && "brightness-90")}

      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}

      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="pointer-events-none">{children}</div>
    </div>
  );
}
