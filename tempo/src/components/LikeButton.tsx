import { useAuth } from "@/hooks/use-Auth";

import { AiOutlineHeart } from "react-icons/ai";
import { useToast } from "./ui/use-toast";
import { useModal } from "@/zustand/Modal";
import { useSupabase } from "@/hooks/use-SupaBase";

type Props = {
  artistId?: string;
  song: any;
  SongId?: string;
};

const LikeButton = ({ artistId, song }: Props) => {
  const { user } = useAuth();
  const Supabase = useSupabase();
  const { onOpen } = useModal();
  const { toast } = useToast();

  const handleClick = async () => {
    try {
      if (!user) {
        onOpen();
      } else {
        await Supabase.from("favorite-songs").insert({
          userId: user?.id,
          songId: artistId ? song?.id : song.key,
          artistId: song?.artists?.at(0)?.adamid,
          Image: artistId
            ? song?.attributes?.artwork?.url
            : song?.images?.coverart,
          name: artistId ? song?.attributes?.name : song.title,
          uri: artistId
            ? song?.attributes?.previews[0]?.url
            : song?.hub?.actions[1]?.uri,
        });
        toast({
          title: `${
            song.title || song?.attributes?.name
          } added to the favorite list`,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return <AiOutlineHeart size={25} onClick={handleClick} />;
};

export default LikeButton;
