import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const HomeSkeleton = (props: Props) => {
  return (
    <section className="space-y-10 w-full">
      <Skeleton className="h-[60vh] w-full rounded-b-lg" />
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
        <section key={id}>
          <Skeleton className="container h-10 py-2" />
        </section>
      ))}
    </section>
  );
};

export default HomeSkeleton;
