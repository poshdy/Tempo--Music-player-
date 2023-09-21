import { Song } from "@/types/types";
import { Link } from "react-router-dom";
import ActionBtns from "../ActionBtns";

type Props = {
  data: Song[];
  song: Song;
  isHome: boolean;
};

const HeroImage = ({ data, isHome, song }: Props) => {
  return (
    <section className="relative container mb-10">
      <div className="w-full h-[55vh] rounded-b-3xl overflow-clip">
        <img
          src={song?.images?.background || song?.images?.coverart}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="leading-tight tracking-tight flex items-start justify-between">
        <div className="flex flex-col items-start gap-3">
          {isHome && <h2 className="text-3xl font-light">#1</h2>}

          <Link
            className="font-bold text-3xl md:text-7xl"
            to={`/song/${song?.key}`}
          >
            {song?.title}
          </Link>
          <Link
            className="text-xl md:text-3xl font-normal"
            to={`/song/${song?.artists?.at(0)?.adamid}`}
          >
            {song?.subtitle}
          </Link>
        </div>
        <div className="self-end">
          <ActionBtns isHome data={data} type="song" song={data} />
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
