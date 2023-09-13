import { Styles } from "@/Styles";
import React from "react";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <h1 className={Styles.subHeading}> {title}</h1>;
};

export default Title;
