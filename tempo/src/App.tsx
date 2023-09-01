import { Routes, Route } from "react-router-dom";
import { Home, Artist, NotFound, Discover, SongDetails } from "./Pages";
import SideBar from "./components/SideBar";
import MusicPlayer from "./components/Player/MusicPlayer";
import { usePlayer } from "./zustand/music-player";

function App() {
  const { activeSong } = usePlayer();
  return (
    <main className="flex h-screen  flex-col items-center bg-gray-500">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/song/:songId" element={<SongDetails />} />
        <Route path="/artist/:artistId" errorElement={<Artist />} />
        <Route path="/search/:query" errorElement={<Search />} />
      </Routes>
      {activeSong && <MusicPlayer />}
    </main>
  );
}

export default App;
