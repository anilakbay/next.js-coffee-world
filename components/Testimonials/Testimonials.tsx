import React from "react";
import TestimonialItem from "./TestimonialItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const TestimonialsData = [
  {
    id: 1,
    img: "/images/person/1.jpg",
    name: "Angelie Jul",
    description:
      "Coffee World has transformed my morning routine! Their premium blends are incredible and the community is amazing.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/images/person/2.jpg",
    name: "Peper Pods",
    description:
      "As a coffee shop owner, I rely on Coffee World for trends and reviews. Their insights help me improve my menu!",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "/images/person/3.jpg",
    name: "Bruce Wayne",
    description:
      "The quality of coffee reviews here is outstanding. I've discovered amazing coffee shops through this platform.",
    aosDelay: "300",
  },
  {
    id: 4,
    img: "/images/person/4.jpg",
    name: "Latte",
    description:
      "Coffee World's community is fantastic! I've connected with fellow coffee enthusiasts and learned brewing methods.",
    aosDelay: "400",
  },
  {
    id: 5,
    img: "/images/person/5.jpg",
    name: "Angel Wick",
    description:
      "This platform has elevated my coffee experience! The expert reviews and community discussions are amazing.",
    aosDelay: "500",
  },
  {
    id: 6,
    img: "/images/person/6.jpg",
    name: "Arya Stark",
    description:
      "I love how Coffee World brings together coffee lovers worldwide. The reviews are honest and detailed.",
    aosDelay: "600",
  },
  {
    id: 7,
    img: "/images/person/7.jpg",
    name: "Bruce Banner",
    description:
      "Coffee World has become my go-to source for all things coffee. The quality of content is outstanding!",
    aosDelay: "700",
  },
  {
    id: 8,
    img: "/images/person/1.jpg",
    name: "Sarah Johnson",
    description:
      "The coffee recommendations here are spot-on! I've discovered amazing local roasters and learned brewing methods.",
    aosDelay: "800",
  },
  {
    id: 9,
    img: "/images/person/2.jpg",
    name: "Mike Chen",
    description:
      "As a barista, I appreciate the detailed reviews and brewing guides. Coffee World has helped me improve my skills!",
    aosDelay: "900",
  },
];

function Testimonials() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-second2 font-bold text-gray-800 mb-6">
            What Our Customers Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover why thousands of coffee lovers trust Coffee World for their daily coffee experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {TestimonialsData.map((testimon) => (
            <SwiperSlide key={testimon.id}>
              <TestimonialItem
                aosDelay={testimon.aosDelay}
                description={testimon.description}
                img={testimon.img}
                name={testimon.name}
              ></TestimonialItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
