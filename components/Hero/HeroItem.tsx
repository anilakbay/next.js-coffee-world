import React from "react";
import HeroButton from "../Button/HeroButton";
import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";

interface HeroItemProps {
  label1: string;
  label2: string;
  label3: string;
  src: string;
  text1: string;
  text2: string;
}

const HeroItem: React.FC<HeroItemProps> = ({
  label1,
  label2,
  label3,
  src,
  text1,
  text2,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center pt-10 gap-5 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sriracha">
          {label1}{" "}
          <span
            className="font-pacifiko
               bg-clip-text text-transparent
               bg-gradient-to-l from-light to-primary/75
               "
          >
            {label2}
          </span>{" "}
          {label3}
        </h1>

        <div className="flex justify-center items-center">
          <HeroButton label="Visit" icon={BiChevronRight}></HeroButton>
        </div>
      </div>

      <div
        className="min-h-[450px]
         flex justify-center relative"
      >
        <Image
          src={src}
          alt=""
          width={420}
          height={420}
          className="spin mx-auto"
        ></Image>

        <div
          className="absolute bg-gradient-to-b
             from-primary to-primary/75 
             left-10 md:left-12 lg:left-40 
             top-10
             
             p-3 
             rounded-lg shadow-md
             "
        >
          <h1>{text1}</h1>
        </div>

        <div
          className="absolute bg-gradient-to-b
             from-primary to-primary/75 
             right-10 md:right-12 lg:right-40 
             bottom-10
             
             p-3 
             rounded-lg shadow-md
             "
        >
          <h1>{text2}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
