import { Title } from ".";
import { useQuery } from "@tanstack/react-query";
import { FetchDatabase } from "@/lib/FetchDatabase";
import { useSupabase } from "@/hooks/use-SupaBase";
import { useAuth } from "@/hooks/use-Auth";

import Slider from "./Slider";

type Props = {};

const RecentlyPlayed = (props: Props) => {
  const supabase = useSupabase();
  const { user } = useAuth();

  const { data } = useQuery({
    queryKey: ["recently-played", user?.id],
    queryFn: () => FetchDatabase(supabase, "recently-played", user?.id),
    suspense: true,
    enabled: !!user?.id,
  });

  return (
    <section className="bg-[#151515] rounded-lg shadow-md p-5 space-y-2">
      <Title title="Recently Played" />
      <Slider data={data?.data?.reverse()} type="song" />
    </section>
  );
};

export default RecentlyPlayed;
