import React, { useState, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";
import { Song } from "@/types/types";
import { Link } from "react-router-dom";
import ActionBtns from "./ActionBtns";

type Props = {

  data: Song[];
};

const HeroImage = ({ data }: Props) => {
  return (
    <section className="relative w-full">
      <div className="w-full h-[60vh] opacity-70 rounded-3xl drop-shadow-lg">
        <img
          src={data[1]?.images?.background || data[2]?.images?.coverart}
          className="w-full h-full object-cover rounded-2xl "
        />
      </div>
      <div className="px-16 leading-tight tracking-tighter absolute bottom-0 left-0 flex flex-col justify-center items-start  container h-[50%]">
        <h2 className="text-[#e4e4e4]">#1</h2>
        <Link className="text-7xl font-bold" to={`/song/${data[4]?.key}`}>
          {data[4]?.title?.toUpperCase()}
        </Link>
        <Link
          className="text-2xl"
          to={`/song/${data[4]?.artists?.at(0)?.adamid}`}
        >
          {data[2]?.subtitle}
        </Link>
        <ActionBtns song={data[4]} data={data} />
      </div>
    </section>
  );
};

export default HeroImage;
