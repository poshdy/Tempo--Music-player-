import React from "react";
import { Song } from "@/types/types";
import { useSongModal } from "@/zustand/songModal";

type Props = {
  isPlaying: boolean;
  isActive: boolean;
  activeSong: any;
};

const Track = ({ isActive, isPlaying, activeSong }: Props) => {
  const { isOpen } = useSongModal();
  return (
    <div
      className={`${
        isOpen
          ? "flex flex-col  justify-center items-center gap-2"
          : "md:flex-1 flex items-center justify-start "
      }`}
    >
      <img
        src={
          activeSong?.images?.coverart
            ? activeSong?.images?.coverart
            : activeSong?.attributes?.artwork?.url
                .replace("{w}", "150")
                .replace("{h}", "150") || activeSong?.Image
        }
        alt="cover art"
        className={`rounded-full object-cover  ${
          isOpen ? "w-52 aspect-square " : "w-12 h-14  md:h-16 md:w-16 p-1 mr-2"
        }  
          
        }`}
      />

      <div
        className={`w-[30%] text-xs  ${
          isOpen && "text-5xl flex flex-col items-center justify-center"
        }`}
      >
        <p className="truncate text-white font-bold ">
          {activeSong?.title
            ? activeSong?.title
            : activeSong?.attributes?.name || activeSong?.name}
        </p>
        <p className="truncate  text-gray-300">
          {activeSong?.subtitle
            ? activeSong?.subtitle
            : activeSong?.attributes?.artistName}
        </p>
      </div>
    </div>
  );
};

export default Track;
