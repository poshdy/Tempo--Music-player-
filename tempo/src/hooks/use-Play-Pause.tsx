import { ArtistSong, Song } from "@/types/types";
import { usePlayer } from "@/zustand/music-player";
import React from "react";

const usePlayPause = () => {
  const { setActiveSong, playPause } = usePlayer();
  const handlePlay = (song: Song | ArtistSong, data: any, i: number) => {
    setActiveSong({ song, data, i });
    playPause(true);
  };
  const handlePause = () => {
    playPause(false);
  };

  return {
    handlePause,
    handlePlay,
  };
};

export default usePlayPause;
