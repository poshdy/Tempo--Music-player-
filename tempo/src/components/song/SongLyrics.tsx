import { useSong } from "@/hooks/useSong";
import { Title } from "..";

type Props = {
  songId: string;
};

function SongLyrics({ songId }: Props) {
  const { data } = useSong(songId);

  return (
    <>
      <Title
        className="text-2xl md:text-3xl text-black text-left"
        title="Lyrics"
      />

      <section className="bg-black rounded-3xl drop-shadow-lg p-2 text-gray-400 w-[90%] text-sm  ">
        {data && data[1]?.type === "LYRICS" ? (
          data?.[1]?.text.map((line: string, i: number) => (
            <p key={i} className={`font-bold text-center `}>
              {line}
            </p>
          ))
        ) : (
          <p className="font-bold">Sorry no lyrics found :(</p>
        )}
      </section>
    </>
  );
}

export default SongLyrics;
