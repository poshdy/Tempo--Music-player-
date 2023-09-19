import React from "react";
import { useAuth } from "@/hooks/use-Auth";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSupabase } from "@/hooks/use-SupaBase";
import { useModal } from "@/zustand/Modal";
import { Link } from "react-router-dom";

type Props = {};

const UserState = (props: Props) => {
  const { signOut, user } = useAuth();
  const { onOpen } = useModal();

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
        <Button
          variant={"secondary"}
          className="px-2 py-1 rounded-full "
          onClick={onOpen}
        >
          Log in
        </Button>
      )}
    </>
  );
};

export default UserState;
