import { Link } from "react-router-dom";
import usePlayPause from "@/hooks/use-Play-Pause";
import PlayPause from "../PlayPause";
import { usePlayer } from "@/zustand/music-player";
import { Styles } from "@/Styles";
import Title from "../Title";
import LikeButton from "../LikeButton";
import { ArtistSong, Song } from "@/types/types";

type ArrayData = Song & ArtistSong;
type Props = {
  data: ArrayData[];
  artistId?: string;
  title: string;
};

const trackBar = ({ data, artistId, title }: Props) => {
  const { activeSong, isPlaying } = usePlayer();
  const { handlePause, handlePlay } = usePlayPause();

  return (
    <section className={`container flex flex-col gap-3 bg-black rounded-2xl p-10`}>
      <Title className="md:text-4xl" title={title} />
      {data?.map((track, i: number) => (
        <section
          className={`w-full flex items-center justify-between p-1 group rounded-md  hover:bg-black ${Styles.transtions}`}
          key={ track.id || track.key}
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
                track?.images?.coverart ||
                track?.attributes?.artwork?.url
                  .replace("{w}", "500")
                  .replace("{h}", "500")
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
          <LikeButton artistId={artistId} song={track} />
        </section>
      ))}
    </section>
  );
};

export default trackBar;
