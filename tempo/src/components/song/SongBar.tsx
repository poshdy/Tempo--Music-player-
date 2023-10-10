import { Link } from "react-router-dom";
import usePlayPause from "@/hooks/use-Play-Pause";
import PlayPause from "../PlayPause";
import { usePlayer } from "@/zustand/music-player";
import { Styles } from "@/Styles";
import Title from "../shared/Title";
import LikeButton from "../LikeButton";
import { ArtistSong, Song, UserSong } from "@/types/types";
import { cn } from "@/lib/utils";
import Image from "../shared/Image";

type ArrayData = Song & ArtistSong & UserSong;
type Props = {
  data: ArrayData[];
  artistId?: string;
  title: string;
  hasBackground?: boolean;
};

const trackBar = ({ data, artistId, title, hasBackground }: Props) => {
  const { activeSong, isPlaying } = usePlayer();
  const { handlePause, handlePlay } = usePlayPause();

  return (
    <section
      className={cn(
        "flex flex-col gap-3",
        hasBackground && "bg-orange-500 rounded-2xl p-10 text-[#0a0a0a]"
      )}
    >
      <Title className="text-black" title={title} />
      {data?.map((track, i: number) => (
        <section
          className={`w-full flex items-center justify-between p-1  group rounded-md  hover:bg-white ${Styles.transtions}`}
          key={track?.id || track?.key || track?.songId}
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
            <Image
            alt="song coverart"
              src={
                track?.images?.coverart ||
                track?.attributes?.artwork?.url
                  .replace("{w}", "500")
                  .replace("{h}", "500") ||
                track?.Image
              }
              className="w-12 aspect-square object-cover rounded-md"
            />
            <div className="flex flex-col items-start gap-1 text-xs">
              <h2 className="font-semibold text-sm ">
                {track?.attributes?.name || track?.title || track?.name}
              </h2>
              {artistId ? (
                <h2>{track?.attributes?.albumName}</h2>
              ) : (
                <Link
                  className="w-32 truncate "
                  to={`/artist/${
                    track?.artists
                      ? track?.artists[0]?.adamid
                      : track?.artist_Id
                  }`}
                >
                  {track?.subtitle}
                </Link>
              )}
            </div>
          </section>
          <LikeButton
            artistId={artistId}
            song={track}
            SongId={track.id || track.key}
          />
        </section>
      ))}
    </section>
  );
};

export default trackBar;
