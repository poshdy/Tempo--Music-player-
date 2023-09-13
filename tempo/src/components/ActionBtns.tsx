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

import { useNavigate } from "react-router-dom";
import { useModal } from "@/zustand/Modal";

type Props = {
  song: Song;
  data: Song[];
};

const ActionBtns = ({ song, data }: Props) => {
  const navigate = useNavigate();
  const { handlePause, handlePlay } = usePlayPause();
  const { isPlaying, activeSong } = usePlayer();
  const { isOpen, onClose, onOpen } = useModal();
  const handleClick = () => {
    // if (!user) {
    //   onOpen();
    // } else {
    //   console.log("there is a user");
    // }
  };
  return (
    <div className="flex gap-3 items-center my-2 font-bold ">
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={() => handlePause()}
        handlePlay={() => handlePlay(song, data, 2)}
      />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <AiOutlineHeart size={30} onClick={handleClick} />
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
