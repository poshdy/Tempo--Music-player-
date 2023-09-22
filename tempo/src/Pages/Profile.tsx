import { SongBar, SongCard } from "@/components";
import Title from "@/components/Title";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/use-Auth";
import { Song } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArtistCard from "@/components/artist/ArtistCard";
import ArtistAlbum from "@/components/artist/ArtistAlbum";
import { useSupabase } from "@/hooks/use-SupaBase";

type Props = {};
const Breakpoints = {
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
};
const Profile = (props: Props) => {
  // const Supabase = useSupabase();
  // const { user } = useAuth();

  // const UserLikedSongs = async () => {
  //   return await Supabase.from("favorite-songs")
  //     .select("*")
  //     .eq("userId", user?.id);
  // };
 
  // const UserFavAlbums = async () => {
  //   return await Supabase.from("favorite-albums")
  //     .select("*")
  //     .eq("userId", user?.id);
  // };

  // const {
  //   data: FavoriteSongs,
  //   error: SongError,
  //   isError,
  //   isLoading: IsSongLoading,
  // } = useQuery({
  //   queryKey: ["user-fav-songs"],
  //   queryFn: UserLikedSongs,
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  //   enabled: !!user?.id,
  // });
  // const {
  //   data: ArtistData,
  //   isLoading: IsLoadingArtist,
  //   error: ArtistError,
  //   isError: IsArtistError,
  // } = useQuery({
  //   queryKey: ["user-fav-artists"],
  //   queryFn: UserFavArtists,
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  //   enabled: !!user?.id,
  // });
  // const {
  //   data: AlbumData,
  //   isLoading: IsLoadingAlbum,
  //   error: AlbumError,
  //   isError: IsAlbumError,
  // } = useQuery({
  //   queryKey: ["user-fav-albums"],
  //   queryFn: UserFavAlbums,
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  //   enabled: !!user?.id,
  // });
  // if (IsSongLoading || IsLoadingArtist) {
  //   return <Skeleton />;
  // }

  return (
    <section className="container py-20">
      {/* <section className="space-y-3">
        <Title className="text-2xl md:text-4xl" title="Liked Songs" />
        <Swiper loop={true} breakpoints={Breakpoints}>
          {FavoriteSongs?.data?.map((song, i: number) => (
            <SwiperSlide key={song.key}>
              <SongCard
                className=""
                data={FavoriteSongs?.data}
                i={i}
                song={song}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}
     
      {/* <section className="space-y-3">
        <Title className="text-2xl md:text-4xl" title="Favorite artists" />
        <ArtistAlbum artistAlbums={AlbumData?.data} />
      </section> */}
    </section>
  );
};

export default Profile;
