import { FaSearch, FaList } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import { BsDisc } from "react-icons/bs";
import { PiMicrophoneStageLight } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Subheading = "text-secondary/70 font-bold text-xs ";
const FlexContainer =
  "flex item-center gap-6 text-lg hover:text-yellow-300 hover:scale-105 duration-300 ease-in-out  ";
const NavLinks = ({ mob }: { mob: boolean }) => {
  const navLinks = [
    { id: "home", path: "/", title: "explore", icon: AiOutlineCompass },
    { id: "search", path: "/search", title: "search", icon: FaSearch },
    { id: "discover", path: "/search", title: "Discover", icon: BsDisc },
    {
      id: "charts",
      path: "/top-charts",
      title: "Top Charts",
      icon: FaChartSimple,
    },
    // { id: "albums", path: "/", title: "Albums", icon: PiMicrophoneStageLight },
    { id: "likes", path: "/", title: "Likes", icon: AiOutlineHeart },
  ];

  return (
    <nav className="space-y-2 font-medium text-secondary flex flex-col justify-around w-full h-[90vh]">
      {navLinks.map((link) => (
        <ul
          key={link.id}
          className={` flex flex-col  gap-2 ${
            mob ? "items-start" : "items-center"
          }`}
        >
          <NavLink to={link.path}>
            <li className={FlexContainer}>
              <link.icon />
              {mob && <li>{link.title}</li>}
            </li>
          </NavLink>
        </ul>
      ))}

      <section className="flex flex-col gap-3">
        {mob ? (
          <>
            <h2 className={`${Subheading} flex items-center justify-between`}>
              Playlists
              <FaList />
            </h2>
            <NavLink to={"/discover"}>Playlist 1</NavLink>
            <NavLink to={"/"}>Playlist 1</NavLink>
            <NavLink to={"/"}>Playlist 1</NavLink>
            <NavLink to={"/"}>Playlist 1</NavLink>
          </>
        ) : (
          <FaList />
        )}
      </section>
    </nav>
  );
};

const SideBar = () => {
  const [mob, setMob] = useState<boolean>(false);
  return (
    <aside
      className={`h-screen sticky z-40 left-0 top-0 w-14 p-5 flex flex-col bg-black/40 backdrop-blur-sm drop-shadow-lg duration-500 ease-in-out ${
        mob && "w-[250px]"
      }`}
    >
      <h1 className={`text-xl text-yellow-300 font-bold`}>
        <CgMenuRight onClick={() => setMob((prev) => !prev)} />
      </h1>

      <NavLinks mob={mob} />
    </aside>
  );
};

export default SideBar;
