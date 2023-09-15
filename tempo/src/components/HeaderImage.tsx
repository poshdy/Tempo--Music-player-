import { Styles } from "@/Styles";
import useDemintion from "@/hooks/use-Diementions";
import { Song } from "@/types/types";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { PlayPause } from ".";
import usePlayPause from "@/hooks/use-Play-Pause";
import { usePlayer } from "@/zustand/music-player";
import { AiOutlineHeart } from "react-icons/ai";
import ActionBtns from "./ActionBtns";

type Props = {
  artistData?: any;
  src?: string;
  song?: Song;
  data?: any[];
};

const HeaderImage = ({ artistData, song, src, data }: Props) => {
  // const { handlePause, handlePlay } = usePlayPause();
  // const { activeSong, isPlaying } = usePlayer();

  return (
    <section className="flex flex-col items-start justify-start md:flex-row gap-1 md:items-end h-[45vh] w-full ">
      <div className="flex p-5 ">
        <img
          src={
            artistData?.attributes?.artwork?.url
              .replace("{w}", `350`)
              .replace("{h}", `350`) || src
          }
          className="object-cover max-w-xs aspect-square w-[250px] aspect-squares "
        />
        <section className="flex flex-col  p-2">
          <h2 className={`${Styles.Paragraph} `}>{artistData?.type}</h2>
          <h2 className={`${Styles.heading} `}>
            {artistData?.attributes?.name || song?.title}
          </h2>
          <h2 className={`${Styles.subHeading} `}>
            {artistData?.attributes?.artistName}
          </h2>
       <ActionBtns/>
        </section>
      </div>
    </section>
  );
};

export default HeaderImage;
{
  /* > */
}
