import React from "react";
import { NavigationBTNS, SearchBar, UserState } from "..";
import { Styles } from "@/Styles";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className={`h-10 fixed z-40 left-0 top-0 w-full `}>
      <nav className="w-full h-full flex items-center justify-between p-1">
        <NavigationBTNS />
        <UserState />
      </nav>
    </header>
  );
};

export default NavBar;
