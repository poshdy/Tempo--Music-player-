import { SongBar, SongCard } from "@/components";
import HeaderImage from "@/components/HeaderImage";
import Title from "@/components/Title";
import ArtistAlbum from "@/components/artist/ArtistAlbum";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useArtist, useArtistSummary } from "@/hooks/useArtist";
import { ArtistSong } from "@/types/types";
import React from "react";
import {useParams } from "react-router-dom";

const Artist = () => {
  const params = useParams();

  const { data, isLoading, isError, error } = useArtist(params.artistId);
  const {
    data: ArtistSummary,
    isLoading: Loading,
    isError: Error,
    error: err,
  } = useArtistSummary(params.artistId);

  if (isLoading) return <Skeleton className="container h-[40vh]"/>;
  if (isError) return console.log(error);
  if (Loading) return <h1>loading</h1>;
  if (Error) return console.log(err);
  const artistData = Object.values(ArtistSummary?.artists);
  const artistAlbums = Object.values(ArtistSummary?.albums);

  return (
    <section className={"w-full flex flex-col "}>
      {/* artist details */}
      <HeaderImage artistData={artistData[0]} />

      {/* artist Popular songs */}
      <section className="container space-y-4 p-5">
        <Title title="Popular" />
        {data?.data?.slice(0, 8).map((track: ArtistSong, i: number) => (
          <SongBar
            data={data?.data}
            song={track}
            i={i}
            key={track.id}
            artistId={params?.artistId}
          />
        ))}
      </section>

      {/* artist Discography */}
      <section className="container my-3 space-y-5">
        <Title title="Discography" />
        <Tabs defaultValue="albums" className="w-full">
          <TabsList>
            <TabsTrigger value="latest">latest Releases</TabsTrigger>
            <TabsTrigger value="albums">Popular Albums</TabsTrigger>
          </TabsList>
          <TabsContent value="latest">
            <section className="flex flex-wrap gap-3 items-center  ">
              {data?.data?.slice(0, 8).map((track: ArtistSong, i: number) => (
                <SongCard
                  size="100"
                  data={data?.data}
                  song={track}
                  i={i}
                  key={track.id}
                  artistId={params?.artistId}
                />
              ))}
            </section>
          </TabsContent>
          <TabsContent value="albums">
            <ArtistAlbum artistAlbums={artistAlbums} />
          </TabsContent>
        </Tabs>
      </section>
    </section>
  );
};

export default Artist;
