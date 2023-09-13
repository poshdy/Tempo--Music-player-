import React from "react";
import { NavigationBTNS, SearchBar, UserState } from "..";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className="sticky top-0 h-[10vh] left-0 px-4 py-2 bg-[#141414] bg-opacity-40 drop-shadow-lg z-50 backdrop-blur-sm ">
      <nav className="w-full h-full flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <NavigationBTNS />
          <SearchBar />
        </div>
        <UserState />
      </nav>
    </header>
  );
};

export default NavBar;
