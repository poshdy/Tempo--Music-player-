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
import { useModal } from "@/zustand/Modal";
import { useAuth } from "@/hooks/use-Auth";
import { useSupabase } from "@/hooks/use-SupaBase";
import { useToast } from "./ui/use-toast";
import LikeButton from "./LikeButton";

type Props = {
  song: Song;
  data: Song[];
  type:'song' | 'artistSong'
};

const ActionBtns = ({ song, data ,type}: Props) => {
  const supabase = useSupabase();
  const { toast } = useToast();
  const { handlePause, handlePlay } = usePlayPause();
  const { isPlaying, activeSong } = usePlayer();
  const { onOpen } = useModal();
  const { user } = useAuth();

 

  return (
    <div className="flex gap-3 items-center my-2 font-bold ">
      <Button className="flex items-center justify-center bg-yellow-300 bg-opacity-40 border-2 rounded-full">
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={() => handlePause()}
          handlePlay={() => handlePlay(song, data, 1)}
        />
      </Button>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
           <LikeButton song={song}/>
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
