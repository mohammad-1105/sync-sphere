import { create } from "zustand";

type ModalState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useWorkspaceModalCreationStore = create<ModalState>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));
