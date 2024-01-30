import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="flex px-3 justify-between gap-2 items-center bg-black rounded-full h-[82px] text-black">
          <Image src="/img/logo.png" width={137} height={397} alt="logo"/>
          <div className="flex max-md:hidden items-center gap-8">
            <Link
              className="text-white font-bold text-[16px] hover:text-[#FFC554] duration-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-white font-bold text-[16px] hover:text-[#FFC554] duration-300"
              href="/"
            >
              Pages
            </Link>
            <Link
              className="text-white font-bold text-[16px] hover:text-[#FFC554] duration-300"
              href="/"
            >
              Menu
            </Link>
            <Link
              className="text-white font-bold text-[16px] hover:text-[#FFC554] duration-300"
              href="/"
            >
              Components
            </Link>
          </div>
          <button
            type="submit"
            className="text-[#FFC554] border-[2px] rounded-lg border-[#FFC554] text-[16px] font-bold uppercase max-w-[244px] w-full h-[38px] hover:text-white hover:border-white duration-300"
          >
            Make aReservation
          </button>
          <Image src="/img/menu.png" width={30} height={30} alt="menu-icon" />
        </div>
        <div className="flex gap-[100px] items-center mt-[50px]">
          <Image src="/img/bg.png" width={600} height={500}  alt="bg-main"/>
          <div>
            <h1 className="font-bold text-[38px] max-w-[528px] w-full">
              <span className="font-normal">The Spectacle</span> Before Us Was
              Indeed <span className="font-normal">Sublime.</span>
            </h1>
            <p className="mt-[20px] max-w-[528px] w-full text-[24px]">
              Apparently, we had reached a great height in the atmosphere, for
              the sky was a dead black, and which lifts the horizon of the sea
              to the level of the spectator on a hillside.
            </p>
            <div className="flex mt-[40px] gap-5">
              <button
                type="submit"
                className="hover:bg-[#FFC554] border-[2px] rounded-xl border-[#FFC554] text-[16px] font-medium max-w-[234px] w-full h-[38px] text-black bg-white duration-300"
              >
                ORDER ONLINE
              </button>
              <button
                type="submit"
                className="hover:bg-[#FFC554] border-[2px] border-[#FFC554] text-[16px] font-medium  max-w-[234px] w-full h-[38px] rounded-xl text-black bg-white duration-300"
              >
                OUR LOCATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
