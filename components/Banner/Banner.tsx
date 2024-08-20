import Image from "next/image";
import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";

function Banner() {
  return (
    <div
      className="bg-[url('/images/h1.jpg')] bg-center
    bg-no-repeat bg-cover h-full w-full"
    >
      <div
        className="min-h-[550px] flex justify-center items-center
        py-12"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div data-aos="zoom-in">
              <Image
                src="/images/2.png"
                alt=""
                width={420}
                height={420}
                className="spinOne mx-auto"
              ></Image>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h1
                className="text-3xl md:text-4xl font-bold
                        font-second2"
                data-aos="fade-up"
              >
                Premium Coffee
              </h1>

              <p
                data-aos="fade-up"
                className="text-sm text-gray-600 tracking-wide"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                similique officia, quaerat explicabo ea quae eum. Quisquam
                nobis, quod facere minima veritatis aut quaerat velit sed,
                praesentium libero iusto nam!
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className=" space-y-5">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="flex items-center gap-3"
                  >
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-red-300"></GrSecure>
                    <span className="font-poppins">Premium Coffee</span>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-3"
                  >
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-green-300"></IoFastFood>
                    <span className="font-poppins">Hot Coffee</span>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex items-center gap-3"
                  >
                    <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-blue-300"></GiFoodTruck>
                    <span className="font-poppins">Cold Coffee</span>
                  </div>
                </div>

                <div
                  data-aos="slide-left"
                  className=" border-l-4 border-primary/50
                            space-y-2 pl-6"
                >
                  <h1
                    className="text-2xl font-semibold
                                font-sriracha"
                  >
                    Tea Lover{" "}
                  </h1>
                  <p className=" text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium architecto amet eveniet qui obcaecati distinctio
                    explicabo laudantium assumenda sequi unde quas, provident
                    nemo quod! Debitis dolores ex dolor provident obcaecati?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
