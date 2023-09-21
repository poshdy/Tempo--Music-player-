import { Link } from "react-router-dom";
import PlayPause from "../PlayPause";
import { usePlayer } from "@/zustand/music-player";
import usePlayPause from "@/hooks/use-Play-Pause";
import { Styles } from "@/Styles";
import { cn } from "@/lib/utils";
import { Song, ArtistSong } from "@/types/types";

type SongType = Song & ArtistSong;

type Props = {
  song: SongType;
  i: number;
  data: Song[] | ArtistSong[];
  artistId?: string;
  className: string;
};

const SongCard = ({ artistId, song, i, data, className }: Props) => {
  const { isPlaying, activeSong } = usePlayer();
  const { handlePause, handlePlay } = usePlayPause();
  return (
    <section
      className={cn(
        "relative w-36 h-48 md:w-40 md:h-52 p-1 hover:scale-105 rounded-md flex flex-col items-center justify-center bg-yellow-900 group",
        className
      )}
    >
      <div className="w-[90%] p-1 aspect-square">
        <img
          className="w-full h-full object-cover rounded-md -z-50"
          src={
            song?.attributes?.artwork?.url
              .replace("{w}", "220")
              .replace("{h}", "220") || song?.images?.coverart
          }
        />
      </div>

      <div className="flex flex-col  text-sm  w-[90%] font-bold items-start">
        {artistId ? (
          <h2 className="truncate w-full">{song?.attributes?.name}</h2>
        ) : (
          <Link className=" w-full truncate" to={`/song/${song.key}`}>
            {song.title}
          </Link>
        )}

        {artistId ? (
          <h2 className="w-full truncate text-xs font-medium">
            {song?.attributes?.albumName}
          </h2>
        ) : (
          <Link
            className="w-full truncate text-xs font-medium"
            to={`/artist/${song?.artists[0]?.adamid}`}
          >
            {song?.subtitle}
          </Link>
        )}
      </div>

      <div
        className={`opacity-0 group-hover:opacity-100 bg-yellow-900 ${Styles.Blur} rounded-full p-3 flex justify-center items-center absolute right-5 bottom-20 ${Styles.transtions} `}
      >
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={() => handlePause()}
          handlePlay={() => handlePlay(song, data, i)}
        />
      </div>
    </section>
  );
};

export default SongCard;
