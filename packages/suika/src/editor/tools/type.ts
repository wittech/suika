export interface ITool extends IBaseTool {
  hotkey: string;
  type: string;
  moveExcludeDrag: (event: PointerEvent) => void;
}

export interface IBaseTool {
  active: () => void;
  inactive: () => void;
  // moveExcludeDrag: (event: PointerEvent) => void;
  start: (event: PointerEvent) => void;
  drag: (event: PointerEvent) => void;
  /**
   *
   * @param event
   * @param isDragHappened is drag happened
   * @returns
   */
  end: (event: PointerEvent, isDragHappened: boolean) => void;
  /**
   * init state when finish a drag loop
   */
  afterEnd: (event: PointerEvent) => void;
}
