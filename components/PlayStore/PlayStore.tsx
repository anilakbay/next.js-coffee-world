import Image from "next/image";
import React from "react";

function PlayStore() {
  return (
    <div
      className="bg-[url('/images/beans1.jpg')] bg-center
    bg-no-repeat bg-cover h-full w-full relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      
      <div className="relative z-10 py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up" data-aos-duration="200" className="text-center lg:text-left">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl
                      text-white font-bold mb-6 font-sriracha"
              >
                Download Our App
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get the Coffee World app and enjoy premium coffee experiences on the go. 
                Available for both Android and iOS devices.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
                <button 
                  className="transform hover:scale-105 transition-transform duration-300 bg-transparent border-none p-0"
                  aria-label="Download on App Store"
                >
                  <Image
                    alt="Download on App Store"
                    src="/images/app_store.png"
                    width={180}
                    height={60}
                    className="drop-shadow-lg"
                  />
                </button>
                <button 
                  className="transform hover:scale-105 transition-transform duration-300 bg-transparent border-none p-0"
                  aria-label="Get it on Google Play"
                >
                  <Image
                    alt="Get it on Google Play"
                    src="/images/play_store.png"
                    width={180}
                    height={60}
                    className="drop-shadow-lg"
                  />
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="300">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl">📱</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayStore;
