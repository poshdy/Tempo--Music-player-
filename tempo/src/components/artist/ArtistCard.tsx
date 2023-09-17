import { Song } from "@/types/types";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  artist: any;
};

const ArtistCard = ({ artist }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center gap-1 w-full hover:bg-[#0b0b0b]/50  text-[#d2d2d2] p-3 rounded-lg duration-300 ease-in-out  cursor-pointer "
      onClick={() => navigate(`/artist/${artist?.artists ? artist?.artists[0].adamid : artist?.artistId}`)}
    >
      <img
        src={artist?.images?.background || artist?.Image?.replace("{w}","200").replace("{h}","200")}
        className="w-[100px]  md:w-[200px] aspect-square  object-cover rounded-full"
        alt="artist-photo"
      />
      <p className="text-white w-20 truncate font-semibold text-center text-xs">
        {artist?.subtitle || artist?.name}
      </p>
    </div>
  );
};

export default ArtistCard;
