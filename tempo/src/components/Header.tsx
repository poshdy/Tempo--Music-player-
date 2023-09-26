import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { useAuth } from "@/hooks/use-Auth";
type Props = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({setModal }: Props) => {
  const { user } = useAuth();
  return (
    <section className="flex items-center justify-between">
      <section className="w-full flex items-center  gap-2">
          <img
            src={user?.avatar_url}
            className="w-20 md:w-28 aspect-square rounded-full object-cover"
            alt="profile-pic"
          />
        <div className="flex flex-col items-start justify-center gap-1">
          <h2 className="font-bold text-sm">{user?.user_name}</h2>
          <p className="font-light text-xs text-gray-400">{user?.email}</p>
        </div>
      </section>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="">
            <BsThreeDots onClick={() => setModal((prev) => !prev)} size={30} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit Profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </section>
  );
};

export default Header;
