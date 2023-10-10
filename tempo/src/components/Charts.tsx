import { useFetchLists } from "@/hooks/use-FetchList";
import { Genre } from "@/types/types";
import { useState } from "react";
import { SongBar } from ".";
import { useFetchListSongs } from "@/hooks/use-fetchSong";

const Charts = () => {
  const [chart, setChart] = useState("genre-global-chart-1");
  const { data } = useFetchLists();
  const { data: ListSongs } = useFetchListSongs(chart);

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        {data?.genres?.slice(0, 8).map((genre: Genre) => (
          <button
            key={genre.id}
            onClick={(e) => setChart(e.currentTarget.value)}
            value={genre?.listid}
            className="w-fit bg-white outline-none border-none text-sm font-bold hover:bg-orange-500 text-black px-3 py-1 rounded-full"
          >
            {genre.name}
          </button>
        ))}
      </div>

      <SongBar hasBackground title="Top Charts" data={ListSongs} />
    </section>
  );
};

export default Charts;
