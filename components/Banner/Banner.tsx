import Image from "next/image";
import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";

function Banner() {
  return (
    <section
      id="about"
      className="bg-[url('/images/h1.jpg')] bg-center
    bg-no-repeat bg-cover h-full w-full relative"
      aria-labelledby="about-heading"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div
        className="min-h-[600px] flex justify-center items-center
        py-12 relative z-10"
      >
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div data-aos="zoom-in" className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl scale-110"></div>
                <Image
                  src="/images/2.png"
                  alt="Premium coffee beans"
                  width={400}
                  height={400}
                  className="spinOne mx-auto drop-shadow-2xl relative z-10"
                />
                {/* Enhanced decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary/40 to-primary/20 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-secondary/40 to-secondary/20 rounded-full animate-pulse delay-1000 shadow-lg"></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-br from-white/30 to-white/10 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/4 -right-8 w-4 h-4 bg-gradient-to-br from-white/20 to-white/5 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-8 order-1 lg:order-2">
              <div data-aos="fade-up">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                  <span className="text-sm font-semibold text-white/90">✨ Premium Quality</span>
                </div>
                <h1
                  id="about-heading"
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold
                          font-second2 text-white mb-6 leading-tight"
                >
                  Premium Coffee
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
              </div>

              <p
                data-aos="fade-up"
                className="text-lg md:text-xl text-white/90 tracking-wide leading-relaxed max-w-2xl"
              >
                Experience the finest selection of premium coffee beans sourced from the world&apos;s best coffee regions. Our expert roasters carefully craft each blend to deliver exceptional flavor profiles that will elevate your coffee experience to new heights.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="h-10 w-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <GrSecure className="text-lg text-white" />
                    </div>
                    <span className="font-poppins text-white font-semibold text-sm">Premium Quality</span>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="h-10 w-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <IoFastFood className="text-lg text-white" />
                    </div>
                    <span className="font-poppins text-white font-semibold text-sm">Hot Coffee</span>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <GiFoodTruck className="text-lg text-white" />
                    </div>
                    <span className="font-poppins text-white font-semibold text-sm">Cold Coffee</span>
                  </div>
                </div>

                <div
                  data-aos="slide-left"
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <h2 className="text-lg font-semibold font-sriracha text-white mb-3">
                    Coffee Community
                  </h2>
                  <p className="text-white/90 leading-relaxed text-sm">
                    Join our vibrant community of coffee enthusiasts! Share your favorite brewing methods, discover new coffee shops, and connect with fellow coffee lovers from around the world. Your perfect cup awaits!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
