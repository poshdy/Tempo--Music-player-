import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArtistCard from "./artist/ArtistCard";
import { SongCard } from ".";
import { ArtistSong, Song, UserSong } from "@/types/types";

type Props = {
  type: "song" | "artist";
  data: Song[] & ArtistSong[] & UserSong[];
};
export const BREAKPOINTS = {
  350: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  600: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  700: {
    slidesPerView: 4,
    spaceBetween: 15,
  },
  800: {
    slidesPerView: 5,
    spaceBetween: 15,
  },
  1000: {
    slidesPerView: 6,
    spaceBetween: 15,
  },
};

const Slider = ({ type, data }: Props) => {
  return (
    <Swiper
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      breakpoints={BREAKPOINTS}
    >
      {data?.map((slide: Song & ArtistSong & UserSong, i) => (
        <SwiperSlide key={slide?.id || slide?.key || slide?.songId}>
          {type === "artist" ? (
            <ArtistCard artist={slide} className="" />
          ) : (
            <SongCard
              song={slide}
              data={data}
              className=""
              key={slide.id || slide.key}
              i={i}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
