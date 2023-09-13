import { Song } from "@/types/types";
import React from "react";
import ArtistCard from "./artist/ArtistCard";

type Props = {
  data: Song[];
};

const TopArtists = ({ data }: Props) => {
  return (
    <div className="w-full flex items-center justify-evenly">
      {data?.slice(0, 6).map((artist) => (
        <ArtistCard artist={artist} key={artist?.artists?.at(0)?.adamid} />
      ))}
    </div>
  );
};

export default TopArtists;
