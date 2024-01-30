import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Sectionfirst from "@/components/Sectionfirst";
import Swiperr from "@/components/Swiper";
import Menu from "@/components/Menu";
import { useState } from "react";
import Loactioncontact from "@/components/Loactioncontact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Sectionfirst />
      <div className="max-w-[1440px] w-full mx-auto">
        <Swiperr />
      </div>
      <Menu />
      <Loactioncontact />
      <Footer/>
    </>
  );
}
