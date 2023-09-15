import React from "react";
import { NavigationBTNS, SearchBar, UserState } from "..";
import { Styles } from "@/Styles";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <header
      className={`h-screen sticky z-40 left-0 top-0 w-12 md:w-14 lg:w-16 ${Styles.Blur}`}
    >
      <nav className="w-full h-full ">
        <UserState />
      </nav>
    </header>
  );
};

export default NavBar;
