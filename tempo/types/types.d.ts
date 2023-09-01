 export interface Song {
  layout: string;
  type: string;
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
  artists: {
    alias: string;
    id: string;
    adamid: string;
  }[];
  url: string;
  properties: any;
}

interface Image {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

