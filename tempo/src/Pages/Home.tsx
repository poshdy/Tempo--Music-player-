import { Wrapper } from "../components/index";
import Title from "@/components/Title";
import { useAuth } from "@/hooks/use-Auth";
import FavoriteArtists from "@/components/FavoriteArtists";
import { Suspense } from "react";
import FavArtistsSkeleton from "@/components/skeletons/FavArtistsSkeleton";
import TopCharts from "@/components/TopCharts";
import SongbarSkeleton from "@/components/skeletons/SongbarSkeleton";
import FavoriteAlbums from "@/components/FavoriteAlbums";
import RecentlyPlayed from "@/components/RecentlyPlayed";
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
      <Suspense fallback={<FavArtistsSkeleton />}>
        <RecentlyPlayed />
      </Suspense>
      <Suspense fallback={<SongbarSkeleton />}>
        <TopCharts />
      </Suspense>
      <Suspense fallback={<FavArtistsSkeleton />}>
        <Title className="text-xl md:text-2xl" title="Liked Albums" />
        <FavoriteAlbums />
      </Suspense>
    </Wrapper>
  );
};

export default Home;
