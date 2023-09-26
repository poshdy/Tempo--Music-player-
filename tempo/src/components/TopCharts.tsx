import { useFetchSongs } from "@/hooks/use-fetchSong";
import React from "react";
import { SongBar } from ".";

type Props = {};

const TopCharts = (props: Props) => {
  const { data } = useFetchSongs();
  return (
    <section>
      <SongBar hasBackground={false} data={data} title="Trending Songs" />
    </section>
  );
};

export default TopCharts;
