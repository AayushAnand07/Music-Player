import {create} from "zustand"


interface PlayerStore{
    ids:Number[];
    activeId?:Number;
    setId:(id:Number)=> void;
    setIds:(ids:Number[])=> void;
    reset: ()=> void;

};

const usePlayer = create<PlayerStore>((set) => ({
    ids: [],
    activeId: undefined,
    setId: (id: Number) => set({ activeId: id }),
    setIds: (ids: Number[]) => set({ ids }),
    reset: () => set({ ids: [], activeId: undefined })
  }));

export default usePlayer;