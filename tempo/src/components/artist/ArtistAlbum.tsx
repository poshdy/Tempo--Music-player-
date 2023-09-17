import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  artistAlbums: any[];
};

const ArtistAlbum = ({ artistAlbums }: Props) => {
  const Navigate = useNavigate();
  return (
    <section className="flex flex-wrap gap-3 items-center  ">
      {artistAlbums?.slice(0,6).map((album: any) => (
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
                .replace("{w}", "150")
                .replace("{h}", "150") ||
              album?.Image?.replace("{w}", "150").replace("{h}", "150")
            }
          />
        </div>
      ))}
    </section>
  );
};

export default ArtistAlbum;
