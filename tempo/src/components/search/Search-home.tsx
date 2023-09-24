import { useFetchLists } from "@/hooks/use-FetchList";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";
import Title from "../Title";
import RecentlyPlayed from "../RecentlyPlayed";
import FavoriteArtists from "../FavoriteArtists";

type Genre = {
  id: string;
  listid: string;
  name: string;
  urlPath: string;
  count: number;
};

const SearchList = () => {
  return (
    <section className="w-full">
      <RecentlyPlayed />
      <FavoriteArtists />
    </section>
  );
};

export default SearchList;
<Title className="text-2xl md:text-3xl" title="Discover by genres" />;
{
  /* <section className="flex flex-wrap items-center  gap-2 ">
  {data?.genres?.map((grenre: Genre) => (
    <section
      className="w-56 h-40 flex items-center justify-center bg-yellow-300 rounded-lg hover:scale-105 duration-300 ease-in-out"
      key={grenre.id}
      onClick={() => navigate(`/lists/${grenre.listid}`)}
    >
      <h2 className="font-bold text-black">{grenre?.name}</h2>
    </section>
  ))}
</section> */
}
