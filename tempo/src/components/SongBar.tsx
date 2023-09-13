import { Song } from "@/types/types";
import React from "react";
import { Link } from "react-router-dom";
import usePlayPause from "@/hooks/use-Play-Pause";
import PlayPause from "./PlayPause";
import { usePlayer } from "@/zustand/music-player";

type Props = {
  data: Song[];
  artistId?: string;
  song: Song | any;
  i: number;
};

const SongBar = ({ data, song, i, artistId }: Props) => {
  const { activeSong, isPlaying } = usePlayer();
  const { handlePause, handlePlay } = usePlayPause();

  return (
    <div className="flex w-full items-center justify-between " key={song.key}>
      <div className="flex gap-3 items-center">
        <span>{1 + i}</span>

        <img
          src={
            artistId
              ? song?.attributes?.artwork?.url
                  .replace("{w}", "500")
                  .replace("{h}", "500")
              : song?.images?.coverart
          }
          className="w-12 aspect-square object-cover rounded-md"
        />
        <div className="flex flex-col items-start gap-2 text-sm">
          {artistId ? (
            <h2>{song?.attributes?.name}</h2>
          ) : (
            <Link className="w-32 truncate font-bold " to={`/song/${song.key}`}>
              {song.title}
            </Link>
          )}
          {artistId ? (
            <h2>{song?.attributes?.albumName}</h2>
          ) : (
            <Link
              className="w-32 truncate"
              to={`/song/${song?.artists[0]?.adamid}`}
            >
              {song?.subtitle}
            </Link>
          )}
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={() => handlePause()}
        handlePlay={() => handlePlay(song, data, i)}
        aristId={artistId}
      />
    </div>
  );
};

export default SongBar;
