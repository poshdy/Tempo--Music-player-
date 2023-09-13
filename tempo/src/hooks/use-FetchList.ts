import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const config = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_HOST_URL,
  },
};
const FetchLists = () => {
  return axios.get(`https://shazam.p.rapidapi.com/charts/list`, config);
};

export const useFetchLists = () => {
  return useQuery({
    queryKey: ["listsids"],
    queryFn: FetchLists,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select(data) {
      return data?.data?.global;
    },
  });
};
