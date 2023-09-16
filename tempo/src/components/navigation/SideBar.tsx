import { FaSearch, FaList } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import { BsDisc } from "react-icons/bs";
import { PiMicrophoneStageLight } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Styles } from "@/Styles";

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
  ];

  return (
    <nav className=" flex flex-col justify-center gap-4 w-full h-[90vh]">
      {navLinks.map((link) => (
        <NavLink
          className={` flex flex-col  hover:text-yellow-300 ${Styles.transtions} text-secondary gap-5 ${
            mob ? "items-start " : "items-center flex-row"
          }`}
          key={link.id}
          to={link.path}
        >
          <link.icon size={22} />
          {mob && <h3>{link.title}</h3>}
        </NavLink>
      ))}
    </nav>
  );
};

const SideBar = () => {
  const [mob, setMob] = useState<boolean>(false);
  return (
    <aside
      className={`h-screen sticky z-40 left-0 top-0 w-14  py-3 flex flex-col items-center justify-between ${
        Styles.Blur
      } ${Styles.transtions} ${mob && "w-[250px]"}`}
    >
      <CgMenuRight
        size={25}
        className={"text-yellow-300"}
        onClick={() => setMob((prev) => !prev)}
      />

      <NavLinks mob={mob} />

      <section className="flex flex-col gap-3">
        {mob && (
          <h2 className={`${Subheading} flex items-center justify-between`}>
            Playlists
            <FaList />
          </h2>
        )}
        <span className="w-9 aspect-square rounded-md bg-yellow-300 flex items-center justify-center">
          <AiOutlineHeart size={25} />
        </span>
        <span className="w-9 aspect-square rounded-md bg-yellow-300 flex items-center justify-center">
          <AiOutlineHeart size={25} />
        </span>
      </section>
    </aside>
  );
};

export default SideBar;
