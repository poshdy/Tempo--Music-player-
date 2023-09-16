import { Song } from "@/types/types";
import React from "react";
import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
import { usePlayer } from "@/zustand/music-player";
import usePlayPause from "@/hooks/use-Play-Pause";

type Props = {
  song: Song | any;
  i: number;
  data: any[];
  size: string;
  artistId?: string;
};

const SongCard = ({ artistId, song, i, data, size }: Props) => {
  const { isPlaying, activeSong } = usePlayer();
  const { handlePause, handlePlay } = usePlayPause();
  return (
    <div
      style={{ width: `${size}` }}
      className="relative rounded-2xl group duration-300 ease-in-out overflow-clip"
    >
      <img
        className="w-full h-full object-cover -z-50"
        src={
          artistId
            ? song?.attributes?.artwork?.url
                .replace("{w}", "220")
                .replace("{h}", "220")
            : song?.images?.coverart
        }
      />

      <div className="w-full cursor-pointer absolute z-30 bottom-0 left-0 py-4 h-20 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg flex flex-col items-center justify-center gap-2">
        {artistId ? (
          <h2 className="text-sm font-bold truncate w-fit">
            {song?.attributes?.name}
          </h2>
        ) : (
          <Link className="w-32 truncate font-bold " to={`/song/${song.key}`}>
            {song.title}
          </Link>
        )}

        {artistId ? (
          <h2 className="text-sm font-medium truncate max-w-[100px]">
            {song?.attributes?.albumName}
          </h2>
        ) : (
          <Link
            className="w-32 truncate"
            to={`/artist/${song?.artists[0]?.adamid}`}
          >
            {song?.subtitle}
          </Link>
        )}
      </div>

      <div className="hidden group-hover:block duration-300 ease-in-out absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full bg-white bg-opacity-20 ">
        <div className="flex justify-center items-center w-full h-full cursor-pointer">
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={() => handlePause()}
            handlePlay={() => handlePlay(song, data, i)}
          />
        </div>
      </div>
    </div>
  );
};

export default SongCard;
