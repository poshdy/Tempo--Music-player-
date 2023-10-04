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
          ? "flex flex-col-reverse  justify-center items-center gap-2"
          : "md:flex-1 flex items-center justify-start "
      }`}
    >
      <img
        src={
          activeSong?.images?.coverart
            ? activeSong?.images?.coverart
            : activeSong?.attributes?.artwork?.url
                .replace("{w}", "200")
                .replace("{h}", "200") || activeSong?.Image
        }
        alt="cover art"
        className={` object-cover  ${
          isOpen
            ? "w-56 aspect-square rounded-3xl"
            : "w-12 h-14 rounded-full  md:h-16 md:w-16 p-1 mr-2"
        }  
          
        }`}
      />

      <div
        className={` ${
          isOpen
            ? "text-2xl flex flex-col items-center justify-center"
            : "w-[30%] text-xs "
        }`}
      >
        <p className="truncate font-bold ">
          {activeSong?.title
            ? activeSong?.title
            : activeSong?.attributes?.name || activeSong?.name}
        </p>
        <p className="truncate font-medium text-sm">
          {activeSong?.subtitle
            ? activeSong?.subtitle
            : activeSong?.attributes?.artistName}
        </p>
      </div>
    </div>
  );
};

export default Track;
