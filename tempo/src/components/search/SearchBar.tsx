import useDebounce from "@/hooks/use-debounce";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../ui/input";

const SearchBar = () => {
  const [Query, setQuery] = useState<string | null>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { debouncedValue } = useDebounce(Query);
  const navigate = useNavigate();
  useEffect(() => {
    inputRef.current?.focus();

    return () => {};
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${debouncedValue}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <Input
        ref={inputRef}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="text-[#1c1c1c] focus:border-[#1c1c1c] focus:outline-[#1c1c1c]"
        placeholder="What Do you want listen to?"
      />
    </form>
  );
};

export default SearchBar;
