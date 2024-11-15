"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Banner from "@/components/Banner/Banner";
import PlayStore from "@/components/PlayStore/PlayStore";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

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
