import FollowArtist from "../FollowArtist";
import AddAlbumToLikes from "../AddAlbumToLikes";
import Image from "./Image";
import { Root } from "@/types/types";

type Props = {
  artistData: Root;

  ID: "album" | "artist";
};

const HeaderImage = ({ artistData, ID }: Props) => {
  return (
    <section className="flex flex-col gap-2 container items-center justify-center md:flex-row md:items-start md:justify-start  bg-black">
      <Image
        src={artistData?.attributes?.artwork?.url
          .replace("{w}", "350")
          .replace("{h}", "350")}
        alt={artistData?.attributes?.name}
      />
      <div className="flex flex-col gap-1 justify-center items-center md:items-start md:justify-start">
        <h2 className={`text-2xl font-semibold `}>
          {artistData?.attributes?.name}
        </h2>
        <h5 className={`text-lg font-medium `}>
          {artistData?.attributes?.genreNames?.at(0)}
        </h5>
        {ID === "artist" ? (
          <FollowArtist artistData={artistData} />
        ) : (
          <AddAlbumToLikes data={artistData} />
        )}
      </div>
    </section>
  );
};

export default HeaderImage;
