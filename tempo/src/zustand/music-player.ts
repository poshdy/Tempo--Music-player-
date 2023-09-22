import { ArtistSong, Song, UserSong } from "@/types/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

// type CurrentSongs = Song & ArtistSong | UserSong 

interface MusicPlayerState {
  currentIndex: number;
  currentSongs:any[];
  isPlaying: boolean;
  isActive: boolean;
  activeSong: any | undefined;
  genreListId: string;
  setActiveSong: (param: any) => any;
  nextSong: (param: any) => any;
  prevSong: (param: any) => any;
  playPause: (param: any) => any;
}

export const usePlayer = create<MusicPlayerState>()(
  devtools((set) => ({
    currentIndex: 0,
    activeSong: undefined,
    currentSongs: [],
    isPlaying: false,
    isActive: false,
    genreListId: "",

    setActiveSong(data) {
      set(() => ({
        activeSong: data.song,
        currentSongs: data.data?.tracks?.hits
          ? data.data?.tracks?.hits
          : data.data?.properties
          ? data.data?.tracks
          : data.data,
        currentIndex: data,
        isActive: true,
      }));
    },
    nextSong(data) {
      set((state) => ({
        currentSongs: state.currentSongs[data]?.tracks
          ? state.currentSongs[data]?.tracks
          : state.currentSongs[data]?.attributes
          ? state.currentSongs[data]?.attributes
          : state.currentSongs[data],

        currentIndex: data,
        isActive: true,
      }));
    },
    prevSong(data) {
      set((state) => ({
        currentSongs: state.currentSongs[data]?.tracks
          ? state.currentSongs[data]?.tracks
          : state.currentSongs[data]?.attributes
          ? state.currentSongs[data]?.attributes
          : state.currentSongs[data],

        currentIndex: data,
        isActive: true,
      }));
    },
    playPause(param) {
      set(() => ({ isPlaying: param }));
    },
  }))
);
