import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const config = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_HOST_URL,
  },
};

// const [searchParam,setSearchParam] = useSearchParams()
const FetchSong = (query: string | undefined) => {
  return axios.get(
    `https://shazam.p.rapidapi.com/search?term=${query}`,
    config
  );
};
export const useSearch = (query: string | undefined) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => FetchSong(query),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    select(data) {
      return data.data;
    },
  });
};
