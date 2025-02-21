import { create } from "zustand";

interface IModalStore {
  openModal: boolean;
  setOpenModal: (arg: boolean) => void;
}

const modalStore = create<IModalStore>((set) => ({
  openModal: false,
  setOpenModal: (arg: boolean) => set({ openModal: arg }),
}));

export const useModalStore = () => modalStore((state) => state);
