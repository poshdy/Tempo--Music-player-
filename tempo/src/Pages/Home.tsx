import { useFetchSongs } from "@/hooks/use-fetchSong";
import { HeroImage, SongBar, SongCard, TopArtists } from "../components/index";
import React from "react";

import { Song } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import Title from "@/components/Title";
import { useAuth } from "@/hooks/use-Auth";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
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
    <section className="space-y-10">
      <HeroImage isHome={true} data={data[1]} />
      {/* <h2>welcome :{user?.email}</h2> */}
      <SongBar data={data.slice(0, 10)} />

      <section className="container">
        <Title title="Top Artists" />
        <TopArtists data={data} />
      </section>
      <section className="container space-y-2 mb-5">
        <Title title="Trending Songs" />
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
          {data?.map((song: Song, i: number) => (
            <SwiperSlide  key={song.key}>
              <SongCard size="200px" data={data} i={i} song={song} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Home;
