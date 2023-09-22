import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const SongbarSkeleton = (props: Props) => {
  return (
    <section className="flex flex-col container items-center gap-3 justify-center">
      {[...Array(8).keys()].map((i) => (
        <Skeleton key={i} className="w-full h-11 rounded-md" />
      ))}
    </section>
  );
};

export default SongbarSkeleton;
