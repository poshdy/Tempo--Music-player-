import React from "react";
import { SongCard, Title } from ".";
import { useQuery } from "@tanstack/react-query";
import { FetchDatabase } from "@/lib/FetchDatabase";
import { useSupabase } from "@/hooks/use-SupaBase";
import { useAuth } from "@/hooks/use-Auth";
import { UserSong } from "@/types/types";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <>
      <Title  title="Recently Played" />
      <Swiper  loop={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
      }}>
        {data?.data?.slice(0, 8).reverse().map((song, i: number) => (
          <SwiperSlide key={song?.songId}>
            <SongCard i={i} className="" song={song} data={data?.data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RecentlyPlayed;
