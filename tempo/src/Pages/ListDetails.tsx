import { SongBar } from "@/components";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchListSongs } from "@/hooks/use-fetchSong";

import { useParams } from "react-router-dom";

const ListDetails = () => {
  const param = useParams();
  const { data, isError, isLoading, error } = useFetchListSongs(param.listId);

  if (isLoading) return <Skeleton />;
  if (isError) console.error(error);

  return (
    <section className="py-10 container">
      <SongBar hasBackground title="Genre" data={data} />
    </section>
  );
};

export default ListDetails;
