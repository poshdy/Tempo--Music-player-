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
import ProtectedRoutes from "./components/ProtectedRoutes";

const Search = lazy(() => import("@/Pages/Search"));
const Dashboard = lazy(() => import("@/Pages/Dashboard"));
const Artist = lazy(() => import("@/Pages/Artist"));

function App() {
  const { activeSong } = usePlayer();
  const { isOpen } = useSongModal();

  let Content = activeSong?.attributes?.name
    ? activeSong?.attributes?.name
    : activeSong?.title || activeSong?.name;
  return (
    <main className="bg-gradient-to-br from-[#C02425] to-[#F0CB35] text-primary md:flex relative">
      <SideBar />
      <section
        className={`min-h-screen md:flex-grow overflow-hidden bg-black backdrop-blur-md bg-opacity-90 drop-shadow-lg text-secondary `}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
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

          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<h1>Loaddinff</h1>}>
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              </Suspense>
            }
          />
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
    </main>
  );
}

export default App;
