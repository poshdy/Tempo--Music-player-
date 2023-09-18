import { Styles } from "@/Styles";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  className:string
};

const Title = ({ title , className }: Props) => {
  return <h1 className={cn('text-2xl font-bold tracking-tighter leading-tight',className)}> {title}</h1>;
};

export default Title;
