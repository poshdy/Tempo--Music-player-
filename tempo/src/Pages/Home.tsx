import { useFetchSongs } from "@/hooks/use-fetchSong";
import { HeroImage, SongBar, SongCard, TopArtists } from "../components/index";
import React from "react";

import { Song } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import Title from "@/components/Title";
import { useAuth } from "@/hooks/use-Auth";


const Home = () => {

  const {user} = useAuth()
  // console.log(user)
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
{/* <h2>welcome :{user?.email}</h2> */}
      <SongBar data={data} />

      <section className="container">
        <Title title="Top Artists" />
        <TopArtists data={data} />
      </section>
      <section className="container space-y-2">
        <Title title="Trending Songs" />
        <div className="flex flex-wrap gap-4">

        {data?.map((song: Song, i: number) => (
          <SongCard size="250px" key={song.key} data={data} i={i} song={song} />
          ))}
          </div>
      </section>
    </section>
  );
};

export default Home;
