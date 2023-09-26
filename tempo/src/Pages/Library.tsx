import { Wrapper } from "@/components";
import { useState } from "react";
import Header from "@/components/Header";
import ProfileEdit from "@/components/ProfileEdit";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FavoriteArtists from "@/components/FavoriteArtists";
import FavoriteAlbums from "@/components/FavoriteAlbums";
import FavoriteSongs from "@/components/FavoriteSongs";

const Library = () => {
  const [modal, setModal] = useState(false);

  return (
    <Wrapper className="space-y-5">
      <Header modal={modal} setModal={setModal} />

      <ProfileEdit setModal={setModal} modal={modal} />

      <Tabs defaultValue="fav-songs" className={`w-full space-y-5`}>
        <TabsList
          className={`w-full flex items-start flex-wrap gap-2 md:gap-2 justify-start`}
        >
          <TabsTrigger value="fav-songs">Liked Songs</TabsTrigger>
          <TabsTrigger value="fav-albums">Liked Albums</TabsTrigger>
          <TabsTrigger value="fav-artists">Followed Artists</TabsTrigger>
        </TabsList>

        <TabsContent value="fav-songs">
          <FavoriteSongs />
        </TabsContent>
        <TabsContent value="fav-artists">
          <FavoriteArtists />
        </TabsContent>
        <TabsContent value="fav-albums">
          <FavoriteAlbums />
        </TabsContent>
      </Tabs>
    </Wrapper>
  );
};

export default Library;
