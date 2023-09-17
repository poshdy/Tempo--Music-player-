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
      <HeaderImage ID="album" artistData={data?.data[0]} />
      <section className="container space-y-4 p-5">
        <SongBar artistId={param?.albumId} data={Data} />
      </section>
    </section>
  );
};

export default AlbumDetails;
