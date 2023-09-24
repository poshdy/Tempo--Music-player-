import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FetchDatabase } from "@/lib/FetchDatabase";
import { useAuth } from "@/hooks/use-Auth";
import ArtistCard from "./artist/ArtistCard";
import { useSupabase } from "@/hooks/use-SupaBase";
import ArtistAlbum from "./artist/ArtistAlbum";

type Props = {};

const FavoriteAlbums = (props: Props) => {
  const supabase = useSupabase();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["db-fav-albums", user?.id],
    queryFn: () => FetchDatabase(supabase, "favorite-albums", user?.id),
    enabled: !!user?.id,
    suspense: true,
  });

  return (
    <section>
      <ArtistAlbum artistAlbums={data?.data} />
    </section>
  );
};

export default FavoriteAlbums;
