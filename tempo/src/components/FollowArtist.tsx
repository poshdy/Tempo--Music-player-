import React, { useState } from "react";
import { Button } from "./ui/button";
import { GrAdd } from "react-icons/gr";
import { useModal } from "@/zustand/Modal";
import { useAuth } from "@/hooks/use-Auth";
import { useSupabase } from "@/hooks/use-SupaBase";
import { useToast } from "./ui/use-toast";
import { AiOutlineCheck } from "react-icons/ai";
import { Styles } from "@/Styles";

type Props = {
  artistData: any;
};

function FollowArtist({ artistData }: Props) {
  const [isFollowed, setIsFollowed] = useState<boolean>(false);
  const [Error, setError] = useState()
  const { onOpen } = useModal();
  const { user } = useAuth();
  const supabase = useSupabase();
  const { toast } = useToast();
  const handleClick = async () => {
    if (!user) {
      onOpen();
    }
    try {
      const { error } = await supabase.from("favorite-artists").insert({
        userId: user?.id,
        artistId: artistData.id,
        Image: artistData?.attributes?.artwork?.url,
        name: artistData?.attributes?.name,
        isfollowed:true
      });
      if(error){
        console.error(error.details)
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
      className={`w-56 flex ${Styles.transtions} items-center gap-1 justify-center bg-transparent border-2 mt-3 rounded-full hover:bg-yellow-300 hover:text-black`}
    >
      {isFollowed ? (
        <>
          Followed
          <AiOutlineCheck size={25} />
        </>
      ) : (
        <>
          Follow
          <GrAdd size={25} />
        </>
      )}
    </Button>
  );
}

export default FollowArtist;
