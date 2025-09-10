import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import HeroItem from "./HeroItem";

function Hero() {
  const heroItems = [
    {
      label1: "Discover the world's",
      label2: "finest coffee",
      label3: "experience with us.",
      src: "/images/1.png",
      text1: "Premium Quality",
      text2: "Expert Roasted",
    },
    {
      label1: "From bean to cup,",
      label2: "perfection ",
      label3: "in every sip.",
      src: "/images/3.png",
      text1: "Artisan Crafted",
      text2: "Fresh Daily",
    },
    {
      label1: "Join our community",
      label2: "of coffee ",
      label3: "enthusiasts worldwide.",
      src: "/images/4.png",
      text1: "Global Community",
      text2: "Local Taste",
    },
    {
      label1: "Your perfect cup",
      label2: "awaits ",
      label3: "at Coffee World.",
      src: "/images/5.png",
      text1: "Personalized",
      text2: "Experience",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-[700px] md:min-h-[800px] lg:min-h-[900px] bg-gradient-to-br from-brandDark via-secondary to-primary
    justify-center items-center text-light flex relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      <div className="container relative z-10">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {heroItems.map((item, index) => (
            <SwiperSlide key={`hero-slide-${item.label1}-${item.label2}`}>
              <HeroItem
                label1={item.label1}
                label2={item.label2}
                label3={item.label3}
                src={item.src}
                text1={item.text1}
                text2={item.text2}
              ></HeroItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;
