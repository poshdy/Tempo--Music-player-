import { Link } from "react-router-dom";
import PlayPause from "../PlayPause";
import { usePlayer } from "@/zustand/music-player";
import usePlayPause from "@/hooks/use-Play-Pause";
import { Styles } from "@/Styles";
import { cn } from "@/lib/utils";
import { Song, ArtistSong, UserSong } from "@/types/types";
import SongCardContext from "./SongContext";
import Image from "./Image";

type SongType = Song & ArtistSong & UserSong;

type Props = {
  song: SongType;
  i: number;
  data: Song[] | ArtistSong[] | UserSong[];
  className: string;
};

const SongCard = ({  song, i, data, className }: Props) => {
  const { isPlaying, activeSong } = usePlayer();
  const { handlePause, handlePlay } = usePlayPause();
  return (
    <section
      className={cn(
        `relative w-36 h-48 md:w-40 md:h-52 p-2 rounded-md flex flex-col items-center gap-1 justify-start bg-zinc-800 group ${Styles.transtions}`,
        className
      )}
    >
      <div className="w-[95%] aspect-square">
        <img
          className={`w-full h-full object-cover rounded-md -z-50 hover:scale-105 ${Styles.transtions} `}
          src={
            song?.attributes?.artwork?.url
              .replace("{w}", "175")
              .replace("{h}", "175") ||
            song?.images?.coverart ||
            song?.Image?.replace("{w}", "175").replace("{h}", "175")
          }
        />
      </div>

      <div className="flex flex-col w-[90%] items-start truncate">
        <h2 className="text-sm font-semibold w-full truncate">
          {song?.attributes?.name || song.title || song?.name}
        </h2>

        <h2 className="text-xs font-light">
          {song?.attributes?.albumName || song?.subtitle || song?.artistName}
        </h2>
      </div>

      <div
        className={`opacity-0 group-hover:opacity-100  bg-orange-900 rounded-full p-3 flex justify-center items-center absolute right-3 bottom-16 ${Styles.transtions} `}
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
{
  /**/
}
