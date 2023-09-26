import { useSearch } from "@/hooks/use-Search";
import { ArtistSong, Song, UserSong } from "@/types/types";
import React from "react";
import { useParams } from "react-router-dom";
import { SongCard } from "..";
import { Skeleton } from "../ui/skeleton";
import ArtistCard from "../artist/ArtistCard";
import { Styles } from "@/Styles";

const SearchResults = () => {
  const param = useParams();
  const { data, isLoading, isError, error } = useSearch(param.searchterm);

  const tracks = data?.tracks?.hits?.map((track: any) => track.track);

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-10">
        <Skeleton className="w-full h-[50px]" />
        <Skeleton className="w-full h-[50px]" />
        <Skeleton className="w-full h-[50px]" />
      </div>
    );
  }
  return (
    <section className="flex flex-col items-center justify-center gap-3 md:items-start md:justify-start">
      <h3>Search Results for: {param.searchterm}</h3>
      <img
        className="w-40 aspect-square object-cover rounded-full"
        src={data?.artists?.hits[0].artist.avatar}
      />
      <div className="flex flex-wrap items-center justify-center md:justify-start md:items-start gap-2">
        {tracks?.map((track: Song & ArtistSong & UserSong, i: number) => (
          <SongCard
            className={`md:w-52 md:h-60 ${Styles.transtions}`}
            data={data?.tracks.hits}
            song={track}
            i={i}
            key={track?.key}
          />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
