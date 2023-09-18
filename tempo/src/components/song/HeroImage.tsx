import React from "react";
import { Song } from "@/types/types";
import { Link } from "react-router-dom";
import ActionBtns from "../ActionBtns";

type Props = {
  data: Song;
  isHome: boolean;
};

const HeroImage = ({ data, isHome }: Props) => {
  return (
    <section className="relative w-full ">
      <div className="w-full h-[50vh] rounded-b-3xl overflow-clip">
        <img
          src={data?.images?.background || data?.images?.coverart}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8 leading-tight tracking-tighter absolute bottom-0 left-0 flex items-center justify-between container font-medium h-[50%]">
        <div className="flex flex-col items-start gap-2">
          {isHome && <h2 className="text-2xl">#1</h2>}

          <Link
            className="font-bold text-xl md:text-3xl"
            to={`/song/${data?.key}`}
          >
            {data?.title}
          </Link>
          <Link
            className="text-lg md:text-2xl"
            to={`/song/${data?.artists?.at(0)?.adamid}`}
          >
            {data?.subtitle}
          </Link>
        </div>
        <div className="self-end">
          <ActionBtns type="song" song={data} />
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
