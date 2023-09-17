import { Song } from "@/types/types";
import React from "react";
import ArtistCard from "./artist/ArtistCard";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  data: Song[];
};

const TopArtists = ({ data }: Props) => {
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
          slidesPerView: 6,
          spaceBetween: 15,
        },
      }}
      className="w-full flex items-center justify-center"
    >
      {data?.map((artist) => (
        <SwiperSlide key={artist?.artists?.at(0)?.adamid}>
          <ArtistCard artist={artist} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopArtists;
