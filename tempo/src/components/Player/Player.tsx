import { Song } from "@/types/types";
import React, { useRef ,useEffect } from "react";

type Props = {
  isPlaying: boolean;
  activeSong: any;
  volume: number;
  seekTime: number | string;
  repeat: boolean;
  currentIndex: number;
  onEnded: () => void;
  onTimeUpdate:(event: any) => void,
  onLoadedData: (event: any) => void
};


const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  repeat,
  onEnded,
  onLoadedData,onTimeUpdate
}: Props) => {
  const audioRef = useRef <HTMLAudioElement | null>(null);

  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause();
    }
  }
  // useEffect(() => {
  //   audioRef.current?.volume = volume
    
  // }, [volume])
  // useEffect(() => {
  //  audioRef.current?.currentTime = seekTime
  // }, [seekTime]);

  

  return <audio ref={audioRef} src={activeSong.hub?.actions[1]?.uri || activeSong?.attributes?.previews[0]?.url}  loop={repeat}
  onEnded={onEnded}
  onTimeUpdate={onTimeUpdate}
  onLoadedData={onLoadedData}/>;
};

export default Player;
