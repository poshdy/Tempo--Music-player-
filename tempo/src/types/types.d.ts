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

// type AppleMusicPlayAction ={
//   name: string;
//   type: string;
//   id: string;
// }

// type UriAction ={
//   name: string;
//   type: string;
//   uri: string;
// }

// interface Actions extends Array<AppleMusicPlayAction | UriAction> {}

export type ArtistSong = {
  id: string;
  attributes: {
    hasTimeSyncedLyrics: string;
    albumName: string;
    artwork: Artwork;
    name: string;
  };
  preview: Preview[];
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
// type Section = {
//   type:string
// }
