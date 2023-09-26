import { Styles } from "@/Styles";
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
      className={`flex flex-col items-center gap-1 w-full ${Styles.transtions}  cursor-pointer `}
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
          artist?.Image?.replace("{w}", "175").replace("{h}", "175")
        }
        className={cn(
          "w-[150px] md:w-[175px] aspect-square object-cover rounded-full",
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
