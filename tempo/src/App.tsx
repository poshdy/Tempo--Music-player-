import { Routes, Route } from "react-router-dom";
import {
  Home,
  NotFound,
  SongDetails,
  Search,
  ListDetails,
  AlbumDetails,
  Profile,
  Likes,
  Artist,
} from "./Pages";

import { usePlayer } from "./zustand/music-player";
import {
  NavBar,
  SearchResults,
  SideBar,
  AuthModal,
  MusicPlayer,
  SearchList,
} from "./components";
import Dashboard from "./Pages/Dashboard";

function App() {
  const { activeSong } = usePlayer();
  let Content = activeSong?.attributes?.name
    ? activeSong?.attributes?.name
    : activeSong?.title || activeSong?.name;
  return (
    <main className="bg-gradient-to-br from-[#C02425] to-[#F0CB35] text-primary md:flex relative">
      <SideBar />
      <section
        className={`min-h-screen md:flex-grow overflow-hidden bg-black backdrop-blur-md bg-opacity-90 drop-shadow-lg text-secondary relative`}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/song/:songId" element={<SongDetails />} />
          <Route path="/artist/:artistId" element={<Artist />} />
          <Route path="/artist/album/:albumId" element={<AlbumDetails />} />
          <Route path="/search" element={<Search />}>
            <Route path="" element={<SearchList />} />
            <Route path=":searchterm" element={<SearchResults />} />
          </Route>
          <Route path="/lists/:listId" element={<ListDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/likes" element={<Likes />} />
        </Routes>
      </section>

      {Content && (
        <section className=" fixed  rounded-t-3xl p-1 h-32 md:h-20 bottom-0 md:bottom-0 left-0 right-0 flex justify-start items-start animate-in bg-white bg-opacity-20 drop-shadow-lg  backdrop-blur-lg z-40 md:z-50">
          <MusicPlayer />
        </section>
      )}
      <AuthModal />
    </main>
  );
}

export default App;
