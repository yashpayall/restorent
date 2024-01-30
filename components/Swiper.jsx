import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { card } from "./Helper";
import Image from "next/image";

export default function Swiperr() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        autoplay={true}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper mt-[100px]"
      >
        {card.map((item, index) => (
          <SwiperSlide>
            <div key={index}>
              <Image src={item.img} alt="card-img" className="relative" width={300} height={300} />
              <h1 className="text-center absolute font-bold text-[32px] hover:block hidden">
                {item.heading}
              </h1>
              <h1 className="font-extrabold absolute mt-2 text-center text-[38px] hover:block hidden">
                {item.text}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
