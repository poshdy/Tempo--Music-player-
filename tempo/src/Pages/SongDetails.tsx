import HeaderImage from "@/components/HeaderImage";
import Title from "@/components/Title";
import { Skeleton } from "@/components/ui/skeleton";

import { useSong } from "@/hooks/useSong";
import { useParams } from "react-router-dom";

const SongDetails = () => {
  const param = useParams();

  const { data, isError, error, isLoading } = useSong(param.songId);
  if (isLoading) return <Skeleton className="w-full h-[50vh]"/>;

  return (
    <section className="bg-gradient-to-b from-transparent to-black space-y-5">
      <HeaderImage song={data} src={data?.images?.coverart} />

      <div className={"container flex flex-col justify-center items-center space-y-2"}>
        <Title title="Lyrics" />
        <div className=" flex flex-col justify-center items-center ">
            {data?.sections[1]?.type === "LYRICS" ? (
              data?.sections[1]?.text.map((line: string, i: number) => (
                <p key={i} className={`font-bold`}>
                  {line}
                </p>
              ))
            ) : (
              <p className="text-gray-500 font-bold">
                Sorry no lyrics found :(
              </p>
            )}
        </div>
      </div>
    </section>
  );
};

export default SongDetails;
