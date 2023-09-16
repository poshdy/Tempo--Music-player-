import { Styles } from "@/Styles";
import { Song } from "@/types/types";

import ActionBtns from "./ActionBtns";

type Props = {
  artistData?: any;
  src?: string;
  song?: Song;
  data?: any[];
};

const HeaderImage = ({ artistData, song, src, data }: Props) => {
  const SONG = artistData ? artistData : song
  return (
    <section className="flex flex-col items-start justify-start md:flex-row gap-1 md:items-end h-[45vh] w-full ">
      <div className="flex p-5 ">
        <img
          src={
            artistData?.attributes?.artwork?.url
              .replace("{w}", `350`)
              .replace("{h}", `350`) || src
          }
          className="object-cover max-w-xs aspect-square w-[250px] aspect-squares "
        />
        <section className="flex flex-col  p-2">
          <h2 className={`${Styles.Paragraph} `}>{artistData?.type}</h2>
          <h2 className={`${Styles.heading} `}>
            {artistData?.attributes?.name || song?.title}
          </h2>
          <h2 className={`${Styles.subHeading} `}>
            {artistData?.attributes?.artistName}
          </h2>
          <ActionBtns song={SONG}  />
        </section>
      </div>
    </section>
  );
};

export default HeaderImage;

