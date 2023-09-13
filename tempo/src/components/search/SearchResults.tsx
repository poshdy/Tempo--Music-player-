import { useSearch } from "@/hooks/use-Search";
import { Song } from "@/types/types";
import React from "react";
import { useParams } from "react-router-dom";
import { SongCard } from "..";
import { Skeleton } from "../ui/skeleton";
import ArtistCard from "../artist/ArtistCard";

const SearchResults = () => {
  const param = useParams();
  const { data, isLoading, isError, error } = useSearch(param.searchterm);

  const tracks = data?.tracks?.hits?.map((track: any) => track.track);
  // console.log(tracks?.at(0)?.title);

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
    <section className="space-y-10 flex flex-col items-start justify-center md:items-center md:justify-center">
      <h3>Search Results for: {param.searchterm}</h3>
     <img className="w-40 aspect-square object-cover rounded-full" src={data?.artists?.hits[0].artist.avatar}/>
      <div className="flex flex-wrap gap-3 md:items-center md:justify-center">
        {tracks?.map((track: Song, i: number) => (
          <SongCard
            size="250px"
            data={data?.tracks.hits}
            song={track}
            i={i}
            key={track.key}
          />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;