import React from "react";
import { Song } from "@/types/types";

type Props = {
  isPlaying: boolean;
  isActive: boolean;
  activeSong: any;
};

const Track = ({ isActive, isPlaying, activeSong }: Props) => {
  return (
    <div className="flex-1 flex  items-center justify-start">
      <div
        className={`${
          isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
        }  h-16 w-16 p-1 mr-4`}
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
          className="rounded-full"
        />
      </div>
      <div className="w-[40%]">
        <p className="truncate text-white font-bold text-sm md:text-lg">
          {activeSong?.title
            ? activeSong?.title
            : activeSong?.attributes?.name || activeSong?.name}
        </p>
        <p className="truncate text-gray-300">
          {activeSong?.subtitle
            ? activeSong?.subtitle
            : activeSong?.attributes?.artistName}
        </p>
      </div>
    </div>
  );
};

export default Track;
