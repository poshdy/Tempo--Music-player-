import { useQuery } from "@tanstack/react-query";
import { FetchDatabase } from "@/lib/FetchDatabase";
import { useAuth } from "@/hooks/use-Auth";
import { useSupabase } from "@/hooks/use-SupaBase";
import { Title } from ".";
import Slider from "./Slider";
type Props = {};

const FavoriteArtists = (props: Props) => {
  const supabase = useSupabase();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["db-fav-artist", user?.id],
    queryFn: () => FetchDatabase(supabase, "favorite-artists", user?.id),
    enabled: !!user?.id,
  });

  return (
    <section className="bg-[#151515] rounded-lg shadow-md p-5 space-y-2">
      <Title title="Favorite Artists" />
      <Slider data={data?.data} type="artist" />
    </section>
  );
};

export default FavoriteArtists;
