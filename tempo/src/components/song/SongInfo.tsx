import React from "react";

type Props = {
  children: React.ReactNode;
};

const SongInfo = ({ children }: Props) => {
  return <section>{children}</section>;
};

export default SongInfo;
