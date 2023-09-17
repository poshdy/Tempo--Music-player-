import { FaSearch, FaList } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import { BsDisc } from "react-icons/bs";
import { PiMicrophoneStageLight } from "react-icons/pi";
import { BiLibrary } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Styles } from "@/Styles";
import { useAuth } from "@/hooks/use-Auth";

const navLinks = [
  { id: "home", path: "/", icon: AiOutlineCompass },
  { id: "search", path: "/search", icon: FaSearch },
  { id: "library", path: "/profile", icon: BiLibrary },
];

const NavLinks = () => {
  return (
    <nav className=" flex flex-row justify-around items-center md:flex-col gap-2 md:justify-center md:items-center  w-full md:h-[90vh]">
      {navLinks.map((link) => (
        <NavLink
          className={` bg-gray-950 p-2 rounded-lg  hover:text-yellow-300 hover:scale-105 ${Styles.transtions} text-secondary `}
          key={link.id}
          to={link.path}
        >
          <link.icon size={25} />
        </NavLink>
      ))}
    </nav>
  );
};

const SideBar = () => {
  const { user } = useAuth();

  return (
    <aside
      className={`h-14 w-full md:w-16 p-1 md:h-screen rounded-full md:rounded-none fixed md:sticky z-50 md:z-40 bottom-0 left-0 md:top-0  py-3 flex flex-row md:flex-col md:items-center md:justify-center ${Styles.Blur} ${Styles.transtions} `}
    >
      <CgMenuRight size={25} className={"text-yellow-300 hidden md:flex "} />

      <NavLinks />

      <section className="hidden md:flex flex-col">
        {user && (
          <Link
            to={"/likes"}
            className="w-9 aspect-square rounded-md bg-yellow-300 flex items-center justify-center"
          >
            <AiOutlineHeart size={25} />
          </Link>
        )}
      </section>
    </aside>
  );
};

export default SideBar;
