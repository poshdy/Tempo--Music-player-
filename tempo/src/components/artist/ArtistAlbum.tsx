import { ArtistAlbums, UserAlbums } from "@/types/types";
import { useNavigate } from "react-router-dom";

type Albums = ArtistAlbums[] & UserAlbums[];
type Props = {
  artistAlbums: Albums;
};

const ArtistAlbum = ({ artistAlbums }: Props) => {
  const Navigate = useNavigate();
  return (
    <section className="flex flex-col gap-2 md:flex-row md:flex-wrap items-center   ">
      {artistAlbums?.slice(0, 6).map((album: any) => (
        <div
          key={album?.id || album?.albumId}
          onClick={() =>
            Navigate(
              `/artist/album/${album?.albumId ? album?.albumId : album?.id}`
            )
          }
          className="hover:scale-105 duration-300 ease-in-out rounded-md"
        >
          <img
            src={
              album?.attributes?.artwork?.url
                .replace("{w}", "120")
                .replace("{h}", "120") ||
              album?.Image?.replace("{w}", "120").replace("{h}", "120")
            }
          />
        </div>
      ))}
    </section>
  );
};

export default ArtistAlbum;
