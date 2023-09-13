import { SongBar } from "@/components";
import HeaderImage from "@/components/HeaderImage";
import { Skeleton } from "@/components/ui/skeleton";
import { useArtistAlbums } from "@/hooks/useArtist";
import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const AlbumDetails = (props: Props) => {
  const param = useParams();

  const { data, isError, isLoading, error } = useArtistAlbums(param.albumId);
  if (isLoading) return <Skeleton className="container h-[40vh]" />;
  if (isError) return console.log(error);
  const Data = data?.data[0]?.relationships?.tracks?.data;
  return (
    <section>
      <HeaderImage artistData={data?.data[0]} />
      <section className="container space-y-4 p-5">
        {Data.map((album: any, i: number) => (
          <SongBar
            data={Data}
            i={i}
            song={album}
            artistId={album.id}
            key={album.id}
          />
        ))}
      </section>
    </section>
  );
};

export default AlbumDetails;
