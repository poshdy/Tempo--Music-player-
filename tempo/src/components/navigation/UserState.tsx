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
          <DropdownMenuTrigger className="">
            <img
              className="w-8 aspect-square object-cover rounded-full"
              src={user?.avatar_url}
              alt="profile pic"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {" "}
              <Link to={"/library"}>Profile</Link>{" "}
            </DropdownMenuItem>
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
