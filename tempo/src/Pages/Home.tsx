import { useFetchSongs } from "@/hooks/use-fetchSong";
import { HeroImage, SongBar, SongCard, TopArtists } from "../components/index";
import React from "react";

import { Song } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import Title from "@/components/Title";

const Home = () => {
  const { data, error, isError, isLoading } = useFetchSongs();
  if (isError) {
    console.error(error);
  }
  if (isLoading) {
    return (
      <section className="grid grid-cols-4 gap-3 justify-items-center">
        <Skeleton className="container h-[60vh] col-span-4" />
        <Skeleton className="w-[50%] aspect-square" />
        <Skeleton className="w-[50%] aspect-square" />
        <Skeleton className="w-[50%] aspect-square" />
        <Skeleton className="w-[50%] aspect-square" />
        <Skeleton className="w-[50%] aspect-square" />
        <Skeleton className="w-[50%] aspect-square" />
      </section>
    );
  }
  return (
    <section className="space-y-16">
      <HeroImage data={data?.slice(0, 4)} />
  
        <SongBar data={data}  />
        
     

        <Title title="Top Artists" />
        <TopArtists data={data} />

        <Title title="Trending Songs" />
        {data?.map((song: Song, i: number) => (
          <SongCard size="250px" key={song.key} data={data} i={i} song={song} />
        ))}
      </section>

  );
};

export default Home;
