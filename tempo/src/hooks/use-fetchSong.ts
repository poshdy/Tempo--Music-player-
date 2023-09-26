import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const config = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_HOST_URL,
  },
};
const fetchSongs = () => {
  return axios.get("https://shazam.p.rapidapi.com/charts/track", config);
};
const fetchSongsbyGenre = (genreId: string | undefined) => {
  return axios.get(
    `https://shazam.p.rapidapi.com/charts/track?locale=en-US&listId=${genreId}`,
    config
  );
};

export const useFetchSongs = () => {
  return useQuery({
    queryKey: ["songs"],
    queryFn: fetchSongs,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select(data) {
      return data?.data?.tracks?.slice(0, 8);
    },
  
  });
};
export const useFetchListSongs = (genreId: string | undefined) => {
  return useQuery({
    queryKey: ["listsongs", genreId],
    queryFn: () => fetchSongsbyGenre(genreId),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select(data) {
      return data?.data?.tracks;
    },
  });
};
