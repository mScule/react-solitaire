import { DragEvent } from "react";

export default function hideDragEventGhostImage<T>(e: DragEvent<T>) {
  e.dataTransfer?.setDragImage(new Image(), 0, 0);
}
