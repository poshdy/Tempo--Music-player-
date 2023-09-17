import React, { useState } from "react";
import { Button } from "./ui/button";
import { GrAdd } from "react-icons/gr";
import { useModal } from "@/zustand/Modal";
import { useAuth } from "@/hooks/use-Auth";
import { useSupabase } from "@/hooks/use-SupaBase";
import { useToast } from "./ui/use-toast";
import { AiOutlineHeart } from "react-icons/ai";
import { Styles } from "@/Styles";

type Props = {
  data: any;
};

const AddAlbumToLikes = ({ data }: Props) => {
  const { onOpen } = useModal();
  const { user } = useAuth();
  const supabase = useSupabase();
  const { toast } = useToast();
  const handleClick = async () => {
    if (!user) {
      onOpen();
    }
    try {
      const { error } = await supabase.from("favorite-albums").insert({
        userId: user?.id,
        albumId: data.id,
        Image: data?.attributes?.artwork?.url,
        name: data?.attributes?.name,
      });
      if (error) {
        console.log(error);
        toast({ title: `opps`, description: `${error}` });
      }
      toast({
        title: `${data?.attributes?.name} added to Favorite list`,
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
      <AiOutlineHeart size={25} />
    </Button>
  );
};

export default AddAlbumToLikes;
