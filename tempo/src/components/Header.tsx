import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Title } from ".";
type Props = {
    modal:boolean
    setModal:React.Dispatch<React.SetStateAction<boolean>>
};

const Header = ({modal,setModal}: Props) => {
  return (
    <div className="flex items-center justify-between">
      <Title title="Profile" className="text-2xl md:text-3xl"/>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="">
            <BsThreeDots onClick={()=>setModal((prev)=> !prev)} size={30} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit Profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Header;
