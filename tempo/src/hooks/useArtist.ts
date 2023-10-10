import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const BASE_URL = "https://shazam.p.rapidapi.com/";

const config = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_HOST_URL,
  },
};
const FetchTopSongs = (artistId: string | undefined) => {
  return axios.get(`${BASE_URL}artists/get-top-songs?id=${artistId}`, config);
};

export const useArtist = (artistId: string | undefined) => {
  return useQuery({
    queryKey: ["artist-top-songs", artistId],
    queryFn: () => FetchTopSongs(artistId),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    select(data) {
      return data.data;
    },
  });
};
const FetchArtistSummary = (artistId: string | undefined) => {
  return axios.get(`${BASE_URL}artists/get-summary?id=${artistId}`, config);
};

export const useArtistSummary = (artistId: string | undefined) => {
  return useQuery({
    queryKey: ["artist-summary", artistId],
    queryFn: () => FetchArtistSummary(artistId),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    select(data) {
      return data?.data?.resources;
    },
  });
};

const FetchArtistAlbums = (albumId: string | undefined) => {
  return axios.get(`${BASE_URL}albums/get-details?id=${albumId}`, config);
};

export const useArtistAlbums = (albumId: string | undefined) => {
  return useQuery({
    queryKey: ["artist-albums", albumId],
    queryFn: () => FetchArtistAlbums(albumId),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    select(data) {
      return data?.data;
    },
  });
};
