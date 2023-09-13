import { SongBar } from "@/components";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchListSongs } from "@/hooks/use-fetchSong";
import { Song } from "@/types/types";
import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const ListDetails = (props: Props) => {
  const param = useParams();
  const { data, isError, isLoading, error } = useFetchListSongs(param.listId);

  if (isLoading) return <Skeleton />;
  if (isError) console.error(error);
  return (
    <section className="container space-y-12 my-6 bg-gray-200 bg-opacity-20 backdrop-blur-sm rounded-lg drop-shadow-lg p-5">
      {data?.map((song: Song, i: number) => (
        <SongBar data={data} i={i} key={song.key} song={song} />
      ))}
    </section>
  );
};

export default ListDetails;
