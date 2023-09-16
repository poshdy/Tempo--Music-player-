import React from "react";
import { Song } from "@/types/types";
import { Link } from "react-router-dom";
import ActionBtns from "./ActionBtns";

type Props = {
  data: Song[];
};

const HeroImage = ({ data }: Props) => {
  return (
    <section className="relative w-full">
      <div className="w-full h-[60vh]">
        <img
          src={data[1]?.images?.background || data[2]?.images?.coverart}
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" p-8 leading-tight tracking-tighter absolute bottom-0 left-0 flex flex-col justify-center items-start container h-[50%]">
        <h2 className="text-[#e4e4e4] font-semibold">#1</h2>
        <Link to={`/song/${data[1]?.key}`}>
          <h2 className="font-bold text-3xl">{data[1]?.title}</h2>
        </Link>
        <Link
          className="text-2xl"
          to={`/song/${data[1]?.artists?.at(0)?.adamid}`}
        >
          {data[1]?.subtitle}
        </Link>
        <ActionBtns song={data[1]} data={data} />
      </div>
    </section>
  );
};

export default HeroImage;
