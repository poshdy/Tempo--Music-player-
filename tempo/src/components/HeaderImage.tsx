import { Styles } from "@/Styles";
import { Song } from "@/types/types";

import ActionBtns from "./ActionBtns";
import FollowArtist from "./FollowArtist";
import AddAlbumToLikes from "./AddAlbumToLikes";

type Props = {
  artistData?: any;
  data?: any[];
  ID: "album" | "artist";
};

const HeaderImage = ({ artistData, ID, data }: Props) => {
// Artist page || album page
  return (
    <section className="flex flex-col container items-center pt-8 justify-center md:flex-row md:items-start md:justify-start  ">
      <div className="overflow-hidden">
        <img
          src={artistData?.attributes?.artwork?.url
            .replace("{w}", `350`)
            .replace("{h}", `350`)}
          className="object-cover rounded-2xl max-w-[370px]  "
        />
      </div>
        <section className="flex flex-col   md:p-3 my-3">
          <h2 className={`${Styles.Paragraph} `}>{artistData?.type}</h2>
          <h2 className={`${Styles.heading} `}>
            {artistData?.attributes?.name}
          </h2>
          <h2 className={`${Styles.subHeading} `}>
            {artistData?.attributes?.artistName}
          </h2>
          {ID === "artist" ? (
            <FollowArtist artistData={artistData} />
          ) : (
          
           <AddAlbumToLikes data={artistData}/>
          )}
        </section>
    </section>
  );
};

export default HeaderImage;
