export interface IBaseEvents {
  toggleVisible: (id: string) => void;
  toggleLock: (id: string) => void;
  setHoverId: (id: string) => void;
  setName: (id: string, newName: string) => void;
  setSelectedGraph: (
    objId: string,
    event: React.MouseEvent<Element, MouseEvent>,
  ) => void;
}
