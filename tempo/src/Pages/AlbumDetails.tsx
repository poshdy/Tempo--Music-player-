import { SongBar } from "@/components";
import HeaderImage from "@/components/shared/HeaderImage";
import { Skeleton } from "@/components/ui/skeleton";
import { useArtistAlbums } from "@/hooks/useArtist";
import { useParams } from "react-router-dom";

const AlbumDetails = () => {
  const param = useParams();
  const { data, isError, isLoading, error } = useArtistAlbums(param.albumId);
  if (isLoading) {
    return <Skeleton className="container h-[40vh]" />;
  }
  if (isError) {
    console.log(error);
  }
  const Data = data?.data[0]?.relationships?.tracks?.data;

  return (
    <section>
      <HeaderImage ID="album" artistData={data?.data[0]} />
      <section className="container space-y-4 p-5">
        <SongBar
          hasBackground
          title={"Album list"}
          artistId={param?.albumId}
          data={Data}
        />
      </section>
    </section>
  );
};

export default AlbumDetails;
