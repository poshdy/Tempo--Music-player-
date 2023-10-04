import { cn } from "@/lib/utils";

type Props = {
  title: string;
  className?: string;
};

const Title = ({ title, className }: Props) => {
  return (
    <h1
      className={cn(
        "text-xl md:text-3xl font-bold tracking-tighter leading-3",
        className
      )}
    >
      {title}
    </h1>
  );
};

export default Title;
