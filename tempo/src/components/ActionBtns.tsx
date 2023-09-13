import React from "react";
import { PlayPause } from ".";
import { Song } from "@/types/types";
import usePlayPause from "@/hooks/use-Play-Pause";
import { usePlayer } from "@/zustand/music-player";

type Props = {
  song: Song;
  data: Song[];
};

const ActionBtns = ({ song, data }: Props) => {
  const { handlePause, handlePlay } = usePlayPause();
  const { isPlaying, activeSong } = usePlayer();
  return (
    <div className="flex gap-3 items-center  font-bold">
      <button className="border-2 rounded-full border-white px-4 py-2 flex items-center gap-2 ">
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={() => handlePause()}
          handlePlay={() => handlePlay(song, data, 2)}
        />
      </button>
      <button className="border-2 rounded-full border-white px-4 py-2 ">
        Add To
      </button>
    </div>
  );
};

export default ActionBtns;
