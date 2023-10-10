import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

function Image({ src, alt, className }: Props) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("object-cover rounded-2xl max-w-[370px]", className)}
      />
    </div>
  );
}

export default Image;
