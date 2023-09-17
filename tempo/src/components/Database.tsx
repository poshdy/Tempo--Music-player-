import { useQuery } from "@tanstack/react-query";
import { useSupabase } from "../hooks/use-SupaBase";
import { useAuth } from "../hooks/use-Auth";

const supabase = useSupabase();
const { user } = useAuth();
async function UserLikedSongs() {
  await supabase.from("favorite-songs").select("*").eq("user_id", user?.id);
}
export const useFetchUserSongs = () => {
  return useQuery({
    queryKey: ["user-fav-songs"],
    queryFn: UserLikedSongs,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
async function UserFavArtists() { await supabase
    .from("favorite-artists")
    .select("*")
    .eq("user_id", user?.id);
}
export const useFetchUserArtists = () => {
  return useQuery({
    queryKey: ["user-fav-artists"],
    queryFn: UserFavArtists,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
async function UserLikedAblums() {
  return await supabase
    .from("favorite-albums")
    .select("*")
    .eq("user_id", user?.id);
}
export const useFetchUserAlbums = () => {
  return useQuery({
    queryKey: ["user-fav-albums"],
    queryFn: UserLikedAblums,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
