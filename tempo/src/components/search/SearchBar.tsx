import useDebounce from "@/hooks/use-debounce";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = {};

const SearchBar = (props: Props) => {
  const [Query, setQuery] = useState<string | null>("");
  const { debouncedValue } = useDebounce(Query);
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log('query is sent')

  //   return () => {
  //   console.log('Clean up')
  //   }
  // }, [Query])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${debouncedValue}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="px-4 text-black focus:border-black focus:outline-none b py-2 border-2 border-black my-1 rounded-full"
        placeholder="Search"
      />
    </form>
  );
};

export default SearchBar;
