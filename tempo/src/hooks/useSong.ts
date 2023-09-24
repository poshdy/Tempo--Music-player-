import { Song } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

const config = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_HOST_URL,
  },
};
const FetchSong = (key: string | undefined) => {
  return axios.get(
    `https://shazam.p.rapidapi.com/songs/get-details?key=${key}`,
    config
  );
};

export const useSong = (key: string | undefined) => {
  return useQuery({
    queryKey: ["song", key],
    queryFn: () => FetchSong(key),
    select(data) {
      return data?.data?.sections;
    },
    suspense:true
  });
};
