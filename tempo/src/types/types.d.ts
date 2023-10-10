

export type Song = {
  layout: string;
  key: string;
  title: string;
  subtitle: string;
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
  artistName: string;
  genre: string;
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

type Genre = {
  id: string;
  listid: string;
  name: string;
  urlPath: string;
  count: number;
};

type Root = {
  id?: string
  type?: string
  attributes?: Attributes
  relationships?: Relationships
  views?: Views
  meta?: Meta
}

export interface Attributes {
  genreNames: string[]
  name: string
  artwork: Artwork
  url: string
}

export interface Artwork {
  width: number
  url: string
  height: number
  textColor3: string
  textColor2: string
  textColor4: string
  textColor1: string
  bgColor: string
  hasP3: boolean
}

export interface Relationships {
  albums: Albums
}

export interface Albums {
  data: Daum[]
}

export interface Daum {
  id: string
  type: string
}

export interface Views {
  "top-songs": TopSongs
  "latest-release": LatestRelease
}

export interface TopSongs {
  attributes: Attributes2
  data: Daum2[]
}

export interface Attributes2 {
  title: string
}

export interface Daum2 {
  id: string
  type: string
}

export interface LatestRelease {
  attributes: Attributes3
  data: Daum3[]
}

export interface Attributes3 {
  title: string
}

export interface Daum3 {
  id: string
  type: string
}

export interface Meta {
  views: Views2
}

export interface Views2 {
  order: string[]
}

