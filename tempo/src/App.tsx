import { Routes, Route } from "react-router-dom";
import { Home, NotFound, ListDetails, AlbumDetails } from "./Pages";
import { usePlayer } from "./zustand/music-player";
import {
  NavBar,
  SearchResults,
  SideBar,
  AuthModal,
  MusicPlayer,
  SearchList,
} from "./components";

import { Suspense, lazy } from "react";
import { useSongModal } from "./zustand/songModal";

import TrackInfo from "./Pages/TrackInfo";
const Search = lazy(() => import("@/Pages/Search"));
const Library = lazy(() => import("@/Pages/Library"));
const Artist = lazy(() => import("@/Pages/Artist"));

function App() {
  const { activeSong } = usePlayer();
  const { isOpen } = useSongModal();

  let Content = activeSong?.attributes?.name
    ? activeSong?.attributes?.name
    : activeSong?.title || activeSong?.name;
  return (
    <main className="bg-orange-500 text-[#dcdcdc] md:flex relative">
      <SideBar />
      <section
        className={`min-h-screen md:flex-grow overflow-hidden bg-black backdrop-blur-md bg-opacity-90 drop-shadow-lg text-secondary `}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/library"
            element={
              <Suspense fallback={<h2>Loadingg</h2>}>
                <Library />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/artist/:artistId"
            element={
              <Suspense fallback={<h1>Loadingg</h1>}>
                <Artist />
              </Suspense>
            }
          />
          <Route path="/artist/album/:albumId" element={<AlbumDetails />} />
          <Route
            path="/search"
            element={
              <Suspense fallback={<h1>Loaddinff</h1>}>
                <Search />
              </Suspense>
            }
          >
            <Route path="" element={<SearchList />} />
            <Route path=":searchterm" element={<SearchResults />} />
          </Route>
          <Route path="/lists/:listId" element={<ListDetails />} />
        </Routes>
      </section>

      {Content && (
        <section
          className={`fixed rounded-t-3xl p-1 h-32 md:h-20 bottom-0 md:bottom-0 left-0 right-0 flex justify-start items-start animate-in bg-white bg-opacity-20 drop-shadow-lg  backdrop-blur-lg z-40 md:z-50 ${
            isOpen && "h-screen"
          }`}
        >
          <MusicPlayer />
        </section>
      )}
      <AuthModal />
      {Content && (
        <Suspense fallback={<h1>loadingg</h1>}>
          <section className="hidden md:flex sticky top-0 right-0 z-40 h-screen min-w-min max-w-sm bg-black ">
            <TrackInfo />
          </section>
        </Suspense>
      )}
    </main>
  );
}

export default App;
