import { recentlyPlayed } from "@/lib/RecentlyPlayed";
import { ArtistSong, Song, UserSong } from "@/types/types";
import { usePlayer } from "@/zustand/music-player";
import React from "react";
import { useSupabase } from "@/hooks/use-SupaBase";
import { useAuth } from "./use-Auth";
const usePlayPause = () => {
  const { user } = useAuth();
  const supabase = useSupabase();
  const { setActiveSong, playPause } = usePlayer();
  const handlePlay = async (
    song: Song & ArtistSong & UserSong,
    data: Song[] | ArtistSong[] | UserSong[],
    i: number
  ) => {
    setActiveSong({ song, data, i });
    playPause(true);

    recentlyPlayed(supabase, song, user?.id);
  };
  const handlePause = () => {
    playPause(false);
  };

  return {
    handlePause,
    handlePlay,
  };
};

export default usePlayPause;
