import Image from "next/image";
import React from "react";

interface TestimonialItemProps {
  img: string;
  name: string;
  description: string;
  aosDelay: string;
}
const TestimonialItem: React.FC<TestimonialItemProps> = ({
  aosDelay,
  description,
  img,
  name,
}) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-once="false"
      data-aos-delay={aosDelay}
      className="rounded-2xl bg-gradient-to-br from-primary via-secondary to-brandDark/90 group 
    relative shadow-xl hover:shadow-2xl md:max-w-96 w-full transform hover:-translate-y-1 transition-all duration-300 border border-white/10"
    >
      <div className="h-32">
        <Image
          alt={`${name} profile picture`}
          src={img}
          width={120}
          height={120}
          className="mx-auto
            transform p-3 rounded-full group-hover:scale-110 transition
            duration-500"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        ></Image>
      </div>

      <div className="p-3 text-center">
        <div className="w-full">
          <h1
            className="text-lg lg:text-xl font-bold font-poppins 
                text-light group-hover:text-white transition duration-500"
          >
            {name}
          </h1>
          <p
            className=" text-light group-hover:text-white  
                transition duration-500"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
