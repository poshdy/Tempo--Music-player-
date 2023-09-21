import { SearchBar } from "@/components";
import { Outlet } from "react-router-dom";

const Search = () => {
  return (
    <section className="container pt-10">
      <SearchBar/>
      <Outlet />
    </section>
  );
};

export default Search;
