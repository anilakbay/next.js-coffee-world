"use client";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

// Lazy load heavy components
const Hero = dynamic(() => import("@/components/Hero/Hero"), {
  loading: () => <div className="min-h-[550px] md:min-h-[600px] bg-brandDark flex items-center justify-center"><div className="text-light">Loading...</div></div>
});

const Services = dynamic(() => import("@/components/Services/Services"), {
  loading: () => <div className="py-10"><div className="container text-center"><div className="text-gray-600">Loading services...</div></div></div>
});

const Banner = dynamic(() => import("@/components/Banner/Banner"), {
  loading: () => <div className="min-h-[550px] bg-gray-200 flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>
});

const PlayStore = dynamic(() => import("@/components/PlayStore/PlayStore"), {
  loading: () => <div className="min-h-[300px] bg-gray-200 flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>
});

const Testimonials = dynamic(() => import("@/components/Testimonials/Testimonials"), {
  loading: () => <div className="py-10"><div className="container text-center"><div className="text-gray-600">Loading testimonials...</div></div></div>
});

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  loading: () => <div className="min-h-[200px] bg-gray-800 flex items-center justify-center"><div className="text-white">Loading...</div></div>
});

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <PlayStore />
      <Testimonials />
      <Footer />
    </>
  );
}
