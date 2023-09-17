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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {};

const UserState = (props: Props) => {
  const { signOut, user, signInWithGoogle } = useAuth();

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className=" w-8 aspect-square bg-red-700 rounded-full"></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <h2 onClick={signInWithGoogle}>Login</h2>
      )}
    </>
  );
};

export default UserState;
