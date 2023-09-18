import { useFetchSongs } from "@/hooks/use-fetchSong";
import { HeroImage, SongBar, SongCard, TopArtists } from "../components/index";
import React from "react";

import { Song } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import Title from "@/components/Title";
import { useAuth } from "@/hooks/use-Auth";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Styles } from "@/Styles";
import Wrapper from "@/components/Wrapper";
const Home = () => {
  const { user } = useAuth();
  // console.log(user)
  const { data, error, isError, isLoading } = useFetchSongs();
  if (isError) {
    console.error(error);
  }
  if (isLoading) {
    return (
      <section className="grid grid-cols-4 gap-3 justify-items-center">
        <Skeleton className="container h-[60vh] col-span-4" />
        <Skeleton className="w-[50%] aspect-square" />
        <Skeleton className="w-[50%] aspect-square" />
        <Skeleton className="w-[50%] aspect-square" />
        <Skeleton className="w-[50%] aspect-square" />
        <Skeleton className="w-[50%] aspect-square" />
        <Skeleton className="w-[50%] aspect-square" />
      </section>
    );
  }
  return (
    <section className="space-y-10 w-full">
      <HeroImage isHome={true} data={data[1]} />
      <SongBar data={data?.slice(0, 10)} />

      <Wrapper>
        <Title className="md:text-4xl" title="Top Artists" />
        <TopArtists data={data} />
      </Wrapper>

      <Wrapper>
        <Title className="md:text-4xl" title="Trending Songs" />
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
        >
          {data?.map((song: Song, i: number) => (
            <SwiperSlide>
              <SongCard
                className={`md:w-52 md:h-60 ${Styles.transtions}`}
                data={data}
                i={i}
                song={song}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default Home;
