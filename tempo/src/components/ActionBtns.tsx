import React from "react";
import { PlayPause } from ".";
import { Song } from "@/types/types";
import usePlayPause from "@/hooks/use-Play-Pause";
import { usePlayer } from "@/zustand/music-player";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/zustand/Modal";
// import { useAuth } from "@/hooks/use-Auth";

type Props = {
  song: Song;
  data: Song[];
};

const ActionBtns = ({ song, data }: Props) => {
  const navigate = useNavigate();
  const { handlePause, handlePlay } = usePlayPause();
  const { isPlaying, activeSong } = usePlayer();
  const { isOpen, onClose, onOpen } = useModal();
  // const { user } = useAuth();
  // const handleClick = () => {
  //   if (!user) {
  //     onOpen();
  //   } else {
  //     console.log("there is a user");
  //   }
  // };
  return (
    <div className="flex gap-3 items-center my-2 font-bold ">
      <Button className="flex items-center justify-center bg-yellow-300 bg-opacity-40 border-2 rounded-full">
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={() => handlePause()}
          handlePlay={() => handlePlay(song, data, 2)}
        />
      </Button>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <AiOutlineHeart size={30} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Likes</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <BsThreeDots size={30} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ActionBtns;
<div className="flex justify-self-end  gap-1 ">
  <Button className="p-2 border-white border-2 bg-yellow-300 rounded-full">
    <AiOutlineHeart size={25} />
  </Button>
</div>;
