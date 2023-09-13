import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {};

const UserState = (props: Props) => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px] rounded-full bg-background">
          <span className="w-6 aspect-square rounded-full bg-red-400"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Name</SelectItem>
          <SelectItem value="dark">Profile</SelectItem>
          <SelectItem value="system">Logout</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UserState;