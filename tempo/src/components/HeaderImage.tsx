import { Styles } from "@/Styles";
import { Song } from "@/types/types";

import React from "react";
import { Separator } from "./ui/separator";

type Props = {
  artistData?: any;
  src?:string
  song?:Song
};

const HeaderImage = ({ artistData,song ,src}: Props) => {
  return (
    <section
      style={{
        backgroundColor: `${artistData?.attributes?.artwork?.textColor3  ? `#${artistData?.attributes?.artwork?.textColor3}` : '#0a1172'}`,
      }}
      className="flex flex-col items-center md:flex-row md:items-start h-[40vh] w-full p-5"
    >
      <div className="opacity-70">
        <img
          src={artistData?.attributes?.artwork?.url
            .replace("{w}", `250`)
            .replace("{h}", `250`) || src}
          className="object-cover max-w-xs aspect-square w-[250px] aspect-squares "
        />
      </div>
      <section className="flex flex-col">

      <h2 className={`${Styles.heading} p-2`}>
        {artistData?.attributes?.name || song?.title}
      </h2>
      <h2 className={`${Styles.subHeading} p-2`}>
        {artistData?.attributes?.artistName}
      </h2>
      </section>

    </section>
  );
};

export default HeaderImage;
