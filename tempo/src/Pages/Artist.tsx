import { SongBar, SongCard } from "@/components";
import HeaderImage from "@/components/shared/HeaderImage";
import ArtistAlbum from "@/components/artist/ArtistAlbum";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useArtist, useArtistSummary } from "@/hooks/useArtist";
import { ArtistSong, Root, Song, UserSong } from "@/types/types";

import { useParams } from "react-router-dom";

const Artist = () => {
  const params = useParams();
  const { data } = useArtist(params.artistId);
  const { data: ArtistSummary } = useArtistSummary(params.artistId);

  const artistData: Root = Object.values(ArtistSummary?.artists)?.at(0);

  const artistAlbums = Object.values(ArtistSummary?.albums);

  return (
    <section className={"w-full flex flex-col "}>
      <HeaderImage ID="artist" artistData={artistData} />

      <Tabs defaultValue="popular" className={`w-full`}>
        <TabsList className={`w-full flex p-4 justify-start bg-black `}>
          <TabsTrigger value="popular">Popular Songs</TabsTrigger>
          <TabsTrigger value="albums">Popular Albums</TabsTrigger>
          <TabsTrigger value="latest">latest Releases</TabsTrigger>
        </TabsList>
        <TabsContent value="popular">
          <SongBar
            hasBackground
            title="Top Hits"
            data={data?.data?.slice(0, 8)}
            artistId={params?.artistId}
          />
        </TabsContent>
        <TabsContent value="albums">
          <ArtistAlbum artistAlbums={artistAlbums} />
        </TabsContent>
        <TabsContent value="latest">
          <section className="flex flex-wrap gap-2 justify-center items-center  ">
            {data?.data
              ?.slice(0, 8)
              .map((track: Song & ArtistSong & UserSong, i: number) => (
                <SongCard
                  data={data?.data}
                  song={track}
                  i={i}
                  key={track.id}
                  className=""
                />
              ))}
          </section>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Artist;
