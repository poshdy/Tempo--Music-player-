import { Styles } from "@/Styles";
import FollowArtist from "./FollowArtist";
import AddAlbumToLikes from "./AddAlbumToLikes";

type Props = {
  artistData: any;
  ID: "album" | "artist";
};

const HeaderImage = ({ artistData, ID }: Props) => {
  return (
    <section className="flex flex-col container items-center  justify-center md:flex-row md:items-start md:justify-start  bg-black">
      <img
        src={artistData?.attributes?.artwork?.url
          .replace("{w}", `350`)
          .replace("{h}", `350`)}
        className="object-cover rounded-2xl max-w-[370px] "
      />
      <div className="flex flex-col gap-1">
        <h2 className={`${Styles.heading} `}>{artistData?.attributes?.name}</h2>
        <h2 className={`${Styles.subHeading} `}>
          {artistData?.attributes?.artistName}
        </h2>
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
