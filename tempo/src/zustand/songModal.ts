import { ArtistSong, Song, UserSong } from "@/types/types";
import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: Song | ArtistSong | UserSong | {};
}

export const useSongModal = create<ModalState>((set) => ({
  isOpen: false,
  onOpen: (data = {}) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
  data: {},
}));
