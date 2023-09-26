import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FetchDatabase } from "@/lib/FetchDatabase";
import { useAuth } from "@/hooks/use-Auth";
import { useSupabase } from "@/hooks/use-SupaBase";
import ArtistAlbum from "./artist/ArtistAlbum";
import { Title } from ".";

type Props = {};

const FavoriteAlbums = (props: Props) => {
  const supabase = useSupabase();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["db-fav-albums", user?.id],
    queryFn: () => FetchDatabase(supabase, "favorite-albums", user?.id),
    enabled: !!user?.id,
  });

  return (
    <>
      <Title title="Liked Albums" />

      <ArtistAlbum artistAlbums={data?.data} />
    </>
  );
};

export default FavoriteAlbums;
