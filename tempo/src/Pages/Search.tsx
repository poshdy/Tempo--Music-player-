import { SearchBar } from "@/components";
import { Outlet } from "react-router-dom";
import {Wrapper} from '@/components'
const Search = () => {
  return (
    <Wrapper className="my-14 space-y-10" >
      <SearchBar/>
      <Outlet />
    </Wrapper>
  );
};

export default Search;
