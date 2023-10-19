import { create } from "zustand"

// Interfaz del hook
interface useStoreModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

// Constructor del hook
export const useStoreModal = create<useStoreModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));