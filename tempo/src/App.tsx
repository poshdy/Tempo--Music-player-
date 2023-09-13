import { Routes, Route } from "react-router-dom";
import {
  Home,
  Artist,
  NotFound,
  SongDetails,
  Search,
  ListDetails,
} from "./Pages";
import SideBar from "./components/navigation/SideBar";
import MusicPlayer from "./components/Player/MusicPlayer";
import { usePlayer } from "./zustand/music-player";
import { NavBar, SearchResults } from "./components";
import SearchList from "./components/search/Search-home";
import AlbumDetails from "./Pages/AlbumDetails";
import { useModal } from "./zustand/Modal";
import AuthModal from "./components/AuthModal";

function App() {
  const { activeSong } = usePlayer();
  const { isOpen } = useModal();
  let Content = activeSong?.attributes?.name
    ? activeSong?.attributes?.name
    : activeSong?.title;
  return (
    <main className="bg-gradient-to-br  from-[#121212] to-[#303030] text-primary flex relative">
      <SideBar />
      <section className="min-h-screen flex-grow text-secondary relative">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/top-charts" element={<NotFound />} />
          <Route path="/song/:songId" element={<SongDetails />} />
          <Route path="/artist/:artistId" element={<Artist />} />
          <Route path="/artist/album/:albumId" element={<AlbumDetails />} />
          <Route path="/search" element={<Search />}>
            <Route path="" element={<SearchList />} />
            <Route path=":searchterm" element={<SearchResults />} />
          </Route>
          <Route path="/lists/:listId" element={<ListDetails />} />
        </Routes>
      </section>

      {Content && (
        <section className="fixed h-20 bottom-0 left-0 right-0 flex animate-accordion-up bg-white bg-opacity-20 drop-shadow-lg  backdrop-blur-lg z-50">
          <MusicPlayer />
        </section>
      )}
       <AuthModal />
    </main>
  );
}

export default App;
