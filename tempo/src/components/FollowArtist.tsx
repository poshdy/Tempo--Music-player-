import { useState } from "react";
import { Button } from "./ui/button";
import { useModal } from "@/zustand/Modal";
import { useAuth } from "@/hooks/use-Auth";
import { useToast } from "./ui/use-toast";
import { useSupabase } from "@/hooks/use-SupaBase";
import { Root } from "@/types/types";

type Props = {
  artistData: Root;
};

function FollowArtist({ artistData }: Props) {
  const [isFollowed, setIsFollowed] = useState<boolean>(false);
  const { onOpen } = useModal();
  const { user } = useAuth();
  const Supabase = useSupabase();
  const { toast } = useToast();
  const handleClick = async () => {
    if (!user) {
      onOpen();
    }
    try {
      const { error } = await Supabase.from("favorite-artists").insert({
        userId: user?.id,
        artistId: artistData.id,
        Image: artistData?.attributes?.artwork?.url,
        name: artistData?.attributes?.name,
      });
      if (error) {
        console.error(error.details);
      }
      setIsFollowed(true);
      toast({
        title: `${artistData?.attributes?.name} added to Following list`,
      });
    } catch (error) {
      toast({ title: `opps`, description: `${error}` });
    }
  };
  return (
    <Button
      onClick={handleClick}
      className={` bg-transparent border-2 mt-3 rounded-md`}
    >
      {isFollowed ? <p>Followed</p> : <p>Follow</p>}
    </Button>
  );
}

export default FollowArtist;
