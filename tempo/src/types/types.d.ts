export type Song = {
  layout: string;
  key: string;
  title: string;
  subtitle: string;
  share: {
    subject: string;
    text: string;
    href: string;
    image: string;
    twitter: string;
    html: string;
    avatar: string;
    snapchat: string;
  };
  images: Image;
  hub: HUB;
  artists: {
    alias: string;
    id: string;
    adamid: string;
  }[];
  url: string;
  properties: any;
};

type Image = {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
};

type HUB = {
  type: string;
  image: string;
  actions: Actions;
};

type UserSong = {
  userId: string;
  songId: string;
  Image: string;
  uri: string;
  name: string;
  artist_Id: string;
  liked: boolean;
};

export type ArtistSong = {
  id: string;
  attributes: {
    hasTimeSyncedLyrics: string;
    albumName: string;
    artwork: Artwork;
    name: string;
    genreNames: string[];
    previews: Preview[];
  };
};

type Artwork = {
  width: number;
  url: string;
  height: number;
  textColor3: string;
  textColor2: string;
  textColor4: string;
  textColor1: string;
  bgColor: string;
  hasP3: boolean;
};

type Preview = {
  url: string;
  artistName: string;
  contentRating: string;
};
type ArtistAlbums = {
  id: string;
  attributes: {
    artistName: string;
    name: string;
    artwork: Artwork;
  };
};

type UserAlbums = {
  albumId: string;
  name: string;
  userId: string;
  Image: string;
  liked: boolean;
};
