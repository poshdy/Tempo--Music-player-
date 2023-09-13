import { ArtistSong, Song } from "@/types/types";
import { FaPause, FaPlay } from "react-icons/fa";

import React from "react";

type Props = {
  isPlaying: boolean;
  activeSong: any;
  song: any;
  handlePause: () => void;
  handlePlay: () => void;
  aristId?: string;
};
const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  aristId,
  handlePause,
  handlePlay,
}: Props) => {
  let id = aristId
    ? isPlaying && activeSong?.attributes?.name === song?.name
    : isPlaying && activeSong?.title === song?.title;

  return id ? (
    <FaPause size={25} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlay size={25} className="text-gray-300" onClick={handlePlay} />
  );
};

export default PlayPause;
