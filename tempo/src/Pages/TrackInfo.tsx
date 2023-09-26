import { LikeButton } from "@/components";
import { useArtist, useArtistSummary } from "@/hooks/useArtist";
import { usePlayer } from "@/zustand/music-player";
import React from "react";

type Props = {};

function TrackInfo({}: Props) {
  const { activeSong, currentSongs } = usePlayer();

  return (
    <section className="p-2 overflow-scroll space-y-5">
      <h2 className="font-bold text-xl">
        {activeSong?.name || activeSong?.title || activeSong?.attributes?.name}
      </h2>
      <img
        className="object-cover rounded-2xl shadow-lg"
        src={
          activeSong?.Image ||
          activeSong?.images?.coverart ||
          activeSong?.attributes?.artwork.url
            .replace("{w}", "400")
            .replace("{h}", "400")
        }
      />
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h2 className="font-semibold text-xl">
            {activeSong?.name ||
              activeSong?.title ||
              activeSong?.attributes?.name}
          </h2>
          <h2 className="font-light text-lg">
            {activeSong?.subtitle ||
              activeSong?.attributes?.artistName ||
              activeSong?.artistName}
          </h2>
        </div>
        <>
          <LikeButton song={activeSong} />
        </>
      </div>
      <section className="bg-[#1c1c1c] p-2 rounded-md">
        <h4 className="text-sm font-semibold">Queue</h4>
        <div className="flex flex-col gap-3">
          {currentSongs?.slice(0, 6).map((track) => (
            <div className="flex items-start gap-1 p-2">
              <img
                className="object-cover rounded-xl shadow-lg w-14 aspect-square"
                src={
                  track?.Image?.replace("{w}", "50").replace("{h}", "50") ||
                  track?.images?.coverart ||
                  track?.attributes?.artwork?.url
                    .replace("{w}", "50")
                    .replace("{h}", "50")
                }
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium ">
                  {track?.attributes?.name || track?.title || track?.name}
                </h3>
                <h3 className="text-xs font-light">
                  {track?.attributes?.artistName ||
                    track?.subttitle ||
                    track?.artistName}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default TrackInfo;
