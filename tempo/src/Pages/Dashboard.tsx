import {  Wrapper } from "@/components";
import { useAuth } from "@/hooks/use-Auth";
import { useState } from "react";
import Header from "@/components/Header";
import ProfileEdit from "@/components/ProfileEdit";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FavoriteArtists from "@/components/FavoriteArtists";
import FavoriteAlbums from "@/components/FavoriteAlbums";
import FavoriteSongs from "@/components/FavoriteSongs";


type Props = {};

const Dashboard = (props: Props) => {
  const [modal, setModal] = useState(false);
  const { user } = useAuth();

  return (
    <Wrapper className="">
      <Header modal={modal} setModal={setModal} />
      <section className="w-full  flex flex-col items-center  gap-6">
        <div className="flex flex-col items-center justify-center gap-1">
          <img
            src={user?.avatar_url}
            className="w-36 aspect-square rounded-full object-cover"
            alt="profile-pic"
          />
          <h2 className="font-bold">{user?.user_name}</h2>
          <p className="font-normal text-gray-400">{user?.email}</p>
        </div>
      </section>
      <ProfileEdit setModal={setModal} modal={modal} />
      <Tabs defaultValue="fav-songs" className={`w-full space-y-5`}>
        <TabsList className={`w-full flex  md:p-4 md:justify-start `}>
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

export default Dashboard;
