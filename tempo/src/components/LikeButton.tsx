import { useAuth } from "@/hooks/use-Auth";
import { useSupabase } from "@/hooks/use-SupaBase";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useToast } from "./ui/use-toast";
import { useModal } from "@/zustand/Modal";

type Props = {
  artistId?: string;
  song: any;
};

const LikeButton = ({ artistId, song }: Props) => {
  const { user } = useAuth();
  const supabase = useSupabase();
  const { onOpen } = useModal();
  const { toast } = useToast();
  const handleClick = async () => {
    try {
      if (!user) {
        onOpen();
      } else {
        await supabase.from("favorite-songs").insert({
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
  return <AiOutlineHeart onClick={handleClick} size={25} />;
};

export default LikeButton;
