import React from "react";
import { Title } from ".";
import { useQuery } from "@tanstack/react-query";
import { FetchDatabase } from "@/lib/FetchDatabase";
import { useAuth } from "@/hooks/use-Auth";
import ArtistCard from "./artist/ArtistCard";
import { useSupabase } from "@/hooks/use-SupaBase";

type Props = {};

const FavoriteArtists = (props: Props) => {
  const supabase = useSupabase();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["db-fav-artist", user?.id],
    queryFn: () => FetchDatabase(supabase, "favorite-artists", user?.id),
    enabled: !!user?.id,
    suspense: true,
  });

  return (
    <section className="flex gap-2 items-center justify-center">
      {data?.data?.map((artist) => (
        <ArtistCard key={artist?.artistId} className="" artist={artist} />
      ))}
    </section>
  );
};

export default FavoriteArtists;
