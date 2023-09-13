import { Song } from "@/types/types";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  artist: Song;
};

const ArtistCard = ({ artist }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center gap-2 w-full hover:bg-[#0b0b0b]/50  text-[#d2d2d2] p-3 rounded-lg duration-300 ease-in-out  cursor-pointer "
      onClick={() => navigate(`/artist/${artist?.artists[0].adamid}`)}
    >
      <img
        src={artist?.images?.background}
        className="w-[100px]  md:w-[250px] aspect-square  object-cover rounded-full"
        alt="artist-photo"
      />
      <p className="text-white w-20 truncate font-bold text-center">
        {artist?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
