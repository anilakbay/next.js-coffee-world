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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="flex flex-col justify-center pt-10 gap-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sriracha leading-tight">
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

        <p className="text-lg md:text-xl text-light/90 max-w-lg mx-auto lg:mx-0">
          Experience the world&apos;s finest coffee blends, expertly crafted for the ultimate coffee connoisseur.
        </p>

        <div className="flex justify-center lg:justify-start items-center gap-4">
          <HeroButton label="Explore Menu" icon={BiChevronRight}></HeroButton>
          <div className="hidden lg:flex items-center gap-2 text-light/70">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm">Premium Quality Guaranteed</span>
          </div>
        </div>
      </div>

      <div
        className="min-h-[500px] lg:min-h-[600px]
         flex justify-center relative"
      >
        <div className="relative">
          <Image
            src={src}
            alt="Premium coffee cup"
            width={500}
            height={500}
            className="spin mx-auto drop-shadow-2xl"
            priority={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />

          {/* Floating Badge 1 - Better positioned */}
          <div
            className="absolute bg-gradient-to-br from-primary/90 to-secondary/90 backdrop-blur-md
             -left-8 md:-left-12 lg:-left-16 
             top-16 md:top-20 lg:top-24
             p-3 md:p-4
             rounded-xl shadow-2xl border border-white/30
             transform hover:scale-105 transition-all duration-300
             z-10
             "
          >
            <h3 className="text-xs md:text-sm font-bold text-white drop-shadow-lg">{text1}</h3>
          </div>

          {/* Floating Badge 2 - Better positioned */}
          <div
            className="absolute bg-gradient-to-br from-secondary/90 to-primary/90 backdrop-blur-md
             -right-8 md:-right-12 lg:-right-16 
             bottom-16 md:bottom-20 lg:bottom-24
             p-3 md:p-4
             rounded-xl shadow-2xl border border-white/30
             transform hover:scale-105 transition-all duration-300
             z-10
             "
          >
            <h3 className="text-xs md:text-sm font-bold text-white drop-shadow-lg">{text2}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
