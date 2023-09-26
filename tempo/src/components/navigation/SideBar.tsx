import { Home } from "lucide-react";
import { Library } from "lucide-react";
import { Search } from "lucide-react";
import Logo from "@/assets/Group 1 (3).png";
import { NavLink } from "react-router-dom";
import { Styles } from "@/Styles";
import { useAuth } from "@/hooks/use-Auth";

const navLinks = [
  { id: "home", path: "/", icon: Home },
  { id: "search", path: "/search", icon: Search },
  { id: "library", path: "/library", icon: Library },
];

const NavLinks = () => {
  return (
    <nav className=" flex flex-row justify-around items-center md:flex-col gap-2 md:justify-center md:items-center w-full md:h-[90vh]">
      {navLinks.map((link) => (
        <NavLink
          className={({ isActive }) => {
            return `p-2 hover:text-orange-400 hover:scale-105 ${
              Styles.transtions
            } text-secondary ${
              isActive
                ? "bg-gray-950 scale-105 rounded-md"
                : "bg-[#2f2f2f] scale-100 rounded-xl"
            }`;
          }}
          key={link.id}
          to={link.path}
        >
          <link.icon size={28} />
        </NavLink>
      ))}
    </nav>
  );
};

const SideBar = () => {
  // const { user } = useAuth();

  return (
    <aside
      className={`h-14 w-full md:w-20 p-1 shadow-lg md:h-screen rounded-full md:rounded-none fixed md:sticky z-50 md:z-40 bottom-0 left-0 md:top-0 bg-[#1c1c1c] py-3 flex flex-row md:flex-col md:items-center md:justify-center  ${Styles.transtions} `}
    >
      <img className="w-20 aspect-square object-cover hidden md:flex" src={Logo} alt="logo" />
      <NavLinks />
    </aside>
  );
};

export default SideBar;
