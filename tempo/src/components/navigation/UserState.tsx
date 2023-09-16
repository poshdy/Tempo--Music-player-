import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { AiOutlineLogout } from "react-icons/ai";
import { useAuth } from "@/hooks/use-Auth";
import { useSupabase } from "@/hooks/use-SupaBase";

type Props = {};

const UserState = (props: Props) => {
  const { signOut, user } = useAuth();
  
  return <div>
    {user && <AiOutlineLogout size={25} onClick={signOut} />}

    {/* <img src={user?.data.user?.user_metadata?.avatar_url}/> */}
    <img src={user?.avatar_url}/>
    </div>;
};

export default UserState;
