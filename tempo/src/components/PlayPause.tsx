import { ArtistSong, Song } from "@/types/types";
import { FaPause, FaPlay } from "react-icons/fa";


type Props = {
  isPlaying: boolean;
  activeSong: any;
  song: Song & ArtistSong;
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
  let IsArtistId = aristId ? isPlaying && activeSong?.attributes?.name === song?.attributes.name : isPlaying && activeSong?.title === song?.title 
    
      

  return IsArtistId ? (
    <FaPause size={20} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlay size={20} className="text-gray-300" onClick={handlePlay} />
  );
};

export default PlayPause;
