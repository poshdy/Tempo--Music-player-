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

  return <SongBar data={data} />;
};

export default ListDetails;
