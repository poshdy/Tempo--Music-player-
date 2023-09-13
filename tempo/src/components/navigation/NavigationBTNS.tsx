import React from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {};

const NavigationBTNS = (props: Props) => {
  const navigate = useNavigate()
  return (
    <div className="flex gap-2">
      <span onClick={()=>navigate(-1)} className="bg-black/80 backdrop-blur-sm drop-shadow-lg rounded-full p-2 cursor-pointer hover:scale-105 duration-300 ease-in-out">
        <FaArrowLeft />
      </span>
      <span onClick={()=>navigate(+1)} className="bg-black/80 backdrop-blur-sm drop-shadow-lg rounded-full p-2 cursor-pointer hover:scale-105 duration-300 ease-in-out">
        <FaArrowRight />
      </span>
    </div>
  );
};

export default NavigationBTNS;
