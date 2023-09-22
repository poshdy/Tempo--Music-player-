import { useFetchSongs } from "@/hooks/use-fetchSong";
import {
  HeroImage,
  SongBar,
  SongCard,
  TopArtists,
  Wrapper,
} from "../components/index";
import { ArtistSong, Song } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import Title from "@/components/Title";
import { useAuth } from "@/hooks/use-Auth";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Styles } from "@/Styles";
import FavoriteArtists from "@/components/FavoriteArtists";
import { Suspense } from "react";
import FavArtistsSkeleton from "@/components/skeletons/FavArtistsSkeleton";
import TopCharts from "@/components/TopCharts";
import SongbarSkeleton from "@/components/skeletons/SongbarSkeleton";
const Home = () => {
  const { user } = useAuth();
  return (
    <Wrapper>
      <Title
        className="text-2xl md:text-3xl"
        title={`Hello ${user?.user_name}!`}
      />
      <Suspense fallback={<FavArtistsSkeleton />}>
        <Title className="text-xl md:text-2xl" title="Liked Artists" />
        <FavoriteArtists />
      </Suspense>
      <Suspense fallback={<SongbarSkeleton />}>
        <TopCharts />
      </Suspense>
    </Wrapper>
  );
};

export default Home;
{
  /* <HeroImage isHome={true} song={data[1]} data={data} /> */
}
{
  /* <SongBar title="Top Charts" data={data?.slice(0, 10)} />

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
    {data?.map((song: Song & ArtistSong, i: number) => (
      <SwiperSlide key={song.key}>
        <SongCard
          className={`md:w-52 md:h-60 ${Styles.transtions}`}
          data={data}
          i={i}
          song={song}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</Wrapper> */
}
