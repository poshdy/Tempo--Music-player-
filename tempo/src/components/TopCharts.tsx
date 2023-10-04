import { useFetchSongs } from "@/hooks/use-fetchSong";
import { SongBar } from ".";

const TopCharts = () => {
  const { data } = useFetchSongs();
  return (
    <section>
      <SongBar hasBackground data={data} title="Trending Songs" />
    </section>
  );
};

export default TopCharts;
