import useDebounce from "@/hooks/use-debounce";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = {};

const SearchBar = (props: Props) => {
  const [Query, setQuery] = useState<string | null>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { debouncedValue } = useDebounce(Query);
  const navigate = useNavigate();
  useEffect(() => {
    inputRef.current?.focus();

    return () => {
      console.log("Clean up");
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${debouncedValue}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <input
        ref={inputRef}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="px-4 text-black focus:border-black focus:outline-none b py-2 border-2 border-black my-1 rounded-full"
        placeholder="Search"
      />
    </form>
  );
};

export default SearchBar;
