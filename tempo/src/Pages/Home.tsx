import { TopArtists, Wrapper } from "../components/index";
import FavoriteArtists from "@/components/FavoriteArtists";
import { Suspense } from "react";
import FavArtistsSkeleton from "@/components/skeletons/FavArtistsSkeleton";
import TopCharts from "@/components/TopCharts";
import SongbarSkeleton from "@/components/skeletons/SongbarSkeleton";
import FavoriteAlbums from "@/components/FavoriteAlbums";
import RecentlyPlayed from "@/components/RecentlyPlayed";
import { useAuth } from "@/hooks/use-Auth";
import Charts from "@/components/Charts";

const Home = () => {
  const { user } = useAuth();

  return (
    <Wrapper className="my-14 space-y-16">
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
      <Suspense fallback={<SongbarSkeleton />}>
        <Charts />
      </Suspense>
    </Wrapper>
  );
};

export default Home;
