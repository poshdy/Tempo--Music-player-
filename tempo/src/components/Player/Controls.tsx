import React, { Dispatch, SetStateAction } from "react";
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

type Props = {
  isPlaying: boolean;
  isActive: boolean;
  repeat: boolean;
  shuffle: boolean;
  setRepeat: Dispatch<SetStateAction<boolean>>
  setShuffle: Dispatch<SetStateAction<boolean>>
  currentSongs: any[];
  handlePlayPause: () => void;
  handlePrevSong: () => void;
  handleNextSong: () => void;
};

const Controls = ({
  isPlaying,
  setShuffle,
  repeat,
  setRepeat,
  currentSongs,
  handleNextSong,
  handlePlayPause,
  handlePrevSong,
  shuffle,
}: Props) => {
  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
      <BsArrowRepeat
        size={20}
        color={repeat ? "red" : "white"}
        onClick={() => setRepeat((prev: any) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
      {currentSongs?.length && (
        <MdSkipPrevious
          size={25}
          color="#FFF"
          className="cursor-pointer"
          onClick={handlePrevSong}
        />
      )}
      {isPlaying ? (
        <BsFillPauseFill
          size={30}
          color="#FFF"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      ) : (
        <BsFillPlayFill
          size={30}
          color="#FFF"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      )}
      {currentSongs?.length && (
        <MdSkipNext
          size={25}
          color="#FFF"
          className="cursor-pointer"
          onClick={handleNextSong}
        />
      )}
      <BsShuffle
        size={20}
        color={shuffle ? "red" : "white"}
        onClick={() => setShuffle((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
    </div>
  );
};

export default Controls;
