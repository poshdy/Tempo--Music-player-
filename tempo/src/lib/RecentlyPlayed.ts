import { Song, ArtistSong, UserSong } from "@/types/types";
import { SupabaseClient } from "@supabase/supabase-js";

export const recentlyPlayed = async (
  Client: SupabaseClient,
  song: Song & ArtistSong & UserSong,
  userId: string | undefined
) => {
  const { data } = await Client.from("recently-played")
    .select("songId")
    .eq("songId", song?.id || song?.songId || song?.key);

  if (data?.length === 0) {
    const { error, status } = await Client.from("recently-played")
      .insert({
        userId: userId,
        songId: song?.key || song?.id || song?.songId,
        songName: song?.name || song?.title || song?.attributes.name,
        Image:
          song?.Image ||
          song?.attributes?.artwork?.url ||
          song?.images?.coverart,
        uri:
          song?.uri ||
          song?.attributes?.previews?.at(0)?.url ||
          song?.hub?.actions[1]?.uri,
        artistName: song?.subtitle || null,
        artistId: song?.artists?.at(0)?.adamid || song.artist_Id,
        genre: song?.attributes?.genreNames?.at(0) || null,
      })
      .eq("userId", userId);
    if (error) {
      console.error(error);
    }
  } else {
    return;
  }

  //   if (data !== null) {

  //     console.log(status);
  //   }
};
