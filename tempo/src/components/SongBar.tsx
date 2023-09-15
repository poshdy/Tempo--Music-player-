import React from "react";
import { Link } from "react-router-dom";
import usePlayPause from "@/hooks/use-Play-Pause";
import PlayPause from "./PlayPause";
import { usePlayer } from "@/zustand/music-player";
import { AiOutlineHeart } from "react-icons/ai";

import { Styles } from "@/Styles";
import Title from "./Title";

type Props = {
  data: any[];
  artistId?: string;
  // track: track | any;
  // i: number;
};

const trackBar = ({ data, artistId }: Props) => {
  const { activeSong, isPlaying } = usePlayer();
  const { handlePause, handlePlay } = usePlayPause();

  return (
    <section className={`container flex flex-col gap-3`}>
      <Title title="track bar" />
      {data?.map((track, i: number) => (
        <section
          className={`w-full flex items-center justify-between p-1 group rounded-md  hover:bg-black ${Styles.transtions}`}
          key={artistId ? track.id : track.key}
        >
          <section className="flex items-center gap-2">
            <span className="block group-hover:hidden w-6">{1 + i}</span>
            <span className="hidden group-hover:block w-6">
              <PlayPause
                isPlaying={isPlaying}
                activeSong={activeSong}
                song={track}
                handlePause={() => handlePause()}
                handlePlay={() => handlePlay(track, data, i)}
                aristId={artistId}
              />
            </span>
            <img
              src={
                artistId
                  ? track?.attributes?.artwork?.url
                      .replace("{w}", "500")
                      .replace("{h}", "500")
                  : track?.images?.coverart
              }
              className="w-12 aspect-square object-cover rounded-md"
            />
          <div className="flex flex-col items-start gap-2 text-sm">
            {artistId ? (
              <h2>{track?.attributes?.name}</h2>
            ) : (
              <Link
                className="w-32 truncate font-bold "
                to={`/song/${track.key}`}
              >
                {track.title}
              </Link>
            )}
            {artistId ? (
              <h2>{track?.attributes?.albumName}</h2>
            ) : (
              <Link
                className="w-32 truncate"
                to={`/artist/${track?.artists[0]?.adamid}`}
              >
                {track?.subtitle}
              </Link>
            )}
          </div>
          </section>
          <AiOutlineHeart size={25} />
        </section>
      ))}
    </section>
  );
};

export default trackBar;
{
  /**/
}

{
  /* */
}

{
  /* */
}

{
  /* */
}
