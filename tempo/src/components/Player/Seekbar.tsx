import { useSongModal } from "@/zustand/songModal";
import React from "react";
import {Progress} from '@/components/ui/progress'
type Props = {
  value: number | undefined;
  min: any;
  max: number;
  onInput: (event: any) => any
  setSeekTime:React.Dispatch<React.SetStateAction<number | undefined|null>>;
  appTime: number;
};

const Seekbar = ({ value, appTime, min, max, setSeekTime,onInput }: Props) => {
  const {isOpen} = useSongModal()
  
  const getTime = (time: any) => {
   return `${Math.floor(+time / 60)}:${`0${Math.floor(+time % 60)}`.slice(-2)}`;
  };

  return (
    <div className={`${isOpen ? 'flex items-center' : 'hidden sm:flex flex-row items-center'}`}>
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className="hidden lg:mr-4 lg:block text-white"
      >
        -
      </button>
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
      <Progress
        value={value}
        max={max}
        onInput={onInput}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className="hidden lg:ml-4 lg:block text-white"
      >
        +
      </button>
    </div>
  );
};

export default Seekbar;
