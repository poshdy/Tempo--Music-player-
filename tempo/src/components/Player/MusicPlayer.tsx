import { usePlayer } from "@/zustand/music-player";
import { useState, useEffect, Suspense } from "react";
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import Volume from "./Volume";
import { useSongModal } from "@/zustand/songModal";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Styles } from "@/Styles";
import SongLyrics from "../song/SongLyrics";
import LyricsSkeleton from "../skeletons/LyricsSkeleton";

const MusicPlayer = () => {
  const {
    activeSong,
    currentSongs,
    currentIndex,
    isActive,
    isPlaying,
    playPause,
    nextSong,
    prevSong,
  } = usePlayer((state) => state);
  const [duration, setDuration] = useState<number>(0);
  const [seekTime, setSeekTime] = useState<number | undefined | null>(0);
  const [appTime, setAppTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.3);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const { onOpen, isOpen, onClose } = useSongModal();
  useEffect(() => {
    if (currentSongs?.length) playPause(true);
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      playPause(false);
    } else {
      playPause(true);
    }
  };

  const handleNextSong = () => {
    playPause(false);

    if (!shuffle) {
      nextSong((currentIndex + 1) % currentSongs?.length);
    } else {
      nextSong(Math.floor(Math.random() * currentSongs?.length));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      prevSong(currentSongs?.length - 1);
    } else if (shuffle) {
      prevSong(Math.floor(Math.random() * currentSongs?.length));
    } else {
      prevSong(currentIndex - 1);
    }
  };

  return (
    <div
      className={` w-full ${
        isOpen
          ? "flex flex-col h-screen items-center justify-start py-2 space-y-5 overflow-scroll"
          : "sm:px-12 px-8  flex items-center justify-between relative"
      }`}
    >
      <div
        onClick={() => (isOpen ? onClose() : onOpen())}
        className={`flex md:hidden absolute right-5 top-0  ${Styles.transtions} rounded-full`}
      >
        {isOpen ? (
          <MdKeyboardArrowDown className=" bg-orange-500" size={30} />
        ) : (
          <MdKeyboardArrowUp
            className="bg-white backdrop-blur-sm drop-shadow-md bg-opacity-20"
            size={30}
          />
        )}
      </div>
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
      />
      <div
        className={`${
          isOpen
            ? "flex flex-col items-center justify-start"
            : "flex-1 flex flex-col items-center justify-center"
        }`}
      >
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <Volume
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
      {isOpen && (
        <Suspense fallback={<LyricsSkeleton />}>
          <SongLyrics
            songId={activeSong.id || activeSong.key || activeSong.songId}
          />
        </Suspense>
      )}
    </div>
  );
};

export default MusicPlayer;
