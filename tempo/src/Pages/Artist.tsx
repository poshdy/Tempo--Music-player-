import { SongBar, SongCard } from "@/components";
import HeaderImage from "@/components/HeaderImage";
import ArtistAlbum from "@/components/artist/ArtistAlbum";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useArtist, useArtistSummary } from "@/hooks/useArtist";
import { ArtistSong } from "@/types/types";
import { useParams } from "react-router-dom";

const Artist = () => {
  const params = useParams();
  const { data, isLoading, isError, error } = useArtist(params.artistId);
  const {
    data: ArtistSummary,
    isLoading: Loading,
    isError: Error,
    error: err,
  } = useArtistSummary(params.artistId);

  if (isLoading) return <Skeleton className="container h-[40vh]" />;
  if (isError) return console.log(error);
  if (Loading) return <h1>loading</h1>;
  if (Error) return console.log(err);
  const artistData = Object.values(ArtistSummary?.artists);
  const artistAlbums = Object.values(ArtistSummary?.albums);

  return (
    <section className={"w-full flex flex-col bg-[#1f1f1f]"}>
      <HeaderImage artistData={artistData[0]} data={data?.data?.slice(0, 8)} />

      <Tabs defaultValue="popular" className={`w-full`}>
        <TabsList className={`w-full flex p-4 justify-start bg-black `}>
          <TabsTrigger value="popular">Popular Songs</TabsTrigger>
          <TabsTrigger value="albums">Popular Albums</TabsTrigger>
          <TabsTrigger value="latest">latest Releases</TabsTrigger>
        </TabsList>
        <TabsContent value="popular">
          <SongBar data={data?.data?.slice(0, 8)} artistId={params?.artistId} />
        </TabsContent>
        <TabsContent value="albums">
          <ArtistAlbum  artistAlbums={artistAlbums} />
        </TabsContent>
        <TabsContent value="latest">
          <section className="flex flex-wrap gap-3 items-center  ">
            {data?.data?.slice(0, 8).map((track: ArtistSong, i: number) => (
              <SongCard
                size="100"
                data={data?.data}
                song={track}
                i={i}
                key={track.id}
                artistId={params?.artistId}
              />
            ))}
          </section>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Artist;
