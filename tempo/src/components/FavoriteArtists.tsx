import { useQuery } from "@tanstack/react-query";
import { FetchDatabase } from "@/lib/FetchDatabase";
import { useAuth } from "@/hooks/use-Auth";
import ArtistCard from "./artist/ArtistCard";
import { useSupabase } from "@/hooks/use-SupaBase";
import { Swiper, SwiperSlide } from "swiper/react";
type Props = {};

const FavoriteArtists = (props: Props) => {
  const supabase = useSupabase();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["db-fav-artist", user?.id],
    queryFn: () => FetchDatabase(supabase, "favorite-artists", user?.id),
    enabled: !!user?.id,
    suspense: true,
  });

  return (
    <Swiper
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
    >
      {data?.data?.map((artist) => (
        <SwiperSlide key={artist?.artistId}>
          <ArtistCard className="" artist={artist} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FavoriteArtists;
