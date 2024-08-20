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
      className="rounded-2xl bg-gradient-to-b from-primary to-brandDark/75  group 
    relative shadow-xl md:max-w-96 w-full"
    >
      <div className="h-52">
        <Image
          alt=""
          src={img}
          width={200}
          className="mx-auto
            transform p-6 rounded-full group-hover:scale-110 transition
            duration-500"
          height={200}
        ></Image>
      </div>

      <div className="p-4 text-center">
        <div className="w-full">
          <h1
            className="text-xl lg:text-2xl font-bold font-poppins 
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
