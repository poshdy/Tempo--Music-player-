import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

type Props = {
  artist: any;
  className: string;
};

const ArtistCard = ({ artist, className }: Props) => {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col items-center gap-1 w-full hover:bg-[#0b0b0b]/50  text-[#d2d2d2] p-3 rounded-lg duration-300 ease-in-out  cursor-pointer "
      onClick={() =>
        navigate(
          `/artist/${
            artist?.artists ? artist?.artists[0].adamid : artist?.artistId
          }`
        )
      }
    >
      <img
        src={
          artist?.images?.background ||
          artist?.Image?.replace("{w}", "200").replace("{h}", "200")
        }
        className={cn(
          "w-[100px] md:w-[150px] aspect-square  object-cover rounded-full",
          className
        )}
        alt="artist-photo"
      />
      <p className="text-white w-20 truncate font-semibold text-center text-xs">
        {artist?.subtitle || artist?.name}
      </p>
    </section>
  );
};

export default ArtistCard;
