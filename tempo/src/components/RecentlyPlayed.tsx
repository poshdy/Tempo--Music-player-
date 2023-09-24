import React from "react";
import { SongCard, Title } from ".";
import { useQuery } from "@tanstack/react-query";
import { FetchDatabase } from "@/lib/FetchDatabase";
import { useSupabase } from "@/hooks/use-SupaBase";
import { useAuth } from "@/hooks/use-Auth";
import { UserSong } from "@/types/types";

type Props = {};

const RecentlyPlayed = (props: Props) => {
  const supabase = useSupabase();
  const { user } = useAuth();

  const { data } = useQuery({
    queryKey: ["recently-played", user?.id],
    queryFn: () => FetchDatabase(supabase, "recently-played", user?.id),
    suspense: true,
    enabled:!!user?.id
  });

  return (
    <>
      <Title className="text-2xl md:text-3xl" title="Recently Played" />
      <section className="flex flex-wrap gap-2">
        {data?.data?.slice(0, 6).map((song, i: number) => (
          <SongCard i={i} className="" song={song} data={data?.data} />
        ))}
      </section>
    </>
  );
};

export default RecentlyPlayed;
