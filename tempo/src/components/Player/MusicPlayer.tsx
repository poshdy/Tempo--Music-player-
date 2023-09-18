import { usePlayer } from '@/zustand/music-player';
import React,{useState,useEffect} from 'react'
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import Volume from './Volume';

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying ,playPause,nextSong, prevSong} = usePlayer((state) => state);
  const [duration, setDuration] = useState<number>(0);
  const [seekTime, setSeekTime] = useState<number | string>(0);
  const [appTime, setAppTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.3);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);


  useEffect(() => {
    if (currentSongs.length) playPause(true);
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
    <div className="sm:px-12 px-8 w-full flex items-center justify-betwee">
      <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />
      <div className="flex-1 flex flex-col items-center justify-center">
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
          onInput={(event) => setSeekTime((event.target.value))}
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
      <Volume value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
    </div>
  );
};


export default MusicPlayer