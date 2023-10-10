import { useQuery } from "@tanstack/react-query";
import { FetchDatabase } from "@/lib/FetchDatabase";
import { useAuth } from "@/hooks/use-Auth";
import { useSupabase } from "@/hooks/use-SupaBase";
import { SongBar } from ".";

const FavoriteSongs = () => {
  const supabase = useSupabase();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["db-fav-songs", user?.id],
    queryFn: () => FetchDatabase(supabase, "favorite-songs", user?.id),
    enabled: !!user?.id,
    suspense: true,
  });
  return <SongBar hasBackground={false} data={data?.data} title="" />;
};

export default FavoriteSongs;
