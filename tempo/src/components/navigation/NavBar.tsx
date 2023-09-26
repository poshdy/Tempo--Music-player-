import React from "react";
import { NavigationBTNS, SearchBar, UserState } from "..";
import { Styles } from "@/Styles";
import { useAuth } from "@/hooks/use-Auth";
import { useLocation } from "react-router-dom";

type Props = {};

const NavBar = (props: Props) => {
  const { user } = useAuth();
  const location = useLocation();
  let Content =
    location.pathname === "/" ? (
      <h2 className="text-xl  md:text-2xl leading-3 tracking-tighter font-semibold">
        Hello {user?.user_name}
      </h2>
    ) : <h2 className="text-xl md:text-2xl  leading-3 tracking-tighter font-semibold">{location.pathname.replace("/","").toUpperCase()}</h2>;

  return (
    <header className={`h-16  w-full p-5`}>
      <nav className="w-full h-full flex items-center justify-between p-5">
        {Content}
        <UserState />
      </nav>
    </header>
  );
};

export default NavBar;
