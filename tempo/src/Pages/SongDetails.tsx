import { HeroImage } from "@/components";

import Title from "@/components/Title";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

import { useSong } from "@/hooks/useSong";
import { useParams } from "react-router-dom";

const SongDetails = () => {
  const param = useParams();
  const {toast} = useToast()

  const { data, isError, error, isLoading } = useSong(param.songId);
  if (isLoading)
    return (
      <section className="container space-y-5 flex flex-col justify-center items-center gap-5">
        <Skeleton className="w-full h-[50vh]" />
        {Array.from({ length: 9 }, (_, i) => i + 1).map((id) => (
          <section className="space-y-4 w-full flex flex-col justify-center" key={id}>
            <Skeleton className="w-1/5 h-10 py-2" />
            <Skeleton className="w-1/2 h-10 py-2" />
            <Skeleton className="w-1/5 h-10 py-2" />
          </section>
        ))}
      </section>
    );
    if(isError){
      console.error(error)
      toast({title:'Opps Something went Wrong!'})
    }

  return (
    <section className="bg-gradient-to-b from-transparent to-black space-y-5">
      <HeroImage song={data} isHome={false} data={data} />

      <div
        className={
          "container flex flex-col justify-center items-center space-y-2"
        }
      >
        <Title className="md:text-4xl" title="Lyrics" />
        <div className=" flex flex-col justify-center items-center ">
          {data?.sections && data?.sections[1]?.type === "LYRICS" ? (
            data?.sections[1]?.text.map((line: string, i: number) => (
              <p key={i} className={`font-bold`}>
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-500 font-bold">Sorry no lyrics found :(</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SongDetails;
