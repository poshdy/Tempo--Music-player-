import { SongBar, SongCard } from "@/components";
import Title from "@/components/Title";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/use-Auth";
import { useSupabase } from "@/hooks/use-SupaBase";
import { useFetchUserArtists } from "../components/Database";
import { Song } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArtistCard from "@/components/artist/ArtistCard";
import ArtistAlbum from "@/components/artist/ArtistAlbum";

type Props = {};

const Profile = (props: Props) => {
  const supabase = useSupabase();
  const { user } = useAuth();

  const UserLikedSongs = async () => {
    return await supabase
      .from("favorite-songs")
      .select("*")
      .eq("userId", user?.id);
  };
  const UserFavArtists = async () => {
    return await supabase
      .from("favorite-artists")
      .select("*")
      .eq("userId", user?.id);
  };
  const UserFavAlbums = async () => {
    return await supabase
      .from("favorite-albums")
      .select("*")
      .eq("userId", user?.id);
  };

  const {
    data: FavoriteSongs,
    error: SongError,
    isError,
    isLoading: IsSongLoading,
  } = useQuery({
    queryKey: ["user-fav-songs"],
    queryFn: UserLikedSongs,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!user?.id,
  });
  const {
    data: ArtistData,
    isLoading: IsLoadingArtist,
    error: ArtistError,
    isError: IsArtistError,
  } = useQuery({
    queryKey: ["user-fav-artists"],
    queryFn: UserFavArtists,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!user?.id,
  });
  const {
    data: AlbumData,
    isLoading: IsLoadingAlbum,
    error: AlbumError,
    isError: IsAlbumError,
  } = useQuery({
    queryKey: ["user-fav-albums"],
    queryFn: UserFavAlbums,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!user?.id,
  });
  if (IsSongLoading || IsLoadingArtist) {
    return <Skeleton />;
  }

  return (
    <section className="container py-20">
      <section className="space-y-3">
        <Title title="Liked Songs" />

        <Swiper
          pagination
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
          modules={[Navigation, Pagination]}
        >
          {FavoriteSongs?.data?.map((song, i: number) => (
            <SwiperSlide key={song.key}>
              <SongCard size="" data={FavoriteSongs?.data} i={i} song={song} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="space-y-3 my-3">
        <Title title="Liked Artists" />
        <Swiper
          pagination
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
          modules={[Navigation, Pagination]}
        >
          {ArtistData?.data?.map((artist, i: number) => (
            <SwiperSlide key={artist.artistId}>
              <ArtistCard artist={artist} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="space-y-3">
        <Title title="Favorite artists" />
        <ArtistAlbum artistAlbums={AlbumData?.data} />
      </section>
    </section>
  );
};

export default Profile;
