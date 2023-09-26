import { useSupabase } from "@/hooks/use-SupaBase";
import { FetchDatabase } from "./FetchDatabase";
import { useAuth } from "@/hooks/use-Auth";

const supabase = useSupabase();
const { user } = useAuth();
export const IsLiked = async (songId: string) => {
  const { data } = await supabase
    .from("favorite-songs")
    .select("liked")
    .eq("userId", user?.id)
    .eq("songId", songId);
  if (data?.length === 0) {
    return false;
  } else {
    return true;
  }
};
