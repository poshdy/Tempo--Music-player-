import { Song } from "@/types/types";
import ArtistCard from "./ArtistCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useFetchSongs } from "@/hooks/use-fetchSong";
import { Title } from "..";

type Props = {};

const TopArtists = ({}: Props) => {
  const { data } = useFetchSongs();

  return (
    <>
    <Title title="Trending Artists"/>
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
        {data?.map((artist: Song) => (
          <SwiperSlide key={artist?.artists[0]?.adamid}>
            <ArtistCard className="w-24 md:w-56" artist={artist} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default TopArtists;
