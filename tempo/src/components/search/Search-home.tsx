import { useFetchLists } from "@/hooks/use-FetchList";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";
import Title from "../Title";

type Genre = {
  id: string;
  listid: string;
  name: string;
  urlPath: string;
  count: number;
};

const SearchList = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading, error } = useFetchLists();

  if (isLoading) return <Skeleton className="container h-[60vh] rounded-xl" />;
  if (isError) console.log(error);
  return (
    <section className="w-full my-3 space-y-3 flex flex-col items-center justify-center md:items-start">
      <Title title="Discover by genres" />
      <section className="flex flex-wrap items-center  gap-2 ">
        {data?.genres?.map((grenre: Genre) => (
          <section
            className="w-56 h-40 flex items-center justify-center bg-yellow-300 rounded-lg hover:scale-105 duration-300 ease-in-out"
            key={grenre.id}
            onClick={() => navigate(`/lists/${grenre.listid}`)}
          >
            <h2 className="font-bold text-black">{grenre?.name}</h2>
          </section>
        ))}
      </section>
    </section>
  );
};

export default SearchList;
