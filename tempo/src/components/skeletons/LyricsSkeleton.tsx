import { Skeleton } from "../ui/skeleton";
type Props = {};

function LyricsSkeleton({}: Props) {
  return (
    <section className="flex flex-col container items-center gap-3 justify-center">
      {[...Array(8).keys()].map((i) => (
        <Skeleton key={i} className="w-[90%] h-5 rounded-md" />
      ))}
    </section>
  );
}

export default LyricsSkeleton;
