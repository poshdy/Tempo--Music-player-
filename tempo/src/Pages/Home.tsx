import { TopArtists, Wrapper } from "../components/index";
import FavoriteArtists from "@/components/FavoriteArtists";
import { Suspense } from "react";
import FavArtistsSkeleton from "@/components/skeletons/FavArtistsSkeleton";
import TopCharts from "@/components/TopCharts";
import SongbarSkeleton from "@/components/skeletons/SongbarSkeleton";
import FavoriteAlbums from "@/components/FavoriteAlbums";
import RecentlyPlayed from "@/components/RecentlyPlayed";
import { useFetchLists } from "@/hooks/use-FetchList";
import { useNavigate } from "react-router-dom";
import { Genre } from "@/types/types";
import Title from "../components/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAuth } from "@/hooks/use-Auth";
const Home = () => {
  const { data } = useFetchLists();
  const { user } = useAuth();

  const navigate = useNavigate();
  return (
    <Wrapper className="my-14 space-y-10">
      <Suspense fallback={<FavArtistsSkeleton />}>
        {user ? <FavoriteArtists /> : <TopArtists />}
      </Suspense>
      <Suspense fallback={<FavArtistsSkeleton />}>
        {user && <RecentlyPlayed />}
      </Suspense>
      <Suspense fallback={<SongbarSkeleton />}>
        <TopCharts />
      </Suspense>
      <Suspense fallback={<FavArtistsSkeleton />}>
        {user && <FavoriteAlbums />}
      </Suspense>
      <Suspense fallback={<h1>Loadingg</h1>}>
        <Title title="Top Charts" />
        <Swiper
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
        >
          {data?.genres?.map((grenre: Genre) => (
            <SwiperSlide key={grenre?.id}>
              <section
                className="md:w-80 w-44 h-32 md:h-40 rounded-lg bg-orange-400 p-2 cursor-pointer"
                onClick={() => navigate(`/lists/${grenre.listid}`)}
              >
                <h3 className="font-black text-[#030303] text-2xl md:text-3xl ">
                  {grenre?.name?.toUpperCase().replace("/", "\n")}
                </h3>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>
    </Wrapper>
  );
};

export default Home;
