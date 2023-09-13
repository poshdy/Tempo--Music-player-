import { HeroImage } from "@/components";
import ActionBtns from "@/components/ActionBtns";
import HeaderImage from "@/components/HeaderImage";
import { Separator } from "@/components/ui/separator";
import { useSong } from "@/hooks/useSong";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const SongDetails = () => {
  const param = useParams();

  const { data, isError, error, isLoading } = useSong(param.songId);
  if (isLoading) return <h1>loadingg</h1>;
  console.log(data);

  return (
    <section className="bg-gradient-to-b from-transparent to-black">
      <HeaderImage song={data} src={data?.images?.coverart} />
      <Separator className="text-muted"/>
      <ActionBtns data={data} song={data} key={data.key} />

      <div className={""}>
        <h2 className={` text-center`}>Lyrics</h2>
        <div className="my-10 flex items-center text-center justify-center">
          <div className="">
            {data?.sections[1]?.type === "LYRICS" ? (
              data?.sections[1]?.text.map((line: string, i: number) => (
                <p key={i} className={`font-bold`}>
                  {line}
                </p>
              ))
            ) : (
              <p className="text-gray-500 font-bold">
                Sorry no lyrics found :(
              </p>
            )}
          </div>
        </div>
      </div>
      {/* <SongBar/>
        data={data}
        activeSong={activeSong}
        artistId={artistId}
        isPlaying={isPlaying}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      /> */}
    </section>
  );
};

export default SongDetails;
